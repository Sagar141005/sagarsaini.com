"use client";

import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { motion, useAnimation, useSpring, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

export interface ChatBotIconHandle {
  blink: () => void;
}

const ChatBotIcon = forwardRef<
  ChatBotIconHandle,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blinkControls = useAnimation();

  // Motion Values to track raw target position
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 1 };

  const x = useSpring(targetX, springConfig);
  const y = useSpring(targetY, springConfig);

  // Helper to trigger blink animation
  const performBlink = async () => {
    await blinkControls.start({
      scaleY: 0.1,
      transition: { duration: 0.05 },
    });
    await blinkControls.start({
      scaleY: 1,
      transition: { duration: 0.1 },
    });
  };

  useImperativeHandle(ref, () => ({
    blink: performBlink,
  }));

  // Mouse Tracking Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const rect = containerRef.current.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const moveX = clientX - centerX;
      const moveY = clientY - centerY;

      // Limit movement range
      const limit = 8;

      // Input Smoothing
      const newX = Math.min(Math.max(moveX / 12, -limit), limit);
      const newY = Math.min(Math.max(moveY / 12, -limit), limit);

      targetX.set(newX);
      targetY.set(newY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [targetX, targetY]);

  // Auto-Blink Logic
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const scheduleBlink = () => {
      // Pick a random time between 2s and 5s for the next blink
      // This randomness makes it feel "alive" vs a robotic metronome
      const randomDelay = Math.random() * 3000 + 2000;

      timeoutId = setTimeout(async () => {
        await performBlink();
        scheduleBlink(); // Schedule the next one after finishing
      }, randomDelay);
    };

    scheduleBlink();

    return () => clearTimeout(timeoutId);
  }, []); // Run once on mount

  return (
    <div
      ref={containerRef}
      className={cn("relative flex items-center justify-center", className)}
      {...props}
    >
      <motion.div
        style={{ x, y }}
        className="flex gap-[6px] will-change-transform"
      >
        {/* Left Eye */}
        <motion.div
          animate={blinkControls}
          className="h-2.5 w-2 rounded-full bg-primary-foreground shadow-sm"
        />
        {/* Right Eye */}
        <motion.div
          animate={blinkControls}
          className="h-2.5 w-2 rounded-full bg-primary-foreground shadow-sm"
        />
      </motion.div>
    </div>
  );
});

ChatBotIcon.displayName = "ChatBotIcon";

export default ChatBotIcon;
