"use client";

import React from "react";
import ContentHeader from "../common/ContentHeader";
import { motion } from "motion/react";
import { cardVariants, staggerContainer } from "@/lib/motionVariants";
import { ProjectStatus, UpcomingProjectItem } from "@/types/project";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  "In Progress":
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  Upcoming: "bg-muted text-muted-foreground",
  Planned: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "On Hold": "bg-destructive/10 text-destructive",
};

type UpcomingProjectsProps = {
  projects: UpcomingProjectItem[];
  className?: string;
};

export default function UpcomingProjects({ projects }: UpcomingProjectsProps) {
  return (
    <div className="mt-16 space-y-4">
      <ContentHeader
        heading="What’s Next"
        subHeading="Ideas and experiments I’m currently working on."
      />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-5 transition-colors"
          >
            <div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-foreground tracking-tight">
                  {project.title}
                </h3>

                <span
                  className={`
                    shrink-0 text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full ${
                      STATUS_STYLES[project.status] || STATUS_STYLES["Upcoming"]
                    }
                  `}
                >
                  {project.status}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-balance font-light">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
