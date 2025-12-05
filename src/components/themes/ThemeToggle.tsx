"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
<button
  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
>
  {theme === "dark" ? (
    <Sun className="w-5 h-5" />
  ) : (
    <Moon className="w-5 h-5" />
  )}

  {theme === "dark" ? "Light Mode" : "Dark Mode"}
</button>
  );
}
