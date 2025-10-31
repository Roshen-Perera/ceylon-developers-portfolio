"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Load saved theme
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.toggle("dark", prefersDark);
      setTheme(prefersDark ? "dark" : "light");
    }

    // Listen for theme changes from other instances
    const handleThemeChange = (e: CustomEvent<"light" | "dark">) => {
      setTheme(e.detail);
    };

    window.addEventListener("themeChange", handleThemeChange as EventListener);
    return () => {
      window.removeEventListener(
        "themeChange",
        handleThemeChange as EventListener
      );
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");

    // Notify other instances
    window.dispatchEvent(new CustomEvent("themeChange", { detail: next }));
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl hover:bg-accent transition-colors"
      title="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-10 h-10 text-foreground" />
      ) : (
        <Moon className="w-10 h-10 text-foreground" />
      )}
    </button>
  );
}
