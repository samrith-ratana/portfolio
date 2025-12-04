'use client';
import React from 'react';
import { Code, Database, Server, PenTool } from 'lucide-react';
import Image from 'next/image';

const skills = [
  { name: 'Frontend', description: 'React, Next.js, Tailwind CSS, TypeScript', icon: <Code className="text-accent" /> },
  { name: 'Backend', description: 'Node.js, Express, Python, Django', icon: <Server className="text-accent" /> },
  { name: 'Databases', description: 'PostgreSQL, MongoDB, Firebase', icon: <Database className="text-accent" /> },
  { name: 'Design', description: 'Figma, UI/UX Principles', icon: <PenTool className="text-accent" /> },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-6 tracking-tight">👨‍💻 About Me</h2>
        <p className="text-center text-secondary text-lg max-w-2xl mx-auto mb-16">
          Passionate full-stack developer with a focus on clean UI, efficient backend, and problem-solving. I love bringing ideas to life through code.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="md:w-1/3">

            <Image
              src="/profile.png"
              alt="Your Name"
              width={400}
              height={400}
              className="rounded-full shadow-2xl mx-auto"
            />

          </div>
          <div className="md:w-2/3 text-lg text-secondary leading-relaxed space-y-5">
            <p>
              Hello! Im a software developer based in <span className="text-white font-semibold">Phnom Penh</span>, crafting full-stack web applications with thoughtful user experiences and solid backend logic.
            </p>
            <p>
              I enjoy working across the stack and love building tools that solve real problems. Outside of tech, I enjoy <span className="text-white font-medium">reading</span>, <span className="text-white font-medium">coding</span>, and exploring new ideas in design and AI.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12">🛠 My Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-800 hover:bg-gray-700 p-6 rounded-2xl shadow-md text-center transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4 transition-transform group-hover:scale-110">
                  {React.cloneElement(skill.icon, { size: 40 })}
                </div>
                <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
