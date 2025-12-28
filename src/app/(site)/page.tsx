import BlogList from "@/components/blog/BlogList";
import ContactSection from "@/components/landing/ContactSection";
import ProjectList from "@/components/project/ProjectList";
import TechStack from "@/components/landing/TechStack";
import projects from "@/data/projects";
import Hero from "@/components/landing/Hero";
import { UPCOMING_DATA } from "@/data/upcomingProjects";
import blogPosts from "@/data/blogPosts";
import UpcomingProjects from "@/components/project/UpcomingProject";
import Container from "@/components/common/Container";
import ContentHeader from "@/components/common/ContentHeader";

export default function Home() {
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
          subHeading="Documenting the messy middle of projects, the pivots, and the lessons learned."
        />
        <BlogList posts={blogPosts} />
      </div>

      {/* Contact */}
      <ContactSection />
    </Container>
  );
}
