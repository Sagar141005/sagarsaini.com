"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "@/lib/utils";

export interface SunIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface SunIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

// The 90-degree Swing (Spring physics makes it feel like a lever/switch)
const svgVariants: Variants = {
  normal: {
    rotate: 0,
  },
  animate: {
    rotate: 90,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      mass: 1.2,
    },
  },
};

// The Pulse (Contracts then pops back)
const circleVariants: Variants = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 0.6, 1], // Shrinks to 60%, then back to 100%
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      times: [0, 0.4, 1], // Synced with the swing
    },
  },
};

const SunIcon = forwardRef<SunIconHandle, SunIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 24, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;
      return {
        startAnimation: () => controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("animate");
        }
        onMouseEnter?.(e);
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("normal");
        }
        onMouseLeave?.(e);
      },
      [controls, onMouseLeave]
    );

    return (
      <div
        className={cn(className)}
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={svgVariants}
          animate={controls}
        >
          {/* Pulsing Center */}
          <motion.circle
            cx="12"
            cy="12"
            r="4"
            variants={circleVariants}
            animate={controls}
          />

          {/* Rays (Rotate with the parent SVG) */}
          <path d="M12 3v1" />
          <path d="M12 20v1" />
          <path d="M3 12h1" />
          <path d="M20 12h1" />
          <path d="m18.364 5.636-.707.707" />
          <path d="m6.343 17.657-.707.707" />
          <path d="m5.636 5.636.707.707" />
          <path d="m17.657 17.657.707.707" />
        </motion.svg>
      </div>
    );
  }
);

SunIcon.displayName = "SunIcon";

export { SunIcon };
