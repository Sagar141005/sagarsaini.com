"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { ChevronDown, ChevronRight } from "lucide-react";

type Project = {
  title: string;
  image: string;
  link: string;
};

type ProjectListProps = {
  projects: Project[];
};

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  const showMoreButton = projects.length > 3 && !showAll;
  const showViewAllLink = projects.length >= 6 && showAll;

  return (
    <div className="flex flex-col gap-8">
      {visibleProjects.map((project, i) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          image={project.image}
          link={project.link}
          reverse={i % 2 === 1}
        />
      ))}

      {showMoreButton && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-6 flex justify-around text-sm font-medium text-zinc-700 dark:text-zinc-100 hover:text-zinc-900 dark:hover:text-white transition-colors group"
        >
          <span className="inline-flex items-center justify-center gap-1">
            Show more{" "}
            <ChevronDown className="size-4 pt-0.5 transition-transform group-hover:translate-y-0.5" />
          </span>
        </button>
      )}

      {showViewAllLink && (
        <Link
          href="/projects"
          className="mt-6 flex items-center justify-around"
        >
          <span className="flex items-center gap-[0.5] px-4 py-2 text-sm font-semibold text-zinc-700 hover:text-zinc-950 dark:text-zinc-100 dark:hover:text-white border border-zinc-300 dark:border-zinc-600 hover:border-zinc-950 dark:hover:border-zinc-400 rounded-md transition-colors group">
            View all projects{" "}
            <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      )}
    </div>
  );
};

export default ProjectList;
