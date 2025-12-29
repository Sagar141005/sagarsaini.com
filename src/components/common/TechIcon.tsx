"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import { useTheme } from "next-themes";

interface TechIconProps {
  label: string;
  src?: string;
  srcLight?: string;
  srcDark?: string;
  className?: string;
  priority?: boolean;
}

const TechIcon: React.FC<TechIconProps> = ({
  label,
  src,
  srcLight,
  srcDark,
  className = "w-8 h-8",
  priority,
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !resolvedTheme) return null;

  const finalSrc = src ?? (resolvedTheme === "dark" ? srcDark : srcLight);
  if (!finalSrc) return null;

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "relative group flex items-center justify-center transition-transform hover:scale-110",
              className
            )}
          >
            <Image
              key={finalSrc}
              src={finalSrc}
              alt={label}
              fill
              priority={priority}
              className="object-contain"
            />
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
    </TooltipProvider>
  );
};

export default TechIcon;
