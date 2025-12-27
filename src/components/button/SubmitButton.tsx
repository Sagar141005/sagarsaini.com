"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { SendIcon, SendIconHandle } from "../svg/animated/SendIcon";
import { Button } from "../ui/button";

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting: boolean;
  label?: string;
  sendingLabel?: string;
}

export default function SubmitButton({
  isSubmitting,
  label = "Send Message",
  sendingLabel = "Sending...",
  className,
  ...props
}: SubmitButtonProps) {
  const iconRef = useRef<SendIconHandle>(null);

  useEffect(() => {
    if (isSubmitting) {
      iconRef.current?.submit();
    } else {
      iconRef.current?.idle();
    }
  }, [isSubmitting]);

  return (
    <Button
      disabled={isSubmitting}
      className={cn("group relative", className)}
      onMouseEnter={() => iconRef.current?.hover()}
      onMouseLeave={() => !isSubmitting && iconRef.current?.idle()}
      {...props}
    >
      <div className="flex items-center gap-2">
        <SendIcon ref={iconRef} size={16} />

        {/* Text */}
        <AnimatePresence mode="wait" initial={false}>
          {isSubmitting ? (
            <motion.span
              key="sending"
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="whitespace-nowrap"
            >
              {sendingLabel}
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="whitespace-nowrap"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </Button>
  );
}
