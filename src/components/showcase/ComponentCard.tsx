"use client";

import React from "react";
import { motion } from "motion/react";
import { ComponentItem } from "@/data/components";
import { Button } from "@/components/ui/button";
import MaximizeIcon from "../svg/MaximizeIcon";
import CodeIcon from "../svg/CodeIcon";

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
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card hover:border-border-foreground/20 transition-all shadow-sm"
    >
      <div className="relative flex h-48 items-center justify-center bg-secondary/30 border-b border-border/50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.05] pointer-events-none" />

        <div className="relative z-10 p-4">
          {isCodeOnly ? (
            <CodeIcon className="h-10 w-10 text-muted-foreground/30" />
          ) : (
            item.preview
          )}
        </div>
      </div>

      <div className="flex flex-1 items-start justify-between gap-4 p-4">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-semibold text-sm text-foreground tracking-tight">
            {item.title}
          </h3>
          <p className="line-clamp-2 text-xs text-muted-foreground leading-relaxed font-light">
            {item.description}
          </p>
        </div>

        <Button
          variant="ghost"
          onClick={() => onClick(item)}
          className="h-8 w-8 shrink-0 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          title="View Code & Details"
        >
          <MaximizeIcon className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}
