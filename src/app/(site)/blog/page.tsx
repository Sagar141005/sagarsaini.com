import BlogList from "@/components/blog/BlogList";
import Container from "@/components/common/Container";
import ContentHeader from "@/components/common/ContentHeader";
import { getBlogPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <Container className="py-16 space-y-8">
      <ContentHeader
        heading="Blog"
        subHeading="Documenting projects, experiments, and lessons learned across engineering, design, and AI."
        size="lg"
      />

      <BlogList posts={posts} showAll />
    </Container>
  );
}
