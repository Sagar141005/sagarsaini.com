"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ContactCTA() {
  const [showCal, setShowCal] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("on", {
        action: "bookingSuccessful",
        callback: () => setShowCal(false),
      });
    })();
  }, []);

  return (
    <>
      <section className="mt-24 max-w-7xl mx-auto">
        {/* Changed border and background to semantic equivalents */}
        <div className="relative w-full rounded-2xl border border-dashed border-border bg-muted/30 px-6 py-12 md:px-12 md:py-16 overflow-hidden">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="relative flex flex-col justify-center items-center max-w-lg mx-auto text-center gap-8">
            {/* Text Section */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Ready to build something extraordinary?
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light">
                I'm currently available for new projects. Let's discuss how we
                can work together.
              </p>
            </div>

            {/* Action Section */}
            <div>
              <div
                onClick={() => setShowCal(true)}
                className="group cursor-pointer relative flex h-11 w-fit items-center overflow-hidden rounded-full bg-primary px-1.5 text-sm font-medium text-primary-foreground transition-all duration-500 hover:pr-[8rem] shadow-lg"
              >
                {/* 1. Profile Image (Top Layer) */}
                <div className="relative z-30 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary border border-border">
                  <img
                    src="/Profile.png"
                    alt="Me"
                    width={32}
                    height={32}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                {/* 2. Plus Icon (Middle Layer) */}
                <div className="absolute left-1.5 z-20 flex h-8 w-8 items-center justify-center opacity-0 transition-all duration-500 group-hover:translate-x-9 group-hover:opacity-100">
                  <Plus className="w-3.5 h-3.5 text-muted-foreground" />
                </div>

                {/* 3. YOU Avatar (Bottom Layer) */}
                <div className="absolute left-1.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-accent opacity-0 transition-all duration-500 ease-out group-hover:translate-x-[4.5rem] group-hover:opacity-100 border border-border">
                  <span className="text-[8px] font-extrabold text-accent-foreground">
                    YOU
                  </span>
                </div>

                {/* 4. Text Label */}
                <span className="z-10 pl-4 pr-4 transition-all duration-500 group-hover:translate-x-[6.2rem] whitespace-nowrap">
                  Book a call
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cal.com Modal */}
      <Dialog open={showCal} onOpenChange={setShowCal}>
        <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 overflow-hidden bg-background border border-border">
          <DialogHeader className="px-6 py-4 border-b border-border">
            <DialogTitle className="text-foreground">
              Schedule a meeting
            </DialogTitle>
          </DialogHeader>
          <div className="h-full w-full bg-muted">
            <Cal
              calLink="#"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
