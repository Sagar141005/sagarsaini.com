"use client";

import { motion } from "motion/react";
import Link from "next/link";
import SkillBadge from "../common/SkillBadge";
import { ArrowButton } from "../button/ArrowButton";
import { ResumeButton } from "../button/ResumeButton";

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

const skills = [
  { name: "TypeScript", href: "https://www.typescriptlang.org/" },
  {
    name: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { name: "React", href: "https://react.dev/" },
  { name: "Next.js", href: "https://nextjs.org/" },
  { name: "PostgreSQL", href: "https://www.postgresql.org/" },
  { name: "MongoDB", href: "https://www.mongodb.com/" },
];

const socials = [
  {
    href: "https://github.com/Sagar141005",
    src: "/socials/github.webp",
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/sagar-saini-9b45a52b2/",
    src: "/socials/linkedin.webp",
    alt: "LinkedIn",
  },
  {
    href: "https://x.com/not_sagar1410",
    src: "/socials/x.webp",
    alt: "Twitter",
  },
  {
    href: "mailto:sagarsaini@gmail.com",
    src: "/socials/gmail.webp",
    alt: "Email",
  },
];

export default function Hero() {
  return (
    <section id="about">
      <motion.div
        className="flex items-center gap-6 sm:gap-8 py-8 flex-wrap sm:flex-nowrap scroll-mt-24"
        variants={itemVariants}
      >
        <div className="relative group shrink-0">
          <div className="relative overflow-hidden rounded-full ring-1 ring-border p-1 bg-background">
            <img
              loading="lazy"
              src="/Profile.png"
              alt="Sagar Saini"
              className="relative size-24 sm:size-32 rounded-full object-cover select-none"
            />
          </div>
        </div>

        <div className="min-w-0 flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Sagar Saini
            </h1>

            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.3,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-6 sm:size-7 text-blue-500 translate-y-[2px]"
              >
                <path
                  fill="currentColor"
                  d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"
                />
              </svg>
            </motion.div>
          </div>
          <div className="flex items-center gap-4 pt-2.5">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative block"
              >
                <img
                  src={social.src}
                  alt={social.alt}
                  className="size-5 sm:size-6 object-contain filter opacity-60 hover:opacity-100 transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div className="mt-8 space-y-4" variants={itemVariants}>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
          Full Stack Developer —{" "}
          <span className="text-secondary">
            building scalable web solutions.
          </span>
        </h1>

        <p className="text-md sm:text-lg font-light leading-relaxed text-muted-foreground">
          I build scalable web apps with{" "}
          {skills.map((skill, index) => (
            <SkillBadge key={index} {...skill} />
          ))}
          . Focused on{" "}
          <span className="font-medium text-foreground">performance</span> and
          user experience. Exploring{" "}
          <span className="font-medium text-foreground">AI</span> to build
          smarter solutions.
        </p>
      </motion.div>

      <motion.div
        className="flex items-center gap-4 py-8"
        variants={itemVariants}
      >
        <Link href="/contact">
          <ArrowButton>Get in Touch</ArrowButton>
        </Link>
        <Link href="/resume">
          <ResumeButton variant="outline">Resume</ResumeButton>
        </Link>
      </motion.div>
    </section>
  );
}
