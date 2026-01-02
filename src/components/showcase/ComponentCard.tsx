"use client";

import React from "react";
import { motion } from "motion/react";
import { ComponentItem } from "@/data/components";
import { Button } from "@/components/ui/button";
import CodeIcon from "../svg/CodeIcon";
import ArrowUpRightIcon from "../svg/ArrowUpRightIcon";

interface CardProps {
  item: ComponentItem;
  onClick: (item: ComponentItem) => void;
}

export default function ComponentCard({ item, onClick }: CardProps) {
  const isCodeOnly = item.category === "Hook" || item.category === "Function";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group flex flex-col gap-3 w-full border border-border border-dashed rounded-2xl bg-card transition-all"
    >
      <div className="relative w-full p-2 h-52">
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-border bg-muted/30 flex items-center justify-center cursor-pointer">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none" />
          <div className="relative z-10 p-4">
            {isCodeOnly ? (
              <CodeIcon className="h-10 w-10 text-muted-foreground/30" />
            ) : (
              item.preview
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 px-4 pb-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-semibold text-lg text-foreground tracking-tight">
            {item.title}
          </h3>
          <Button
            variant="ghost"
            onClick={() => onClick(item)}
            className="h-8 w-8 shrink-0 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors rounded-full border border-border"
            title="View Code & Details"
          >
            <ArrowUpRightIcon className="w-4 h-4" />
          </Button>
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground leading-relaxed font-light">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
