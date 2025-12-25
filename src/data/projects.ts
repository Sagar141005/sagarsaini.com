export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  video: string;
  overview: string;
  problem: string;
  goals: string[];
  techStack: { layer: string; tools: string }[];
  highlightTech: string[];
  features: { title: string; description: string }[];
  challenges: { challenge: string; solution: string }[];
  upcomingFeatures: string[];
  results: string;
  links: {
    demo?: string;
    github?: string;
  };
};

const projects: Project[] = [
  {
    slug: "code-sphere",
    title: "CodeSphere",
    tagline:
      "Real-time collaborative code editor with AI & Git-style versioning",
    description:
      "A modern, browser-based IDE with real-time collaboration, Git-style commits, and AI assistance — built for developers who want VS Code-like power in the browser.",
    image: "/codeSphere.png",
    video: "/new.MP4",
    overview:
      "CodeSphere is a browser-first IDE built with Next.js, TypeScript, and PostgreSQL. It enables developers to collaborate in real-time, manage commits with Git-style history, and leverage AI coding assistance — all inside the browser.",
    problem:
      "Most online editors limit advanced features (real-time sync, versioning, AI) behind paywalls. Open-source options exist but lack polish and collaboration. CodeSphere was built to close this gap.",
    goals: [
      "Enable real-time editing with presence indicators and user cursors",
      "Offer Git-style commits, history browsing, and reverts",
      "Enable in-room voice chat for seamless verbal collaboration",
      "Integrate AI code assistant for prototyping and debugging",
      "Support per-room dependency injection (Loadash, UUID, etc.)",
      "Support live preview for real-time result visualization",
      "Allow instant zip downloads of full project files for offline use",
    ],
    techStack: [
      { layer: "Frontend", tools: "Next.js, React, Tailwind" },
      { layer: "Backend", tools: "Node.js, Express" },
      { layer: "Database", tools: "PostgreSQL, Prisma, Supabase" },
      { layer: "Realtime", tools: "Socket.io" },
      { layer: "Editor", tools: "Monaco Editor" },
      { layer: "AI", tools: "OpenAI API" },
    ],
    highlightTech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Socket.io",
      "OpenAI",
    ],
    features: [
      {
        title: "Real-time Collaboration",
        description: "Socket.io rooms with user presence and live cursors.",
      },
      {
        title: "Git-style Commits",
        description:
          "File snapshots with commit messages, history browsing, and revert support.",
      },
      {
        title: "AI Integration",
        description:
          "Inline code assistant powered by OpenAI for autocomplete, debugging, and refactoring.",
      },
      {
        title: "Room Voice Chat",
        description:
          "WebRTC-powered voice chat integrated into rooms, allowing collaborators to talk while coding.",
      },
      {
        title: "Dependency Injection",
        description:
          "Add libraries (React, Tailwind, Lodash, etc.) per room for live previews.",
      },
      {
        title: "Live Preview",
        description:
          "Instant visual feedback as you code, enabling real-time preview of HTML/CSS/JS output.",
      },
      {
        title: "Zip Download",
        description:
          "Export entire project files instantly as a zip for offline use or deployment.",
      },
      {
        title: "Teams & Rooms",
        description:
          "Organize multiple projects under team workspaces, with several rooms inside each team.",
      },
      {
        title: "Themes & Personalization",
        description:
          "Switch between variety of light and dark modes for a tailored experience.",
      },
    ],
    challenges: [
      {
        challenge: "Scoped Undo/Redo Across Multiple Files",
        solution:
          "Monaco Editor maintains a global undo stack, which caused conflicts when switching between files. To solve this, I implemented isolated editor models and bound custom history stacks per file, ensuring that undo/redo worked contextually without leaking changes across tabs.",
      },
      {
        challenge: "Efficient Real-time Collaboration at Scale",
        solution:
          "Naive broadcasting of entire file contents on every keystroke caused major performance issues. I switched to operational transforms with differential patches over Socket.io, reducing bandwidth by 80% and keeping cursor sync smooth even with 20+ concurrent users.",
      },
      {
        challenge: "Git-style Versioning in PostgreSQL",
        solution:
          "Storing entire file snapshots per commit was unsustainable. I designed a normalized Postgres schema that stores diffs per file, linked to commit metadata. This reduced storage usage drastically and allowed fast commit reverts by reconstructing file states from incremental diffs.",
      },
      {
        challenge: "Dependency Injection for Live Previews",
        solution:
          "Supporting per-room external libraries like React, Tailwind, and Lodash required building a safe injection mechanism. I implemented a scoped preview iframe system that dynamically loads CDN scripts while sandboxing execution, ensuring user isolation and avoiding global namespace conflicts.",
      },
      {
        challenge: "Realtime Presence & Awareness",
        solution:
          "Tracking online users, cursors, and file focus in real time was tricky. I built a presence service with ephemeral sessions, using heartbeats to track disconnections and avoid 'ghost users,' while ensuring minimal socket traffic overhead.",
      },
      {
        challenge: "Seamless Voice Chat Integration",
        solution:
          "Building low-latency WebRTC voice chat into collaborative rooms required handling peer connection management, NAT traversal, and stream cleanup on disconnects. I integrated socket signaling for peers and designed a fallback system to ensure reliable voice sessions even with unstable networks.",
      },
    ],
    upcomingFeatures: [
      "GitHub Integration (push commits, clone repos)",
      "Advanced AI features (pair programming mode, test case generation)",
      "Video Chat (in-room video calls alongside voice chat)",
      "More Language Runtimes (Rust, Ruby, Go)",
      "Collaboration Enhancements (inline commenting, @mentions, notifications)",
      "Mobile & Tablet Optimizations (touch editing, responsive sidebar & preview)",
    ],
    results:
      "Built a VS Code–like experience on the web, proving that real-time systems, database design, and AI can combine into a seamless dev tool. Next steps include adding video calling, GitHub export, and team spaces.",
    links: {
      demo: "https://codesphere.sagarsaini.com",
      github: "https://github.com/Sagar141005/CodeSphere",
    },
  },
  {
    slug: "career-hunt",
    title: "Career Hunt",
    tagline:
      "Job application tracker with AI-powered insights for seekers and tools for recruiters",
    description:
      "A full-stack platform to manage job applications, generate AI-enhanced cover letters, and streamline hiring workflows for recruiters.",
    image: "/careerHunt.png",
    video: "/new.MP4",
    overview:
      "Career Hunt is a job management platform designed for both job seekers and recruiters. It helps applicants track opportunities, improve resumes with AI, and auto-generate cover letters tailored to job descriptions — while giving recruiters a structured pipeline to organize candidates.",
    problem:
      "Most job seekers rely on spreadsheets or scattered notes to track applications, while recruiters juggle multiple tools to manage candidates. Existing solutions are either too simplistic or locked behind expensive ATS systems. Career Hunt provides a lightweight, AI-augmented solution accessible to both sides.",
    goals: [
      "Provide a clean dashboard to track applications and candidates",
      "Enable categorization by status (applied, interviewing, rejected, offer/hired)",
      "Leverage AI to suggest resume improvements and generate job-specific cover letters",
      "Offer recruiters an easy pipeline view without heavy ATS complexity",
      "Ensure data privacy and an intuitive UX for all users",
    ],
    techStack: [
      { layer: "Frontend", tools: "React, Tailwind" },
      { layer: "Backend", tools: "Node.js, Express" },
      { layer: "Database", tools: "MongoDB, Mongoose" },
      { layer: "AI", tools: "OpenAI GPT, Embeddings" },
      { layer: "Auth", tools: "NextAuth.js, OAuth, JWT" },
    ],
    highlightTech: ["React", "MongoDB", "OpenAI", "Tailwind"],
    features: [
      {
        title: "Application Tracking",
        description:
          "Dashboard to manage jobs across stages with timelines and reminders.",
      },
      {
        title: "AI Resume Insights",
        description:
          "Upload a resume and get AI-powered suggestions to improve clarity, keywords, and ATS-friendliness.",
      },
      {
        title: "AI Cover Letters",
        description:
          "Automatically generate job-specific cover letters tailored to the description and candidate’s profile.",
      },
      {
        title: "Recruiter Pipeline",
        description:
          "Recruiters can organize candidates into stages (screening, interview, hired) without complex ATS overhead.",
      },
      {
        title: "Smart Filters",
        description:
          "Filter applications or candidates by status, company, role, or date for quick navigation.",
      },
    ],
    challenges: [
      {
        challenge: "AI Accuracy for Resume & Cover Letters",
        solution:
          "Different job descriptions require highly contextual tailoring. I built a hybrid system that combines embeddings for skill extraction with GPT prompts optimized for relevance, ensuring generated cover letters aligned with job postings while avoiding generic filler.",
      },
      {
        challenge: "Balancing Job Seeker vs Recruiter Workflows",
        solution:
          "Designing a single platform to support two distinct user roles was tricky. I implemented role-based access control (RBAC) with tailored dashboards: seekers focus on applications, while recruiters manage candidate pipelines — all under one schema without duplicating logic.",
      },
      {
        challenge: "Data Privacy & Security",
        solution:
          "Storing resumes and job data required strict security. I enforced field-level encryption in MongoDB, JWT-based sessions, and GDPR-style 'right to delete' compliance, ensuring trust for sensitive user data.",
      },
      {
        challenge: "Scalable Filtering & Search",
        solution:
          "Filtering across large application sets caused slow queries. I optimized MongoDB with compound indexes and integrated full-text search for skills/roles, improving query performance by ~70% for large datasets.",
      },
    ],
    upcomingFeatures: [
      "Browser extension for one-click job saving",
      "Collaborative recruiter dashboards with team support",
      "Analytics for job seekers (conversion rates, response tracking)",
      "Automated LinkedIn/Indeed job import",
      "AI mock interview assistant",
      "Email notifications (e.g. job application updates)",
    ],
    results:
      "Career Hunt bridges the gap between lightweight job trackers and heavy ATS systems. Job seekers benefit from AI-driven resume and cover letter support, while recruiters get a clean pipeline tool without complexity. Future improvements include collaborative team spaces for recruiters and browser extensions for quick job saving.",
    links: {
      demo: "https://career-hunt.xyz",
      github: "https://github.com/Sagar141005/CareerHunt",
    },
  },
];

export default projects;
