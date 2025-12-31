"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import CopyIcon from "../svg/CopyIcon";
import CheckIcon from "../svg/CheckIcon";

interface CodeCopyButtonProps {
  code: string;
  className?: string;
}

export default function CodeCopyButton({
  code,
  className,
}: CodeCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (copied) return;

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={cn(
        "absolute top-2 right-2 p-1.5 rounded-sm text-primary transition-all duration-200 flex items-center justify-center bg-accent cursor-pointer",
        className
      )}
      aria-label="Copy text"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.div
            key="check"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
          >
            <CheckIcon className="size-3" />
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
          >
            <CopyIcon className="size-3" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
