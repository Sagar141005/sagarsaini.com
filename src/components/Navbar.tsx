"use client";

import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed w-full h-16 p-4 bg-white dark:bg-black ring-1 ring-black/10 dark:ring-white/10">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <div>
          <Link
            href="/"
            className="text-2xl font-medium text-black dark:text-white"
          >
            sagar
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/about"
            className="text-sm font-light text-neutral-500 dark:hover:text-[#FAFAFA] hover:text-black cursor-pointer"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-sm font-light text-neutral-500 dark:hover:text-[#FAFAFA] hover:text-black cursor-pointer"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="text-sm font-light text-neutral-500 dark:hover:text-[#FAFAFA] hover:text-black cursor-pointer"
          >
            Blog
          </Link>
          <Theme />
          <button className="text-sm font-light bg-black dark:bg-white text-white dark:text-black flex items-center justify-center gap-1 py-2 px-4 rounded-full cursor-pointer">
            Resume <ArrowUpRight className="size-5 font-bold" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
