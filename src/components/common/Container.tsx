"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.4,
    },
  },
};

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
