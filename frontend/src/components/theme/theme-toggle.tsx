"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const {
    resolvedTheme,
    setTheme,
  } = useTheme();

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="
        p-2
        rounded-xl
        border
        border-slate-200/60
        dark:border-white/10
        "
      >
        <Moon size={18} />
      </button>
    );
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={() =>
        setTheme(
          resolvedTheme === "dark"
            ? "light"
            : "dark"
        )
      }
      className="
      p-2
      rounded-xl
      border
      border-slate-200/60
      dark:border-white/10
      hover:bg-black/5
      dark:hover:bg-white/5
      transition-all
      "
    >
      {resolvedTheme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}
