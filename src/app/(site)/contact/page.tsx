import React from "react";
import type { Metadata } from "next";
import Container from "@/components/common/Container";
import ContentHeader from "@/components/common/ContentHeader";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hiring, collaboration, or freelance inquiry? Reach out and I’ll get back to you directly.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Sagar Saini",
    description:
      "Let’s talk about roles, projects, or partnerships.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <Container className="py-16 space-y-8">
      <ContentHeader
        heading="Contact"
        subHeading="Have a question or want to work together?"
        size="lg"
        as="h1"
      />

      <div className="h-px w-full bg-accent"></div>

      <div className="mx-auto max-w-2xl">
        <ContactForm />
      </div>
    </Container>
  );
}
