import React from "react";

export default function About() {
  const skills = [
    "C# / .NET",
    "Next.js",
    "SQL Server & Oracle ",
    "Django Framework (Python)",
    "API Development & Integration",
    "Spring Boot (Java)",
    "Docker & Web Hosting",
    "Linux Server Management",
    "Third-Party API Integration"
  ];
  

  return (
    <section id="about" className="py-24 px-8 border-t border-slate-100 dark:border-slate-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
        
        {/* Left Column: Heading */}
        <div>
          <h2 className="text-6xl font-extrabold tracking-tight sticky top-32 text-slate-900 dark:text-white">
            About me
            <div className="h-1.5 w-[70px] bg-blue-300 mt-2 rounded-full"></div>
          </h2>
        </div>
        
        {/* Right Column: Bio & Skills */}
        <div className="md:col-span-2 space-y-8">
          
          {/* Bio Text */}
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-mono">
            I am a Backend Developer specializing in <span className="font-bold text-accent">.NET</span>, <span className="font-bold text-accent">Spring Boot</span>, and <span className="font-bold text-accent">Django</span>.
            <br /><br />
            My passion lies in backend architecture—from designing reliable <span className="text-black dark:text-white font-semibold">APIs</span> and automating workflows to optimizing <span className="text-black dark:text-white font-semibold">SQL</span> database performance for business growth.
          </p>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs md:text-sm font-mono tracking-wide"
              >
                {skill}
              </span>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}