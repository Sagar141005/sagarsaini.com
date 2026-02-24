import type { Metadata } from "next";
import ComponentsPageClient from "@/components/showcase/ComponentsPageClient";

export const metadata: Metadata = {
  title: "Components",
  description:
    "Reusable UI components, hooks, and frontend utilities used across Sagar Saini's projects.",
  alternates: {
    canonical: "/components",
  },
  openGraph: {
    title: "Components | Sagar Saini",
    description:
      "Reusable UI components, hooks, and frontend utilities used across projects.",
    url: "/components",
    type: "website",
  },
};

export default function ComponentsPage() {
  return <ComponentsPageClient />;
}
