"use client";

import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import ChatBotIcon, { ChatBotIconHandle } from "../svg/animated/ChatBotIcon";

interface ChatWidgetButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function ChatWidgetButton({
  onClick,
  isOpen,
}: ChatWidgetButtonProps) {
  const iconRef = useRef<ChatBotIconHandle>(null);

  const handleClick = () => {
    if (!isOpen) {
      iconRef.current?.blink();
    }
    onClick();
  };

  return (
    <motion.button
      onClick={handleClick}
      className={cn(
        "relative flex h-14 w-14 items-center justify-center rounded-2xl shadow-xl transition-all duration-300",
        "bg-primary text-primary-foreground",
        "hover:scale-105 active:scale-95"
      )}
      aria-label={isOpen ? "Close Chat" : "Open Chat"}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <X className="h-6 w-6" />
          </motion.div>
        ) : (
          <motion.div
            key="bot"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full flex items-center justify-center"
          >
            <ChatBotIcon ref={iconRef} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
