"use client";

import React, { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { motion } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import BookCallButton from "../button/CallToAction";
import { useTheme } from "next-themes";

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ContactCTA() {
  const [showCal, setShowCal] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!showCal) return;

    const initCal = async () => {
      try {
        const calApi = await getCalApi();
        if (calApi) {
          calApi("ui", {
            theme: resolvedTheme === "dark" ? "dark" : "light",
            styles: { branding: { brandColor: "#000000" } },
          });

          calApi("on", {
            action: "bookingSuccessful",
            callback: (e) => {
              setTimeout(() => setShowCal(false), 1000);
            },
          });
        }
      } catch (error) {
        console.error("Failed to initialize Cal API:", error);
      }
    };

    initCal();
  }, [showCal, resolvedTheme]);

  return (
    <>
      <section className="mt-24">
        <motion.div
          className="relative w-full rounded-2xl border border-dashed border-border bg-muted/30 px-6 py-12 md:px-12 md:py-16 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="relative flex flex-col justify-center items-center max-w-lg mx-auto text-center gap-8">
            <div className="space-y-4">
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-foreground tracking-tight"
              >
                Ready to build something extraordinary?
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-muted-foreground text-sm md:text-base leading-relaxed font-light"
              >
                I'm currently available for new projects. Let's discuss how we
                can work together.
              </motion.p>
            </div>

            <motion.div variants={itemVariants}>
              <BookCallButton onClick={() => setShowCal(true)} />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Dialog open={showCal} onOpenChange={setShowCal}>
        <DialogContent className="max-h-[90vh] max-w-[calc(100vw-2rem)] overflow-hidden sm:max-w-[calc(100vw-4rem)] md:max-w-4xl bg-background border border-border">
          <DialogHeader className="px-6 py-4 border-b border-border">
            <DialogTitle className="text-foreground">
              Schedule a meeting
            </DialogTitle>
            <DialogDescription className="text-pretty">
              Pick a time to connect and explore opportunities together
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[calc(90vh-220px)] bg-background overflow-y-auto">
            <Cal
              calLink={process.env.NEXT_PUBLIC_CAL_LINK!}
              className="h-[500px] w-full rounded-lg"
              config={{
                layout: "month_view",
                theme: "auto",
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
