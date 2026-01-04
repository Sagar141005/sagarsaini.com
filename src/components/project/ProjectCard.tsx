"use client";

import React, { useState } from "react";
import Link from "next/link";
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
import { TechItem } from "@/types/project";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  video?: string;
  slug: string;
  highlightTech: TechItem[];
  links: {
    demo?: string;
    github?: string;
  };
}

export default function ProjectCard({
  title,
  description,
  image,
  video,
  slug,
  highlightTech,
  links,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group flex flex-col gap-3 group-card w-full border border-border border-dashed rounded-2xl bg-card transition-colors overflow-hidden">
      <div className="relative aspect-[16/10] w-full p-2">
        <div className="group/image relative h-full w-full overflow-hidden rounded-lg border border-border bg-muted/50">
          <Image
            src={image}
            alt={title}
            width={1920}
            height={1080}
            className="h-full w-full object-cover transition-all duration-500 ease-out group-hover/image:blur-xs"
          />

          {video && (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <div className="absolute inset-0 flex items-center justify-center rounded-lg opacity-0 transition-opacity duration-300 group-hover/image:opacity-100 cursor-pointer z-10 bg-background/20 backdrop-blur-[2px]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg text-foreground transition-all duration-200 hover:scale-110 active:scale-95">
                    <PlayIcon className="h-5 w-5 fill-current ml-0.5" />
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-4xl w-[95vw] p-0 border-0 bg-transparent shadow-none overflow-hidden">
                <div className="aspect-video w-full overflow-hidden rounded-xl shadow-2xl">
                  <video
                    src={video}
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
      </div>

      <div className="flex flex-col gap-4 px-4 pb-2">
        <div>
          <Link href={`/project/${slug}`}>
            <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors tracking-tight">
              {title}
            </h3>
          </Link>

          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground text-balance font-light">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <TooltipProvider delayDuration={100}>
              {highlightTech.slice(0, 6).map((tech, index) => (
                <React.Fragment key={index}>{tech.icon}</React.Fragment>
              ))}
            </TooltipProvider>

            {highlightTech.length > 6 && (
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                +{highlightTech.length - 6}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border/60 pt-3 pb-2">
          <div className="flex items-center gap-4">
            {links.demo && (
              <Link
                href={links.demo}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="Live Demo"
              >
                <WebsiteIcon className="size-4 stroke-[1.5]" />
              </Link>
            )}

            {links.github && (
              <Link
                href={links.github}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="Source Code"
              >
                <GithubIcon className="size-4 stroke-[1.5]" />
              </Link>
            )}
          </div>

          <Button variant="link" size="sm" asChild className="px-0 h-auto">
            <Link
              href={`/project/${slug}`}
              className="flex items-center gap-2 font-mono text-[10px] font-bold text-muted-foreground hover:text-foreground uppercase tracking-widest transition-colors"
            >
              Details
              <ArrowRightIcon className="size-3" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
