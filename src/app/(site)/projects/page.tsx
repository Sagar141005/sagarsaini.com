import React from "react";
import type { Metadata } from "next";
import ProjectList from "@/components/project/ProjectList";
import UpcomingProject from "@/components/project/UpcomingProject";
import ContentHeader from "@/components/common/ContentHeader";
import { UPCOMING_DATA } from "@/data/upcomingProjects";
import Container from "@/components/common/Container";
import { getProjects } from "@/lib/projects";
import { ProjectPreview } from "@/types/project";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies and production-ready applications built with Next.js, TypeScript, realtime systems, and AI integrations.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Sagar Saini",
    description:
      "Case studies and production-ready applications spanning realtime collaboration and AI-powered experiences.",
    url: "/projects",
    type: "website",
  },
};

const page = () => {
  const rawProjects = getProjects();

  const projects: ProjectPreview[] = rawProjects.map((p) => ({
    slug: p.slug,
    title: p.metadata.title,
    description: p.metadata.description,
    image: p.metadata.image,
    video: p.metadata.video,
    highlightTech: p.metadata.highlightTech || [],
    links: {
      demo: p.metadata.links.demo,
      github: p.metadata.links.github,
    },
  }));

  return (
    <Container className="py-16 space-y-8">
      <ContentHeader
        heading="Projects"
        subHeading="My projects and work across various technologies and domains, exploring innovative solutions and practical applications."
        size="lg"
        as="h1"
      />
      <ProjectList projects={projects} showAll />

      <UpcomingProject projects={UPCOMING_DATA} />
    </Container>
  );
};

export default page;
