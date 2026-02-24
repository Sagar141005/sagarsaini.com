import type { Metadata } from "next";
import BlogList from "@/components/blog/BlogList";
import Container from "@/components/common/Container";
import ContentHeader from "@/components/common/ContentHeader";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Engineering notes and practical write-ups on frontend architecture, full-stack systems, and AI workflows.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Sagar Saini",
    description:
      "Engineering notes and practical write-ups on frontend architecture, full-stack systems, and AI workflows.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <Container className="py-16 space-y-8">
      <ContentHeader
        heading="Blog"
        subHeading="Documenting projects, experiments, and lessons learned across engineering, design, and AI."
        size="lg"
        as="h1"
      />

      <BlogList posts={posts} showAll />
    </Container>
  );
}
