"use client";

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

const SunIcon = forwardRef<SunIconHandle, SunIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 24, ...props }, ref) => {
    const rotateControls = useAnimation();
    const pulseControls = useAnimation();

    const rotationRef = useRef(0);
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;
      return {
        startAnimation: () => {
          rotationRef.current += 90;
          rotateControls.start({
            rotate: rotationRef.current,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 15,
              mass: 1.2,
            },
          });
          pulseControls.start({
            scale: [1, 0.6, 1],
            transition: {
              duration: 0.4,
              ease: "easeInOut",
              times: [0, 0.4, 1],
            },
          });
        },
        stopAnimation: () => {},
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          // Increment rotation by 90 degrees each time
          rotationRef.current += 90;

          // Trigger Rotation (Accumulative)
          rotateControls.start({
            rotate: rotationRef.current,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 15,
              mass: 1.2,
            },
          });

          // Trigger Pulse
          pulseControls.start({
            scale: [1, 0.6, 1], // Shrinks and returns
            transition: {
              duration: 0.4,
              ease: "easeInOut",
              times: [0, 0.4, 1],
            },
          });
        }
        onMouseEnter?.(e);
      },
      [rotateControls, pulseControls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        onMouseLeave?.(e);
      },
      [onMouseLeave]
    );

    return (
      <div
        className={cn("select-none", className)}
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
          animate={rotateControls} // Bound to the separate rotation controls
        >
          {/* Pulsing Center */}
          <motion.circle
            cx="12"
            cy="12"
            r="4"
            animate={pulseControls} // Bound to the separate pulse controls
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
