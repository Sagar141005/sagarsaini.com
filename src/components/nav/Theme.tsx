"use client";

import { useTheme } from "next-themes";
import soundManager from "@/lib/sound-manager";
import { MoonIcon } from "../svg/animated/Moon";
import { SunIcon } from "../svg/animated/Sun";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const buttonClasses =
    "inline-flex items-center justify-center p-2 rounded-lg hover:bg-muted text-primary cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background";

  if (!mounted) {
    return (
      <button
        type="button"
        className={buttonClasses}
        aria-hidden="true"
        disabled
      >
        <span className="h-4 w-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
    soundManager.playClick();
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={buttonClasses}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
    >
      {isDark ? <MoonIcon size={16} /> : <SunIcon size={16} />}
    </button>
  );
}
