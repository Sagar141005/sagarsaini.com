import React from "react";
import Image from "next/image";
import {
  Github,
  AlertTriangle,
  CheckCircle,
  Globe,
  ArrowLeft,
} from "lucide-react";
import { Project } from "@/data/projects";
import Link from "next/link";

type Props = {
  project: Project;
};

const ProjectCaseStudy: React.FC<Props> = ({ project }) => {
  const {
    title,
    tagline,
    description,
    image,
    overview,
    problem,
    goals,
    techStack,
    features,
    challenges,
    upcomingFeatures,
    results,
    links,
  } = project;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pt-16 space-y-12">
      <Link
        href="/projects"
        className="inline-flex gap-1 items-center text-sm font-medium hover:underline font-mono text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Projects
      </Link>

      {/* Title */}
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white">
          {title}
        </h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-300 font-light">
          {tagline}
        </p>
        <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 font-light">
          {description}
        </p>
      </div>

      {/* Hero Image */}
      <div className="w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* External Links */}
      {(links.demo || links.github) && (
        <div className="flex gap-4 flex-wrap">
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white dark:bg-white dark:text-black text-sm font-medium rounded-md hover:opacity-90 transition"
            >
              <Globe className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-400 text-zinc-700 dark:text-zinc-100 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-medium rounded-md transition"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          )}
        </div>
      )}

      {/* Sections */}
      <section className="space-y-10">
        {/* Overview */}
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Overview
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 font-light">
            {overview}
          </p>
        </div>

        {/* Problem */}
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            The Problem
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 font-light">
            {problem}
          </p>
        </div>

        {/* Goals */}
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Goals
          </h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-600 dark:text-neutral-400 font-light">
            {goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Key Features
          </h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-900"
              >
                <h3 className="text-lg font-medium text-zinc-800 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 font-light">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Tech Stack
          </h2>
          <div className="mt-4 space-y-4">
            {techStack.map((item) => (
              <div key={item.layer} className="flex items-baseline-last gap-1">
                <p className="text-sm font-medium text-zinc-800 dark:text-zinc-100 mb-2">
                  {item.layer}:
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tools.split(",").map((tool) => (
                    <span
                      key={tool.trim()}
                      className="px-3 py-1 border border-zinc-300 dark:border-zinc-600 rounded-md text-sm text-zinc-700 dark:text-zinc-200"
                    >
                      {tool.trim()}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Challenges & Solutions
          </h2>
          <div className="mt-4 space-y-4">
            {challenges.map((c, index) => (
              <div
                key={index}
                className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 bg-white dark:bg-zinc-900 space-y-2"
              >
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {c.challenge}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light">
                    {c.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Outcome
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 font-light">
            {results}
          </p>
        </div>
        {upcomingFeatures && upcomingFeatures.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Upcoming Features
            </h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-400 font-light">
              {upcomingFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProjectCaseStudy;
