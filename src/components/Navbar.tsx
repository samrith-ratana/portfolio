"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg z-50 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
        <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          RATAN.DEV
        </span>

        <div className="flex items-center space-x-10">
          <div className="hidden md:flex space-x-10 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:ring-2 ring-blue-400 transition-all text-slate-700 dark:text-slate-200"
            aria-label="Toggle Dark Mode"
          >
            {mounted ? (
              theme === "dark" ? <Sun size={20} /> : <Moon size={20} />
            ) : (
              <div className="w-5 h-5" /> // Placeholder to prevent layout shift
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}