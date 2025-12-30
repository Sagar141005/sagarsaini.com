"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import CopyIcon from "../svg/CopyIcon";

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
        "absolute top-2 right-2 p-2 rounded-lg transition-all duration-200 flex items-center justify-center ring-1 ring-neutral-600 cursor-pointer",
        copied
          ? "bg-emerald-500 text-neutral-300 shadow-sm"
          : "text-neutral-300",
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
            <Check className="stroke-3 size-4" />
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
          >
            <CopyIcon className="size-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
