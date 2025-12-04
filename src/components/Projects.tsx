// 'use client';
// import React from 'react';
// import { ExternalLink, Github } from 'lucide-react';

// type Project = {
//   title: string;
//   description: string;
//   imageUrl: string;
//   tags: string[];
//   liveUrl: string;
//   githubUrl: string;
// };

// const projectData = [
//   {
//     title: 'Project One: E-commerce Platform',
//     description: 'A full-featured e-commerce site built with Next.js, Stripe for payments, and PostgreSQL. Includes user authentication and an admin dashboard.',
//     imageUrl: '/qr.png',
//     tags: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
//     liveUrl: '#',
//     githubUrl: '#',
//   },
//   {
//     title: 'Project Two: Task Management App',
//     description: 'A collaborative task management application with real-time updates using Firebase. Features drag-and-drop functionality and notifications.',
//     imageUrl: '/qr.png',
//     tags: ['React', 'Firebase', 'Material UI', 'Real-time'],
//     liveUrl: '#',
//     githubUrl: '#',
//   },
//   {
//     title: 'Project Three: Personal Blog',
//     description: 'A static-generated blog using Next.js and MDX for content. Optimized for SEO and performance with a clean, minimalist design.',
//     imageUrl: '/qr.png',
//     tags: ['Next.js', 'MDX', 'SEO', 'Static Site'],
//     liveUrl: '#',
//     githubUrl: '#',
//   },
// ];

// const ProjectCard = ({ project }: { project: Project }) => (
//   <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
//     <div className="relative">
//       <img
//         src={project.imageUrl}
//         alt={project.title}
//         className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
//         onError={(e) => {
//           e.currentTarget.src = '/qr.png';
//         }}
//       />
//     </div>
//     <div className="p-6">
//       <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
//       <p className="text-gray-400 text-sm mb-4">{project.description}</p>
//       <div className="flex flex-wrap gap-2 mb-4">
//         {project.tags.map((tag) => (
//           <span
//             key={tag}
//             className="bg-gray-700 text-accent text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//       <div className="flex justify-between items-center mt-4">
//         <a
//           href={project.liveUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors"
//         >
//           <ExternalLink size={18} /> Live Demo
//         </a>
//         <a
//           href={project.githubUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors"
//         >
//           <Github size={18} /> Source Code
//         </a>
//       </div>
//     </div>
//   </div>
// );

 const Projects = () => {
  return (
//     <section id="projects" className="py-24 bg-gradient-to-br from-primary to-gray-950">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-extrabold text-center text-white mb-6">🚀 My Projects</h2>
//         <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
//           Here are some recent projects Ive worked on — full-stack applications, real-time tools, and static sites.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {projectData.map((project, index) => (
//             <ProjectCard key={index} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
    <hr className="border-gray-700 my-12" />
   );
};

export default Projects;
