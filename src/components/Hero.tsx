import { Github, Linkedin, Twitter, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="pt-30 pb-24 px-8 scroll-mt-20 dark:bg-slate-950/50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 font-mono text-sm tracking-widest font-bold mb-4 uppercase">
            {/* Your Title */}
            <span className="text-blue-600 dark:text-blue-400">
              Software Developer
            </span>

            {/* Separator Dot (Hidden on very small screens) */}
            <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>

            {/* "Available" Badge with Animation */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50">
              
              {/* The Pulsing Dot Animation */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>

              {/* Status Text */}
              <span className="text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-xs tracking-wide">
                Open to Work
              </span>
            </div>

          </div>
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-none mb-8 text-slate-900 dark:text-white">
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Ratana</span>
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed mb-8">
            I design and build secure, scalable backend systems and clean user interfaces with a strong focus on performance and maintainability.
          </p>

          <div className="flex space-x-6 mb-10 text-slate-400 dark:text-slate-500">
            <SocialLink href="https://github.com/samrith-ratana" icon={<Github />} />
            <SocialLink href="https://www.linkedin.com/in/samrith-ratana" icon={<Linkedin />} />
            <SocialLink href="https://x.com/Samrith_Ratana" icon={<Twitter />} />
            <SocialLink href="https://web.facebook.com/samrith.ratana.ken" icon={<Facebook />} />
          </div>

          <div className="flex gap-4">
            <Link
              href="#about"
              className="px-8 py-3 dark:text-white rounded-full dark:border-white border border-black text-black font-medium hover:bg-white dark:hover:text-black hover:text-primary transition-all shadow-lg"
            >
              About Me
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 dark:text-white rounded-full bg-accent  text-black font-medium hover:bg-accent/80 transition-all shadow-lg"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-2xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
            {/* Ensure you have profile.png in your public folder */}
            <div className="relative w-80 h-80 md:w-90 md:h-90 rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/profile.png"
                alt="Ratana Profile"
                fill
                className="object-cover transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      {icon}
    </a>
  );
}