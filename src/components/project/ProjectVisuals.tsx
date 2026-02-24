"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PlayIcon from "@/components/svg/PlayIcon";

interface ProjectVisualsProps {
  image: string;
  video?: string;
  title: string;
}

export default function ProjectVisuals({
  image,
  video,
  title,
}: ProjectVisualsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group/image relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 bg-muted/30 shadow-sm">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 768px"
        className="object-cover transition-all duration-500 ease-out group-hover/image:scale-105 group-hover/image:blur-[2px]"
        priority
      />

      {video && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button
              type="button"
              aria-label={`Play ${title} preview video`}
              className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/image:opacity-100 group-focus-within/image:opacity-100 cursor-pointer z-10 bg-background/20 backdrop-blur-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/80 backdrop-blur-md border border-border shadow-xl text-foreground transition-transform duration-200 hover:scale-110 active:scale-95">
                <PlayIcon className="h-6 w-6 fill-current ml-1" />
              </div>
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-5xl w-[95vw] p-0 border-0 bg-transparent shadow-none overflow-hidden sm:rounded-xl">
            <div className="aspect-video w-full overflow-hidden rounded-xl shadow-2xl bg-black">
              <video
                src={video}
                autoPlay
                loop
                controls
                playsInline
                className="h-full w-full object-contain"
              />
            </div>
            <DialogTitle className="sr-only">{title} Video Preview</DialogTitle>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
