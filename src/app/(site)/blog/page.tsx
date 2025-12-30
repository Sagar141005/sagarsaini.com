import BlogList from "@/components/blog/BlogList";
import Container from "@/components/common/Container";
import ContentHeader from "@/components/common/ContentHeader";
import blogPosts from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <Container className="py-16 space-y-8">
      <ContentHeader
        heading="Blog"
        subHeading="Documenting projects, experiments, and lessons learned across engineering, design, and AI."
        size="lg"
      />

      <BlogList posts={blogPosts} showAll />
    </Container>
  );
}
