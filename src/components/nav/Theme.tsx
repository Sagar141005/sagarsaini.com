"use client";

import { useEffect, useState } from "react";
import soundManager from "@/lib/sound-manager";
import { MoonIcon } from "../svg/animated/Moon";
import { SunIcon } from "../svg/animated/Sun";

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

    soundManager.playClick();
  };

  if (!mounted) return null;

  const commonClasses =
    "p-2 rounded-lg hover:bg-muted text-primary cursor-pointer";

  return isDark ? (
    <MoonIcon
      size={16}
      onClick={toggleTheme}
      className={commonClasses}
      aria-label="Switch to light mode"
    />
  ) : (
    <SunIcon
      size={16}
      onClick={toggleTheme}
      className={commonClasses}
      aria-label="Switch to dark mode"
    />
  );
}
