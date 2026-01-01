import OpenAI from "openai";
import { NextResponse } from "next/server";
import { rateLimit, getClientIP } from "@/lib/rate-limit";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function sanitizeInput(input: string): string {
  const injectionPatterns = [
    /ignore previous instructions/gi,
    /system prompt/gi,
    /you are now/gi,
    /act as/gi,
    /pretend to be/gi,
    /ignore all previous/gi,
    /forget everything/gi,
    /new instructions/gi,
    /override/gi,
    /bypass/gi,
    /hack/gi,
    /exploit/gi,
    /inject/gi,
    /prompt injection/gi,
    /system message/gi,
    /role play/gi,
    /character/gi,
    /persona/gi,
    /behave as/gi,
    /respond as/gi,
  ];

  let sanitized = input;

  injectionPatterns.forEach((pattern) => {
    sanitized = sanitized.replace(pattern, "[REDACTED]");
  });

  sanitized = sanitized.trim().replace(/\s+/g, " ");

  if (sanitized.length > 2000) {
    sanitized = sanitized.substring(0, 2000);
  }

  return sanitized;
}

const SYSTEM_PROMPT = `
You are a helpful AI assistant for Sagar Saini's portfolio website. 
Your goal is to answer visitor questions professionally and concisely based ONLY on the following information.

About Sagar:
- Role: Full Stack Developer
- Location: India
- Skills: I work primarily with Next.js, React, and TypeScript, building responsive interfaces using Tailwind CSS and component-driven UI systems. On the backend, I use Node.js and Express, with experience designing and integrating PostgreSQL and MongoDB databases.
- Preferences: 
    - Experience Level: Fresher
    - Work Mode: Open to both Remote and On-site opportunities
    - Availability: Open to Freelance, Contract, and Full-time roles
- Tone: Professional, friendly, and humble. Keep responses under 100 words.

Projects:
1. Vibeo: A Video streaming web app with Realtime chat. Tech: MERN Stack, Socket.io.
2. AI Resume Builder: A tool to generate cover letters and improve resumes using OpenAI.
3. Portfolio: This website, built with Next.js 14, Tailwind, and Framer Motion.

Contact Info:
- Email: sagarsaini1406@gmail.com (Always prefer this)
- Call Booking (Primary CTA): https://cal.com/sagar-jpa8yn/intro-collaboration-call
- Socials: 
    - GitHub: https://github.com/Sagar141005
    - Linkedin: https://www.linkedin.com/in/sagar-saini-9b45a52b2/
    - X(Twitter): https://x.com/not_sagar1410


Rules:
- Use markdown formatting for better readability
- Use **bold** for emphasis when needed
- Use bullet points (-) for lists when appropriate
- Be conversational and helpful
- If asked about something not in this list, say: "I'm not sure about that, but you can contact Sagar directly at sagarsaini1406@gmail.com."
- For work inquiries, direct to email: [sagarsaini1406@gmail.com](mailto:sagarsaini1406@gmail.com)
- Do not make up facts.
- Do not provide code snippets unless asked specifically about the tech stack.
- Only share the call booking link when the user explicitly:
  - asks to schedule a call
  - asks how to contact Sagar
  - shows clear hiring, freelance, or collaboration intent
- Do NOT include the call link in every response
- For general inquiries, prefer email
`;

export async function POST(req: Request) {
  try {
    const ip = getClientIP(req.headers);
    const { allowed, remaining, resetAt } = rateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        {
          response:
            "Too many requests. Please wait a minute before trying again.",
        },
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

    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const sanitizedMessage = sanitizeInput(message);

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: sanitizedMessage },
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    const response = completion.choices[0].message.content;

    return NextResponse.json(
      { response },
      {
        headers: {
          "X-RateLimit-Limit": "5",
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": resetAt.toString(),
        },
      }
    );
  } catch (error: any) {
    console.error("OpenAI API Error:", error);

    if (error.status === 429) {
      return NextResponse.json(
        {
          response:
            "I'm receiving too many requests right now. Please try again later.",
        },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { response: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
