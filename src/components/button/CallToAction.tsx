"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import PlusIcon from "../svg/PlusIcon";
import Image from "next/image";

export default function BookCallButton({ onClick }: { onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  const AVATAR_SIZE = 32;
  const SPACING = 32;

  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex h-11 items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 active:scale-95 cursor-pointer"
      >
        <div className="relative flex items-center pl-4">
          <motion.div
            initial={{ width: AVATAR_SIZE }}
            animate={{
              width: isHovered ? AVATAR_SIZE + SPACING * 2 : AVATAR_SIZE,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="h-8 shrink-0"
          />

          <div className="absolute left-1.5 top-0 z-30 h-8 w-8 rounded-full border border-border bg-secondary">
            <Image
              width={100}
              height={100}
              src="/Profile.png"
              alt="Me"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <motion.div
            className="absolute left-1.5 z-20 flex h-8 w-8 items-center justify-center rounded-full"
            initial={{ x: 0, opacity: 0 }}
            animate={{
              x: isHovered ? SPACING : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
          >
            <PlusIcon className="w-3.5 h-3.5 text-primary-foreground/70" />
          </motion.div>

          <motion.div
            className="absolute left-1.5 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-accent"
            initial={{ x: 0, opacity: 0 }}
            animate={{
              x: isHovered ? SPACING * 2 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
          >
            <span className="text-[9px] font-extrabold text-accent-foreground">
              YOU
            </span>
          </motion.div>
        </div>

        <span className="whitespace-nowrap pl-2 pr-4 text-sm font-medium">
          Book a call
        </span>
      </button>
    </div>
  );
}
