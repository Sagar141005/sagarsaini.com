import React from "react";
import type { Metadata } from "next";
import Container from "@/components/common/Container";
import ContentHeader from "@/components/common/ContentHeader";
import { Button } from "@/components/ui/button";
import DownloadIcon from "@/components/svg/DownloadIcon";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "My resume in one place: experience, skills, and the kind of work I’ve done recently.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Resume | Sagar Saini",
    description:
      "A concise overview of my background, technical strengths, and project outcomes.",
    url: "/resume",
    type: "website",
  },
};

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <ContentHeader
            heading="Resume"
            subHeading="An overview of my qualifications and skills."
            size="lg"
            as="h1"
          />

          <Button
            variant="outline"
            size="sm"
            asChild
            className="gap-2 shrink-0"
          >
            <a href={process.env.RESUME_DOWNLOAD_URL}>
              <DownloadIcon />
              Download PDF
            </a>
          </Button>
        </div>

        <div className="h-px w-full bg-accent"></div>

        <div className="mx-auto w-full">
          <div className="overflow-hidden rounded-lg border border-border">
            <iframe
              src={process.env.RESUME_PREVIEW_URL}
              className="w-full h-full aspect-[1/1.41]"
              title="Resume PDF"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
