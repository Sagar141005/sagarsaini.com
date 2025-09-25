import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto mt-24 mb-8 bg-white dark:bg-[#09090B] border-t border-neutral-200 dark:border-neutral-800 select-none">
      <div className="px-6 py-12 flex flex-col sm:flex-row justify-between gap-12">
        {/* Navigation */}
        <ul className="space-y-3 font-light text-base">
          {[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: "Blog", href: "/blog" },
          ].map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-neutral-500 dark:hover:text-[#FAFAFA] hover:text-black transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="flex flex-col font-light text-base items-start sm:items-end">
          <a
            href="https://github.com/Sagar141005"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-neutral-500 dark:hover:text-[#FAFAFA] hover:text-black transition-colors duration-200"
          >
            GitHub <ArrowUpRight className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/notsagarsaini"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-neutral-500 dark:hover:text-[#FAFAFA] hover:text-black transition-colors duration-200"
          >
            LinkedIn <ArrowUpRight className="size-5" />
          </a>
          <a
            href="https://x.com/not_sagar1410"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-neutral-500 dark:hover:text-[#FAFAFA] hover:text-black transition-colors duration-200"
          >
            X (Twitter) <ArrowUpRight className="size-5" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-6 text-center text-sm font-light text-neutral-500 dark:text-neutral-600">
        © {new Date().getFullYear()} Sagar Saini. All rights reserved.
      </div>
    </footer>
  );
}
