"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle } from "react";
import { cn } from "@/lib/utils";

export interface ChevronToArrowRightIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ChevronToArrowRightIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const headVariants: Variants = {
  normal: { x: -2 },
  animate: {
    x: 2,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

const shaftVariants: Variants = {
  normal: {
    pathLength: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const ChevronToArrowRightIcon = forwardRef<
  ChevronToArrowRightIconHandle,
  ChevronToArrowRightIconProps
>(({ onMouseEnter, onMouseLeave, className, size = 24, ...props }, ref) => {
  const controls = useAnimation();

  useImperativeHandle(ref, () => ({
    startAnimation: () => controls.start("animate"),
    stopAnimation: () => controls.start("normal"),
  }));

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      controls.start("animate");
      onMouseEnter?.(e);
    },
    [controls, onMouseEnter]
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      controls.start("normal");
      onMouseLeave?.(e);
    },
    [controls, onMouseLeave]
  );

  return (
    <div
      className={cn(
        "select-none flex items-center justify-center transition-colors duration-200",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M5 12h14"
          variants={shaftVariants}
          animate={controls}
          initial="normal"
        />
        <motion.path
          d="m12 5 7 7-7 7"
          variants={headVariants}
          animate={controls}
          initial="normal"
        />
      </motion.svg>
    </div>
  );
});

ChevronToArrowRightIcon.displayName = "ChevronToArrowRightIcon";

export { ChevronToArrowRightIcon };
