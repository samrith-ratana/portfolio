export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="
     px-8 bg-slate-50 border-t border-slate-100 dark:border-slate-800 scroll-mt-20
    py-10 text-center text-slate-400 text-[12px] uppercase tracking-widest font-mono dark:bg-slate-900/90 transition-colors duration-300 "
    >
      &copy; {currentYear} Ratana Samrith • Designed for Performance
    </footer>
  );
}