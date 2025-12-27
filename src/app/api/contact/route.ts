import * as React from "react";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { rateLimit, getClientIP } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export async function POST(req: Request) {
  try {
    // Rate Limiting
    const ip = getClientIP(req.headers);
    const { allowed, remaining, resetAt } = rateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": "5",
            "X-RateLimit-Remaining": remaining.toString(),
            "X-RateLimit-Reset": resetAt.toString(),
          },
        }
      );
    }

    // Parse & Validate Body
    const body = await req.json();
    const { name, email, phone, message } = contactFormSchema.parse(body);

    // Parallel Execution: Email + Telegram
    const emailPromise = resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: [process.env.CONTACT_EMAIL!],
      subject: `New Message from ${name}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        
        Message:
        ${message}
      `,
      html: `
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  </head>
  <body style="background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;">
    <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
      
      <div style="background-color: #ffffff; border-radius: 8px; padding: 32px; border: 1px solid #e4e4e7; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
        
        <h2 style="color: #18181b; font-size: 20px; font-weight: 600; margin: 0 0 24px 0;">
          New Inquiry
        </h2>

        <div style="margin-bottom: 24px;">
          <p style="margin: 0 0 4px 0; color: #71717a; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">From</p>
          <p style="margin: 0 0 16px 0; color: #18181b; font-size: 16px; font-weight: 500;">${name}</p>
          
          <p style="margin: 0 0 4px 0; color: #71717a; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
          <p style="margin: 0 0 16px 0; color: #18181b; font-size: 16px;">
            <a href="mailto:${email}" style="color: #18181b; text-decoration: none; border-bottom: 1px solid #e4e4e7;">${email}</a>
          </p>

          <p style="margin: 0 0 4px 0; color: #71717a; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Phone</p>
          <p style="margin: 0; color: #18181b; font-size: 16px;">${phone || "<span style='color: #a1a1aa;'>Not provided</span>"}</p>
        </div>

        <hr style="border: none; border-top: 1px dashed #e4e4e7; margin: 24px 0;" />

        <div>
          <p style="margin: 0 0 12px 0; color: #71717a; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
          <div style="background-color: #fafafa; border: 1px solid #f4f4f5; border-radius: 6px; padding: 16px; color: #3f3f46; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
        </div>

        <div style="margin-top: 32px;">
          <a href="mailto:${email}?subject=Re: Inquiry via Portfolio" style="background-color: #18181b; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 500; display: inline-block;">
            Reply to ${name.split(" ")[0]}
          </a>
        </div>

      </div>
      
      <div style="text-align: center; margin-top: 24px;">
        <p style="color: #a1a1aa; font-size: 12px;">
          Sent from your portfolio contact form.
        </p>
      </div>

    </div>
  </body>
</html>
      `,
    });

    const telegramPromise = fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: `📩 <b>New Inquiry</b>\n\n👤 <b>Name:</b> ${name}\n📧 <b>Email:</b> ${email}\n📱 <b>Phone:</b> ${phone || "N/A"}\n\n📝 <b>Message:</b>\n${message}`,
          parse_mode: "HTML",
        }),
      }
    );

    const results = await Promise.allSettled([emailPromise, telegramPromise]);

    const emailResult = results[0];
    const telegramResult = results[1];

    if (emailResult.status === "rejected") {
      console.error("Email API Failed:", emailResult.reason);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    if (emailResult.status === "fulfilled" && emailResult.value.error) {
      console.error("Resend Error:", emailResult.value.error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    if (telegramResult.status === "rejected") {
      console.warn("Telegram API Failed:", telegramResult.reason);
    } else if (
      telegramResult.status === "fulfilled" &&
      !telegramResult.value.ok
    ) {
      const errorText = await telegramResult.value.text();
      console.warn("Telegram Rejected:", errorText);
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      {
        status: 200,
        headers: {
          "X-RateLimit-Limit": "5",
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": resetAt.toString(),
        },
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 }
      );
    }

    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
