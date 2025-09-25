"use client";

import { Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "sagarsaini@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mt-24">
      <div className="w-full max-w-2xl mx-auto rounded-xl border border-blue-200 dark:border-zinc-800 bg-blue-50 dark:bg-zinc-900/40 px-6 py-8 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Let's work together
        </h2>

        <p className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed">
          Interested in collaborating or hiring me for a project? Click to copy
          my email and reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div
            className="group flex items-center mt-2 rounded-md overflow-hidden border border-zinc-300 dark:border-zinc-700 hover:border-blue-400 dark:hover:border-blue-400 transition duration-300 cursor-pointer shadow-sm"
            onClick={handleCopy}
            title="Click to copy email"
          >
            <a
              href={`mailto:${email}`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center bg-blue-100 dark:bg-white/10 px-3 py-2 hover:bg-blue-200 dark:hover:bg-white/20 transition"
              title="Send an email"
            >
              <Mail className="text-zinc-800 dark:text-zinc-100 w-5 h-5" />
            </a>

            <div className="flex-1 text-sm px-3 py-2 text-zinc-800 dark:text-zinc-100 select-none">
              {copied ? "Copied!" : email}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 items-center pt-2 sm:pt-0">
            <a
              href="https://linkedin.com/in/notsagarsaini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://x.com/not_sagar1410"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-400 transition"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
