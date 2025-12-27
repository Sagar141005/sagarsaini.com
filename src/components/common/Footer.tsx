"use client";

import React from "react";
import Container from "./Container";
import { motion } from "motion/react";

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Footer() {
  return (
    <Container className="py-16">
      <div className="border-t border-dashed border-border pt-8 text-sm font-light text-muted-foreground">
        <motion.p variants={itemVariants}>
          Designed & Developed by{" "}
          <span className="font-medium text-foreground">Sagar Saini</span>
        </motion.p>
      </div>
    </Container>
  );
}
