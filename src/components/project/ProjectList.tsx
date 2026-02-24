"use client";

import React from "react";
import Link from "next/link";
import ProjectCard from "@/components/project/ProjectCard";
import TechIcon from "../common/TechIcon";
import { TECH_ICONS } from "@/data/techMap";
import { Button } from "../ui/button";
import ChevronRightIcon from "../svg/ChevronRightIcon";
import { ProjectPreview } from "@/types/project";

interface ProjectListProps {
  projects: ProjectPreview[];
  showAll?: boolean;
}

export default function ProjectList({
  projects,
  showAll = false,
}: ProjectListProps) {
  const visibleProjects = showAll ? projects : projects.slice(0, 4);
  const hasMoreProjects = !showAll && projects.length > 4;

  return (
    <section id="projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {visibleProjects.map((project) => (
          <div key={project.slug}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              video={project.video}
              slug={project.slug}
              highlightTech={project.highlightTech.map((techName) => {
                const config = TECH_ICONS[techName];
                return {
                  name: techName,
                  icon: (
                    <TechIcon
                      label={techName}
                      src={config?.src}
                      srcLight={config?.srcLight}
                      srcDark={config?.srcDark}
                      priority={config?.priority}
                      className="w-6 h-6"
                    />
                  ),
                };
              })}
              links={project.links}
            />
          </div>
        ))}
      </div>

      {hasMoreProjects && (
        <div className="flex justify-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/projects" className="mt-6 group">
              View all projects <ChevronRightIcon />
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
}
