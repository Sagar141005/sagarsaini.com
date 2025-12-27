import React from "react";
import Container from "@/components/common/Container";
import ContentHeader from "@/components/common/ContentHeader";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <ContentHeader
          heading="Contact"
          subHeading="Have a question or want to work together?"
          size="lg"
        />

        <div className="h-px w-full bg-accent"></div>

        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
