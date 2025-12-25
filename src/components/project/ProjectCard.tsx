"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import GithubIcon from "../svg/GithubIcon";
import WebsiteIcon from "../svg/WebsiteIcon";
import ArrowRightIcon from "../svg/ArrowRightIcon";
import PlayIcon from "../svg/PlayIcon";

export type TechItem = {
  name: string;
  icon: React.ReactNode;
};

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
  slug: string;
  technologies: TechItem[];
  className?: string;
  links: {
    demo?: string;
    github?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  videoUrl,
  slug,
  technologies,
  links,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group flex flex-col gap-3 group-card w-full border border-border rounded-2xl bg-card transition-colors overflow-hidden">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-muted group/image">
        <motion.img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-all duration-500 ease-out group-hover/image:scale-105 group-hover/image:blur-sm"
        />

        {videoUrl && (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/image:opacity-100 cursor-pointer z-10 bg-black/10 backdrop-blur-[2px]">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white transition-all hover:bg-white hover:text-black"
                >
                  <PlayIcon className="h-5 w-5 fill-current ml-0.5" />
                </motion.div>
              </div>
            </DialogTrigger>

            <DialogContent className="max-w-4xl w-[95vw] p-0 border-0 bg-transparent shadow-none overflow-hidden">
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-black">
                <video
                  src={videoUrl}
                  autoPlay
                  loop
                  controls
                  className="h-full w-full object-contain"
                />
              </div>
              <DialogTitle className="sr-only">
                {title} Video Preview
              </DialogTitle>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <div className="flex flex-col gap-4 p-4 pt-2">
        <div>
          <Link href={`/project/${slug}`} className="group/title block">
            <h3 className="text-lg font-semibold text-foreground tracking-tight transition-colors group-hover/title:text-muted-foreground">
              {title}
            </h3>
          </Link>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground text-balance font-light">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h5 className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
            Technologies
          </h5>
          <div className="flex items-center gap-3">
            <TooltipProvider delayDuration={100}>
              {technologies.map((tech, index) => (
                <React.Fragment key={index}>{tech.icon}</React.Fragment>
              ))}
            </TooltipProvider>

            {technologies.length > 5 && (
              <span className="text-xs text-muted-foreground">
                +{technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        <div className="mt-1 flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-3">
            {links.demo && (
              <Link
                href={links.demo}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <WebsiteIcon className="size-4 stroke-[1.5]" />
              </Link>
            )}

            {links.github && (
              <Link
                href={links.github}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <GithubIcon className="size-4 stroke-[1.5]" />
              </Link>
            )}
          </div>

          <Button variant="link" size="sm" asChild className="h-auto py-0">
            <Link
              href={`/project/${slug}`}
              className="flex items-center gap-1 text-xs font-thin font-mono text-secondary"
            >
              View Details
              <ArrowRightIcon className="size-4 stroke-[1.5]" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
