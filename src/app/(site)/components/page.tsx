import type { Metadata } from "next";
import ComponentsPageClient from "@/components/showcase/ComponentsPageClient";

export const metadata: Metadata = {
  title: "Components",
  description:
    "Reusable components and frontend utilities I use in real product work.",
  alternates: {
    canonical: "/components",
  },
  openGraph: {
    title: "Components | Sagar Saini",
    description:
      "A practical library of UI building blocks, interaction patterns, and developer-friendly snippets.",
    url: "/components",
    type: "website",
  },
};

export default function ComponentsPage() {
  return <ComponentsPageClient />;
}
