export default function Education() {
  return (
    <section id="education" className="py-24 px-8 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-6xl font-extrabold tracking-tight sticky top-32 text-slate-900 dark:text-white">
            Education
            <div className="h-1.5 w-[70px] bg-blue-300 mt-2 rounded-full"></div>
          </h2>
        </div>
        <div className="md:col-span-2 pl-0 md:pl-12">
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-1 text-slate-900 dark:text-white">Bachelor of Engineering in IT</h3>
                <p className="text-blue-500 dark:text-blue-400 font-mono text-sm font-bold">
                  Cambodian Mekong University (CMU)
                </p>
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2 md:mt-0">
                2022 — Present
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Comprehensive study of Computer Science fundamentals, focusing on Software Engineering, Distributed Databases, and Application Security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}