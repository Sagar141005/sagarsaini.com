"use client";

import React from "react";
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/motionVariants";

export default function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 tracking-tight">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}
