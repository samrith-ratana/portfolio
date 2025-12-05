
import React from 'react';
import { Home, User, Briefcase, Mail } from 'lucide-react';
import ThemeToggle from "@/components/themes/ThemeToggle";

const Navbar = () => {
  const navItems = [
    { href: '#home', label: 'Home', icon: <Home size={20} /> },
    { href: '#about', label: 'About', icon: <User size={20} /> },
    { href: '#projects', label: 'Projects', icon: <Briefcase size={20} /> },
    { href: '#contact', label: 'Contact', icon: <Mail size={20} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary/80 backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white hover:text-accent transition-colors">
          Mr. Samrith Ratana
        </a>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-secondary hover:text-accent transition-colors flex items-center gap-2"
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
        <div className="md:hidden">
          {/* Mobile menu button can be added here */}
        </div>
        <ThemeToggle/>
      </div>
    </nav>
  );
};

export default Navbar;