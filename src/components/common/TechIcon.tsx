"use client";

import React from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { TooltipArrow } from "@radix-ui/react-tooltip";

interface TechIconProps {
  label: string;
  src?: string;
  srcLight?: string;
  srcDark?: string;
  className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({
  label,
  src,
  srcLight,
  srcDark,
  className = "w-8 h-8",
}) => {
  const universalSrc = src || srcLight;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "relative group flex items-center justify-center transition-transform hover:scale-110",
            className
          )}
        >
          {srcLight && srcDark ? (
            <>
              <div className="relative w-full h-full dark:hidden">
                <Image
                  src={srcLight}
                  alt={label}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-full hidden dark:block">
                <Image
                  src={srcDark}
                  alt={label}
                  fill
                  className="object-contain"
                />
              </div>
            </>
          ) : (
            universalSrc && (
              <div className="relative w-full h-full">
                <Image
                  src={universalSrc}
                  alt={label}
                  fill
                  className="object-contain"
                />
              </div>
            )
          )}
        </div>
      </TooltipTrigger>

      <TooltipContent
        side="top"
        className="bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 text-xs px-3 py-1.5 rounded-md shadow-lg border-none"
      >
        {label}
        <TooltipArrow
          className="fill-zinc-900 dark:fill-zinc-100"
          width={10}
          height={5}
        />
      </TooltipContent>
    </Tooltip>
  );
};

export default TechIcon;
