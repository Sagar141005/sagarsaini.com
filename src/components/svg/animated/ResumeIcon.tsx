"use client";

import { motion, useAnimation, type Variants } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface ResumeIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ResumeIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

// Front Page: Slides aside (Right & Tilt) to reveal what's behind
const frontPageVariants: Variants = {
  normal: {
    x: 0,
    y: 0,
    rotate: 0,
  },
  animate: {
    x: 6, // Slide right
    y: -2, // Lift slightly
    rotate: 8, // Tilt
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 14,
    },
  },
};

// Back Page: Moves from "background stack" to "active focus"
const backPageVariants: Variants = {
  normal: {
    scale: 0.9,
    x: 4, // Offset to look like a messy stack
    y: -2,
    rotate: -4, // Tilted slightly opposite
    opacity: 0.4,
  },
  animate: {
    scale: 1, // Grows to full size
    x: 0, // Centers
    y: 0,
    rotate: 0, // Straightens
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 14,
      delay: 0.05,
    },
  },
};

// Lines inside (Header + Body text blocks)
const linesVariants: Variants = {
  normal: { opacity: 0.6 },
  animate: { opacity: 1 },
};

const ResumeIcon = forwardRef<ResumeIconHandle, ResumeIconProps>(
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
        className={cn(
          "cursor-pointer select-none rounded-md transition-colors duration-200 flex items-center justify-center",
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
          viewBox="0 0 30 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* ----- BACK PAGE (The hidden one that slides forward) ----- */}
          <motion.g
            variants={backPageVariants}
            animate={controls}
            initial="normal"
          >
            {/* Simple Rectangle shape (Paper) */}
            <rect
              x="5"
              y="4"
              width="16"
              height="22"
              rx="2"
              className="fill-muted/20 stroke-muted-foreground" // Dim appearance initially
            />
            {/* Simplified content for back page */}
            <line
              x1="9"
              y1="9"
              x2="15"
              y2="9"
              className="stroke-muted-foreground"
            />
            <line
              x1="9"
              y1="13"
              x2="13"
              y2="13"
              className="stroke-muted-foreground"
            />
          </motion.g>

          {/* ----- FRONT PAGE (The main one that slides aside) ----- */}
          <motion.g
            variants={frontPageVariants}
            animate={controls}
            initial="normal"
            style={{ transformOrigin: "bottom left" }} // Pivots from corner
          >
            {/* Solid Fill prevents seeing the back page lines through it */}
            <rect
              x="5"
              y="4"
              width="16"
              height="22"
              rx="2"
              className="fill-background stroke-foreground"
            />

            {/* Resume Details: Resembles the reference shape lines */}
            <motion.g variants={linesVariants}>
              {/* Header / Avatar stub */}
              <line
                x1="8"
                y1="8"
                x2="10"
                y2="8"
                strokeWidth="2.5"
                className="stroke-primary"
              />

              {/* Text Lines */}
              <line x1="8" y1="12" x2="16" y2="12" />
              <line x1="8" y1="16" x2="13" y2="16" />
            </motion.g>
          </motion.g>
        </motion.svg>
      </div>
    );
  }
);

ResumeIcon.displayName = "ResumeIcon";

export { ResumeIcon };
