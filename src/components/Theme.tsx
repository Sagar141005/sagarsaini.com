"use client";

import { useEffect, useState } from "react";
import { Sun, MoonStar } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    if (shouldUseDark) {
      root.classList.add("dark");
      setIsDark(true);
    } else {
      root.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = isDark ? "light" : "dark";

    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", newTheme);
    setIsDark(newTheme === "dark");

    const sound = new Audio("/sounds/click.mp3");
    sound.volume = 0.5;
    sound.play().catch(console.warn);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="border border-[#E7E7E7] dark:border-[#27272a] p-1.5 rounded-full"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <MoonStar className="size-4 text-[#FAFAFA] transition-all" />
      ) : (
        <Sun className="size-4 text-[#09090B] transition-all" />
      )}
    </button>
  );
}
