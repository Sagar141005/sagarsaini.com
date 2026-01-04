import BlogList from "@/components/blog/BlogList";
import ContactSection from "@/components/landing/ContactSection";
import ProjectList from "@/components/project/ProjectList";
import TechStack from "@/components/landing/TechStack";
import Hero from "@/components/landing/Hero";
import { UPCOMING_DATA } from "@/data/upcomingProjects";
import UpcomingProjects from "@/components/project/UpcomingProject";
import Container from "@/components/common/Container";
import ContentHeader from "@/components/common/ContentHeader";
import { getBlogPosts } from "@/lib/blog";
import { getProjects } from "@/lib/projects";
import { ProjectPreview } from "@/types/project";

export default function Home() {
  const posts = getBlogPosts();
  const rawProjects = getProjects();

  const projects: ProjectPreview[] = rawProjects.map((p) => ({
    slug: p.slug,
    title: p.metadata.title,
    description: p.metadata.description,
    image: p.metadata.image,
    video: p.metadata.video,
    highlightTech: p.metadata.highlightTech || [],
    links: {
      demo: p.metadata.links.demo,
      github: p.metadata.links.github,
    },
  }));

  return (
    <Container className="py-16">
      {/* Profile Header */}
      <Hero />

      {/* Projects */}
      <div className="mt-16 space-y-4">
        <ContentHeader
          heading="Projects"
          subHeading="A collection of production-ready applications and technical deep-dives."
        />
        <ProjectList projects={projects} />
      </div>

      {/* Upcoming Projects */}
      <UpcomingProjects projects={UPCOMING_DATA} />

      {/* Tech Stack / Toolkit */}
      <TechStack />

      {/* Blog */}
      <div className="mt-16 space-y-4">
        <ContentHeader
          heading="Blog"
          subHeading="Notes and insights from projects, experiments, and ongoing learning."
        />
        <BlogList posts={posts} />
      </div>

      {/* Contact */}
      <ContactSection />
    </Container>
  );
}
