import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import ProjectList from "@/components/ProjectList";
import TechStack from "@/components/TechStack";
import projects from "@/data/projects";
import ProfileHeader from "@/components/ProfileHeader";
import UpcomingProject from "@/components/UpcomingProject";
import blogPosts from "@/data/blogPosts";

export default function Home() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 pt-16 bg-white dark:bg-[#09090B]">
      {/* Profile Header */}
      <ProfileHeader />

      {/* About Me */}
      <div className="mt-10 space-y-6">
        <p className="text-base sm:text-lg font-light leading-relaxed text-neutral-600 dark:text-neutral-400">
          I build modern web applications with{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            JavaScript, React, and Next.js
          </span>{" "}
          on the frontend, and{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            Node.js, Express, MongoDB, and PostgreSQL
          </span>{" "}
          on the backend. I also explore{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            real-time features, AI integrations,
          </span>{" "}
          and{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            Web3
          </span>{" "}
          to push my learning further.
        </p>
        <p className="text-base sm:text-lg font-light leading-relaxed text-neutral-600 dark:text-neutral-400">
          I focus on{" "}
          <span className="font-medium dark:text-neutral-300">
            code quality, performance,
          </span>{" "}
          and creating products people genuinely enjoy using.
        </p>
      </div>

      {/* Projects */}
      <div className="mt-16 space-y-6">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Projects
        </h2>
        <p className="text-md font-light leading-relaxed text-neutral-600 dark:text-neutral-400 -mt-4">
          A selection of things I’ve built — from full-stack apps to experiments
          with real-time collaboration, AI, and Web3.
        </p>

        {/* Project Card Component */}
        <ProjectList projects={projects} />
      </div>

      {/* Upcoming Projects */}
      <UpcomingProject />

      {/* Tech Stack / Toolkit */}
      <TechStack />

      {/* Blog */}
      <BlogSection posts={blogPosts} />

      {/* Contact */}
      <ContactSection />
    </div>
  );
}
