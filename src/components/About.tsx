export default function About() {
  return (
    <section id="about" className="py-24 px-8 border-t border-slate-100 dark:border-slate-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-6xl font-extrabold tracking-tight sticky top-32 text-slate-900 dark:text-white">
            About
            <div className="h-1.5 w-[70px] bg-blue-300 mt-2 rounded-full"></div>
          </h2>
        </div>
        <div className="md:col-span-2 pl-0 md:pl-12">
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
            <p className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200 leading-snug">
              I am a Software Developer driven by the challenge of solving complex problems through elegant, high-performance code.
            </p>
            <div className="space-y-4 text-slate-500 dark:text-slate-400 leading-relaxed text-sm md:text-base">
              <p>
                With a solid foundation in <strong>Computer Engineering</strong> and professional experience in <strong>Fintech and System Automation</strong>, I specialize in crafting robust backend architectures that prioritize security and efficiency.
              </p>
              <p>
                I believe that great software isn't just about functionality—it's about building systems that are maintainable, scalable, and intuitive. Whether I'm optimizing SQL queries or developing custom .NET plugins, my goal is always to deliver high-quality solutions.
              </p>
              <div className="pt-6 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase text-[10px] tracking-widest">
                    Main Stack
                  </h4>
                  <p className="font-mono text-xs text-blue-600 dark:text-blue-400">
                    .NET • Spring Boot • React • PostgreSQL
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase text-[10px] tracking-widest">
                    Core Focus
                  </h4>
                  <p className="font-mono text-xs text-blue-600 dark:text-blue-400">
                    System Design • API Security • Automation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}