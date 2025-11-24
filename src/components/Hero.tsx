import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-blue-900 text-white"
    >
      <div className="container mx-auto px-6 text-center animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
          Hello, Im <span className="text-accent">Samrith Ratana</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          A passionate Full-Stack Developer building clean, scalable, and modern web applications.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/80 transition-all shadow-lg"
          >
            🚀 View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-primary transition-all shadow-lg"
          >
            💬 Contact Me
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-6">
          <a
            href="https://github.com/ISamrithRatana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/samrith-ratana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://t.me/samrith_ratana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Twitter size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
