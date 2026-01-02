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
            className="group relative flex flex-col justify-between rounded-2xl border border-border border-dashed p-4 bg-card transition-colors"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_top_right,black_0%,transparent_100%)] pointer-events-none opacity-50" />
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-foreground tracking-tight">
                  {project.title}
                </h3>

                <span
                  className={`
                    shrink-0 text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 font-mono rounded-md ${
                      STATUS_STYLES[project.status] || STATUS_STYLES["Planned"]
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
