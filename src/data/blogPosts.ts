import React from "react";

export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  image: string;
  content: string;
  readingTime: number;
};

const blogPosts: BlogPost[] = [
  // {
  //   slug: "ai-resume-builder",
  //   title: "How I Built a Fullstack AI Resume Tool",
  //   date: "Sep 8, 2025",
  //   readingTime: 6,
  //   image:
  //     "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: `<p>
  //         I built a resume tool powered by OpenAI to help users automatically improve their resumes and generate tailored cover letters.
  //       </p>
  //       <h2>Why I Built It</h2>
  //       <p>
  //         Writing resumes is hard. I wanted a way to help developers present their experience more effectively using AI.
  //       </p>
  //       <h2>Features</h2>
  //       <ul>
  //         <li>AI-generated cover letters</li>
  //         <li>Resume grammar fixes and tone adjustment</li>
  //         <li>OAuth login with Google/GitHub</li>
  //       </ul>`,
  // },
  // {
  //   slug: "vs-code-extensions",
  //   title: "My Favorite VS Code Extensions for Productivity",
  //   date: "Sep 1, 2025",
  //   readingTime: 4,
  //   image:
  //     "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: `<p>
  //         Over the years, I've tried dozens of VS Code extensions — here are the ones that stuck and actually made me faster.
  //       </p>
  //       <h2>Top Picks</h2>
  //       <ul>
  //         <li>Prettier</li>
  //         <li>ESLint</li>
  //         <li>Tabnine</li>
  //         <li>Tailwind IntelliSense</li>
  //       </ul>
  //       <p>
  //         These tools streamline everything from formatting to autocompletion, and even AI-assisted coding.
  //       </p>`,
  // },
  // {
  //   slug: "accessible-dark-mode",
  //   title: "Designing Accessible Dark Mode",
  //   date: "Aug 25, 2025",
  //   readingTime: 5,
  //   image:
  //     "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: `<p>
  //         Dark mode is more than just inverting colors — it's about readability, contrast, and accessibility.
  //       </p>
  //       <h2>What I Learned</h2>
  //       <ul>
  //         <li>WCAG contrast ratios matter</li>
  //         <li>Don't rely on <code>filter: invert()</code></li>
  //         <li>Test in both light and dark contexts</li>
  //       </ul>
  //       <p>
  //         Designing with accessibility in mind makes the experience better for everyone.
  //       </p>`,
  // },
  // {
  //   slug: "self-host-notion-cms",
  //   title: "How to Self-Host Notion-Like CMS",
  //   date: "Aug 20, 2025",
  //   readingTime: 7,
  //   image:
  //     "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: `<p>
  //         I wanted the simplicity of Notion with the control of self-hosting, so I built a custom CMS using React and Node.
  //       </p>
  //       <h2>Stack</h2>
  //       <ul>
  //         <li>React + Tailwind</li>
  //         <li>Express + MongoDB</li>
  //         <li>Docker for deployment</li>
  //       </ul>
  //       <p>
  //         This approach gave me full control over content structure, user auth, and deployment.
  //       </p>`,
  // },
  // {
  //   slug: "webrtc-podcast-app",
  //   title: "Building a Podcast App with WebRTC",
  //   date: "Aug 15, 2025",
  //   readingTime: 9,
  //   image:
  //     "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: `<p>
  //         I set out to build a WebRTC-powered podcast app where hosts and guests could talk in real-time without installing anything.
  //       </p>
  //       <h2>Key Learnings</h2>
  //       <ul>
  //         <li>Peer-to-peer audio streaming with WebRTC</li>
  //         <li>Managing multiple audio tracks and fallbacks</li>
  //         <li>React state sync with real-time data</li>
  //       </ul>
  //       <p>
  //         This project pushed me to understand the low-level details of media APIs and real-time networking.
  //       </p>`,
  // },
];

export default blogPosts;
