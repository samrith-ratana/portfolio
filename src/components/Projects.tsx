import React from "react";
import { Github, ExternalLink, FolderGit2, ArrowUpRight } from "lucide-react";

export default function Projects() {
  // 1. EDIT YOUR PROJECT DATA HERE
  const projects = [
    {
      title: "Enterprise CRM System",
      description: "A comprehensive customer relationship management platform built for high-volume data processing. Features include automated email workflows, role-based access control (RBAC), and real-time analytics dashboard.",
      tech: ["C#", ".NET Core", "SQL Server", "React", "Redis"],
      github: "https://github.com/yourusername/project-1",
      live: "https://project-demo.com",
      image: "/api/placeholder/600/300" // Replace with your project screenshot
    },
    {
      title: "E-Commerce Microservices",
      description: "A scalable backend architecture for an online marketplace. Decomposed monolithic app into microservices using Spring Boot, handled messaging with RabbitMQ, and deployed via Docker containers.",
      tech: ["Java", "Spring Boot", "RabbitMQ", "Docker", "PostgreSQL"],
      github: "https://github.com/yourusername/project-2",
      live: null, // Set to null if no live demo
      image: "/api/placeholder/600/300"
    },
    {
      title: "Inventory API Gateway",
      description: "Secure RESTful API designed to bridge legacy inventory systems with modern frontend applications. Implemented JWT authentication, rate limiting, and comprehensive Swagger documentation.",
      tech: ["Python", "Django", "Rest Framework", "Azure"],
      github: "https://github.com/yourusername/project-3",
      live: "https://api-docs.com",
      image: "/api/placeholder/600/300"
    }
  ];

  return (
    <section id="projects" className="py-24 px-8 bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-100 dark:border-slate-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        
        {/* Sticky Header */}
        <div>
          <h2 className="text-6xl font-extrabold tracking-tight sticky top-32 text-slate-900 dark:text-white">
            Projects
            <div className="h-1.5 w-[70px] bg-blue-300 mt-2 rounded-full"></div>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="md:col-span-2 space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          
          {/* "View More" Link */}
          <div className="text-center md:text-left pt-8">
            <a 
              href="https://github.com/samrith-ratana" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-bold border-b-2 border-blue-300 hover:text-blue-600 transition-colors pb-1"
            >
              View Full Project Archive <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

// Reusable Project Card Component
function ProjectCard({ project }: { project: any }) {
  return (
    <div className="group relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1">

      {/* 2. Content Body */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          
          {/* Action Links */}
          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" title="View Code">
                <Github size={20} />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors" title="Live Demo">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-mono text-sm">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <span 
              key={t} 
              className="px-3 py-1 text-xs font-bold font-mono rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}