import React from "react";

export type ComponentItem = {
  slug: string;
  title: string;
  description: string;
  category: "UI" | "Hook" | "Function";
  preview?: React.ReactNode;
  code: string;
  installation?: string;
};

export const ALL_COMPONENTS: ComponentItem[] = [];
