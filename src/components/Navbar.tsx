"use client";
import Link from "next/link";
import ThemeToggle from "@/components/themes/ThemeToggle";


export default function Navbar() {

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-primary/80 backdrop-blur-sm z-50 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
        <span className="text-xl font-medium tracking-tight text-slate-900 dark:text-white">
          SAMRITH RATANA
        </span>

        <div className="flex items-center space-x-10">
          <div className="hidden md:flex space-x-8 text-[17px] font-mono text-slate-500 dark:text-slate-400  tracking-widest">
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

        <ThemeToggle/>
        </div>
      </div>
    </nav>
  );
}