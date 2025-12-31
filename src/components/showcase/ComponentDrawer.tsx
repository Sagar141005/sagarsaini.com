"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { ComponentItem } from "@/data/components";
import { Button } from "@/components/ui/button";
import CodeCopyButton from "../button/CodeCopyButton";

interface DrawerProps {
  item: ComponentItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ComponentDrawer({
  item,
  isOpen,
  onClose,
}: DrawerProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 h-full pb-8 w-full max-w-2xl border-l border-border bg-background shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border/60 px-6 py-4">
              <div>
                <h2 className="text-lg font-semibold text-foreground tracking-tight">
                  {item.title}
                </h2>
                <p className="text-sm text-muted-foreground font-light">
                  {item.category} Component
                </p>
              </div>
              <Button
                variant="ghost"
                className="h-9 w-9 text-muted-foreground hover:text-foreground hover:bg-muted"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="h-full overflow-y-auto p-4 pb-24">
              {item.preview && (
                <div className="mb-8 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">
                    Preview
                  </h3>
                  <div className="flex min-h-[240px] items-center justify-center rounded-xl border border-border bg-muted/30 p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.03] pointer-events-none" />
                    <div className="relative z-10">{item.preview}</div>
                  </div>
                </div>
              )}

              <div className="mb-8">
                <p className="text-base text-muted-foreground leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mb-8 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">
                  Source Code
                </h3>

                <div className="relative overflow-hidden rounded-xl border border-border bg-muted/50">
                  <div className="overflow-x-auto p-4">
                    <pre className="text-xs font-mono leading-relaxed text-foreground/90">
                      {item.code}
                    </pre>
                  </div>
                  <div className="absolute top-2 right-2">
                    <CodeCopyButton code={item.code} />
                  </div>
                </div>
              </div>

              {item.installation && (
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">
                    Installation & Usage
                  </h3>

                  <div className="group relative rounded-xl border border-border bg-muted/30">
                    <div className="overflow-x-auto p-4">
                      <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap text-foreground/80">
                        {item.installation}
                      </pre>
                    </div>

                    <div className="absolute top-2 right-2">
                      <CodeCopyButton code={item.installation} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
