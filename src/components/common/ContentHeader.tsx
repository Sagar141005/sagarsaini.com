import React from "react";
import { cn } from "@/lib/utils";

interface ContentHeaderProps {
  heading: string;
  subHeading?: string;
  size?: "sm" | "lg";
  as?: "h1" | "h2" | "h3";
}

export default function ContentHeader({
  heading,
  subHeading,
  size = "sm",
  as = "h2",
}: ContentHeaderProps) {
  const HeadingTag = as;

  return (
    <div
      className={cn(size == "sm" && "space-y-0", size === "lg" && "space-y-4")}
    >
      <HeadingTag
        className={cn(
          "text-foreground",
          size === "sm" && "text-2xl sm:text-3xl font-semibold",
          size === "lg" && "text-3xl sm:text-4xl font-bold leading-tight"
        )}
      >
        {heading}
      </HeadingTag>

      {subHeading && (
        <p
          className={cn(
            "text-muted-foreground max-w-2xl font-light leading-relaxed",
            size === "sm" && "text-base sm:text-md",
            size === "lg" && "text-md sm:text-lg"
          )}
        >
          {subHeading}
        </p>
      )}
    </div>
  );
}
