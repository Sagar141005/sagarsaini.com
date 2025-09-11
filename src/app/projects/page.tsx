import ProjectList from "@/components/ProjectList";
import UpcomingProject from "@/components/UpcomingProject";
import projects from "@/data/projects";
import React from "react";

const page = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 pt-16 bg-white dark:bg-[#09090B]">
      <section className="mb-16 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50">
          Projects
        </h1>
        <p className="text-base sm:text-lg font-light text-neutral-600 dark:text-neutral-400 max-w-2xl">
          A curated collection of projects I’ve worked on — spanning full-stack
          apps, open-source tools, design experiments, and real-time or
          AI-integrated builds. These reflect my passion for clean architecture,
          intuitive UX, and pushing technical boundaries.
        </p>
        <ProjectList projects={projects} showAllByDefault={true} />
      </section>

      <UpcomingProject />
    </div>
  );
};

export default page;
