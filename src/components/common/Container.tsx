"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { containerVariants } from "@/lib/motionVariants";

export default function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className={cn("mx-auto max-w-3xl px-4", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
