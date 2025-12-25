"use client";

import { useTheme } from "next-themes";
import soundManager from "@/lib/sound-manager";
import { MoonIcon } from "../svg/animated/Moon";
import { SunIcon } from "../svg/animated/Sun";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
    soundManager.playClick();
  };

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
