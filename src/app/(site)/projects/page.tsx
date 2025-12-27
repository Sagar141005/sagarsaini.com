import React from "react";
import ProjectList from "@/components/project/ProjectList";
import UpcomingProject from "@/components/project/UpcomingProject";
import ContentHeader from "@/components/common/ContentHeader";
import projects from "@/data/projects";
import { UPCOMING_DATA } from "@/data/upcomingProjects";

const page = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 pt-16 bg-white dark:bg-[#09090B]">
      <section className="mb-16 space-y-6">
        <ContentHeader
          heading="Projects"
          subHeading="A curated collection of projects I’ve worked on — spanning full-stack
          apps, open-source tools, design experiments, and real-time or
          AI-integrated builds. These reflect my passion for clean architecture,
          intuitive UX, and pushing technical boundaries."
          size="lg"
        />
        <ProjectList projects={projects} />
      </section>

      <UpcomingProject projects={UPCOMING_DATA} />
    </div>
  );
};

export default page;
