"use client";

import React from "react";
import Link from "next/link";
import ProjectCard from "@/components/project/ProjectCard";
import TechIcon from "../common/TechIcon";
import { TECH_ICONS } from "@/data/techMap";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import ChevronRightIcon from "../svg/ChevronRightIcon";
import { cardVariants, staggerContainer } from "@/lib/motionVariants";

interface Project {
  title: string;
  description: string;
  image: string;
  video: string;
  slug: string;
  highlightTech: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

interface ProjectListProps {
  projects: Project[];
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
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {visibleProjects.map((project) => (
          <motion.div key={project.slug} variants={cardVariants}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              videoUrl={project.video}
              slug={project.slug}
              technologies={project.highlightTech.map((techName) => {
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
          </motion.div>
        ))}
      </motion.div>

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
