"use client";

import { useEffect, useState } from "react";
import { Sun, MoonStar } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      root.classList.add("dark");
      setIsDark(true);
    } else {
      root.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark === null) return;
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

  if (isDark === null) return null;

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
