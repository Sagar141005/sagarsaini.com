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

export const ALL_COMPONENTS: ComponentItem[] = [
  {
    slug: "button-primary",
    title: "Primary Button",
    description:
      "A primary action button with subtle elevation, hover feedback, and press interaction. Designed for clear call-to-action usage.",
    category: "UI",
    preview: (
      <button className="px-4 py-1.5 w-fit rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-[0px_0px_2px_2px_rgba(255,255,255,0.35)_inset] ring ring-black/10 cursor-pointer hover:scale-105 active:scale-95 transition-all ease-out duration-200">
        Click me
      </button>
    ),
    code: `<button className="px-4 py-1.5 w-fit rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-[0px_0px_2px_2px_rgba(255,255,255,0.35)_inset] ring ring-black/10 cursor-pointer hover:scale-105 active:scale-95 transition-all ease-out duration-200">
  Click me
</button>`,
    installation: `// Requires Tailwind CSS
// No additional dependencies`,
  },
];
