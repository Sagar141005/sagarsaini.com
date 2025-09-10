"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Theme from "./Theme";

const links = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full h-16 px-4 bg-white/80 dark:bg-black/80 backdrop-blur-sm ring-1 ring-black/10 dark:ring-white/10 z-50">
      <div className="max-w-3xl mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-medium text-black dark:text-white"
        >
          sagar
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-4">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-light transition-colors ${
                pathname === href
                  ? "text-black dark:text-white font-medium"
                  : "text-neutral-500 hover:text-black dark:hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}

          <Theme />

          <button className="text-sm font-light bg-black dark:bg-white text-white dark:text-black flex items-center gap-1 py-2 px-4 rounded-full hover:opacity-90 transition">
            Resume <ArrowUpRight className="size-4" />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 sm:hidden">
          <Theme />
          <button
            onClick={toggleMenu}
            className="text-zinc-700 dark:text-zinc-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800 shadow-md z-40">
          <div className="flex flex-col p-4 gap-3">
            {links.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)} // Close on click
                className={`text-sm font-light ${
                  pathname === href
                    ? "text-black dark:text-white font-medium"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Resume button (full width) */}
            <button className="mt-3 w-full flex justify-center items-center gap-2 rounded-lg bg-black dark:bg-white text-white dark:text-black py-2 px-4 text-sm font-medium hover:opacity-90 transition">
              Resume <ArrowUpRight className="size-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
