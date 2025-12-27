"use client";

import {
  motion,
  useAnimation,
  type Variants,
  type SVGMotionProps,
} from "motion/react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface SendIconHandle {
  hover: () => void;
  idle: () => void;
  submit: () => void;
}

interface SendIconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

// Plane animation
const planeVariants: Variants = {
  idle: { x: 0, y: 0, opacity: 1, scale: 1 },
  hover: {
    x: 10, // Scaled up nudging (was 2)
    y: -10,
    transition: { type: "spring", stiffness: 200, damping: 10 },
  },
  submitting: {
    x: 260, // Fly off screen completely (256 width)
    y: -260,
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.4, ease: "backIn" },
  },
};

// Spinner animation
const spinnerVariants: Variants = {
  idle: { opacity: 0, scale: 0, rotate: 0 },
  submitting: {
    opacity: 1,
    scale: 1,
    rotate: 360,
    transition: {
      opacity: { duration: 0.2, delay: 0.3 },
      scale: { duration: 0.2, delay: 0.3 },
      rotate: { duration: 1, repeat: Infinity, ease: "linear" },
    },
  },
};

export const SendIcon = forwardRef<SendIconHandle, SendIconProps>(
  ({ className, size = 16, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;
      return {
        hover: () => controls.start("hover"),
        idle: () => controls.start("idle"),
        submit: () => controls.start("submitting"),
      };
    });

    return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 256 256"
        fill="currentColor"
        stroke="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("overflow-visible", className)}
        initial="idle"
        animate={controls}
        {...props}
      >
        {/* Plane */}
        <motion.path
          variants={planeVariants}
          d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"
        />

        {/* Spinner */}
        <motion.g
          variants={spinnerVariants}
          style={{ originX: "50%", originY: "50%" }}
        >
          <circle
            cx="128"
            cy="128"
            r="96"
            stroke="currentColor"
            strokeWidth="24"
            fill="none"
            className="opacity-10"
          />

          {/* Arc (Spinner) - roughly 1/3 circle arc */}
          <path
            d="M128 32 A 96 96 0 0 1 224 128"
            stroke="currentColor"
            strokeWidth="24"
            fill="none"
            strokeLinecap="round"
          />
        </motion.g>
      </motion.svg>
    );
  }
);

SendIcon.displayName = "SendIcon";
