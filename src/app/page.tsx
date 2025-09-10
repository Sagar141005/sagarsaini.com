import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import ProjectList from "@/components/ProjectList";
import TechStack from "@/components/TechStack";
import projects from "@/data/projects";
import Footer from "@/components/Footer";

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
    <div className="w-full max-w-3xl mx-auto min-h-screen px-4 py-16 bg-white dark:bg-[#09090B]">
      {/* Profile Header */}
      <div className="flex items-center gap-4 sm:gap-6 pt-12 flex-wrap sm:flex-nowrap">
        <img
          loading="lazy"
          src="/profile.jpg"
          alt="Sagar Saini's profile photo"
          className="size-28 sm:size-36 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none"
        />

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl sm:text-5xl font-semibold text-zinc-950 dark:text-zinc-50 whitespace-nowrap">
              Sagar Saini
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-5 sm:size-6 text-info translate-y-px"
            >
              <path
                fill="#009CF5"
                d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"
              />
            </svg>
          </div>

          <p className="mt-1 text-sm sm:text-base font-light text-neutral-500 dark:text-neutral-400">
            Full-stack developer
          </p>
        </div>
      </div>

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
