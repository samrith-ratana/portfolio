export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-100 dark:border-slate-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-6xl font-extrabold tracking-tight sticky top-32 text-slate-900 dark:text-white">
            Experience
            <div className="h-1.5 w-[70px] bg-blue-300 mt-2 rounded-full"></div>
          </h2>
        </div>
        
        {/* Timeline Container */}
        <div className="md:col-span-2 relative pl-12 
          before:content-[''] before:absolute before:left-[20px] before:top-0 before:bottom-0 before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800">
          
          <ExperienceCard 
            title="C# Developer"
            company="School"
            period="Mar 2025 — Present"
            items={[
              "Developed and maintained .NET plugins.",
              "Integrated third-party APIs for platform enhancement.",
              "Customized CRM workflows to improve internal UX."
            ]}
          />

          <ExperienceCard 
            title="Backend Developer"
            company="Team Evolve"
            period="Sep 2024 — Mar 2025"
            items={[
              "Built backend services with .NET MVC & Spring Boot.",
              "Optimized database performance by tuning slow SQL queries.",
              "Developed Windows Services for high-priority task automation."
            ]}
          />

        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ title, company, period, items }: { title: string, company: string, period: string, items: string[] }) {
  return (
    <div className="relative mb-16 last:mb-0">
      {/* Timeline Node */}
      <div className="absolute left-[13px] -ml-12 top-3 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-950 z-10"></div>
      
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-8 hover:-translate-y-1 transition-transform shadow-sm">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold mb-1 text-slate-900 dark:text-white">{title}</h3>
            <p className="text-blue-500 dark:text-blue-400 font-mono text-sm font-bold">{company}</p>
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2 md:mt-0">
            {period}
          </span>
        </div>
        <ul className="space-y-3 text-slate-500 dark:text-slate-400 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-blue-500">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}