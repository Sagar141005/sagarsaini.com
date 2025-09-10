import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import ProjectList from "@/components/ProjectList";
import TechStack from "@/components/TechStack";
import projects from "@/data/projects";
import Footer from "@/components/Footer";
import ProfileHeader from "@/components/ProfileHeader";

const blogPosts = [
  {
    title: "Two of My Projects Featured on OrcDev's YouTube Channel",
    slug: "two-of-my-projects-featured-on-orcdev-s-youtube-channel",
    date: "2025-09-06",
    image:
      "https://assets.chanhdai.com/images/blog/250906-two-of-my-projects-featured-on-orcdev-s-youtube-channel.webp?t=1757148696",
  },
  {
    title: "Goblin Attacks",
    slug: "two-of-my-projects-featured-on-orcdev-s-youtube-channel",
    date: "2025-09-06",
    image:
      "https://images.unsplash.com/photo-1589302722335-ba4876f6a137?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Two of My Projects Featured on OrcDev's YouTube Channel",
    slug: "two-of-my-projects-featured-on-orcdev-s-youtube-channel",
    date: "2025-09-06",
    image:
      "https://assets.chanhdai.com/images/blog/250906-two-of-my-projects-featured-on-orcdev-s-youtube-channel.webp?t=1757148696",
  },
  {
    title: "Goblin Attacks",
    slug: "two-of-my-projects-featured-on-orcdev-s-youtube-channel",
    date: "2025-09-06",
    image:
      "https://images.unsplash.com/photo-1589302722335-ba4876f6a137?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Goblin Attacks",
    slug: "two-of-my-projects-featured-on-orcdev-s-youtube-channel",
    date: "2025-09-06",
    image:
      "https://images.unsplash.com/photo-1589302722335-ba4876f6a137?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Home() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 pt-16 pb-8 bg-white dark:bg-[#09090B]">
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
      <div className="mt-16 space-y-8">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Upcoming Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Project X */}
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-900 p-5 hover:shadow-sm transition duration-300">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-100">
                Project X
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-300">
                In Progress
              </span>
            </div>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              A podcasting app with WebRTC and local high-quality video saving.
            </p>
          </div>

          {/* Project Y */}
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-900 p-5 hover:shadow-sm transition duration-300">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-100">
                Project Y
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200">
                Upcoming
              </span>
            </div>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              A smart file converter (images, documents, background remover)
              with cloud support and AI integrations.
            </p>
          </div>
        </div>
      </div>
      {/* Tech Stack / Toolkit */}
      <TechStack />

      {/* Blog */}
      <BlogSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
