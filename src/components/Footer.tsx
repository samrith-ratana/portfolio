export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 text-center text-slate-400 text-[12px] uppercase tracking-widest font-mono bg-white dark:bg-slate-950 transition-colors duration-300">
      &copy; {currentYear} Ratana Samrith • Designed for Performance
    </footer>
  );
}