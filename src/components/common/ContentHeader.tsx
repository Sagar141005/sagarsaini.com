import React from "react";
import { cn } from "@/lib/utils";

interface ContentHeaderProps {
  heading: string;
  subHeading?: string;
  size?: "sm" | "lg";
}

export default function ContentHeader({
  heading,
  subHeading,
  size = "sm",
}: ContentHeaderProps) {
  return (
    <div
      className={cn(size == "sm" && "space-y-2", size === "lg" && "space-y-4")}
    >
      <h1
        className={cn(
          "text-foreground",
          size === "sm" && "text-2xl sm:text-3xl font-semibold",
          size === "lg" && "text-3xl sm:text-4xl font-bold leading-tight"
        )}
      >
        {heading}
      </h1>

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
