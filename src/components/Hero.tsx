import { Github, Linkedin, Twitter, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="pt-30 pb-24 px-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-mono text-sm tracking-widest text-blue-600 dark:text-blue-400 font-bold mb-4 uppercase">
            Backend / Full-Stack Developer
          </p>
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-none mb-8 text-slate-900 dark:text-white">
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Ratana</span>
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed mb-8">
            I design and build secure, scalable backend systems and clean user interfaces with a strong focus on performance and maintainability.
          </p>

          <div className="flex space-x-6 mb-10 text-slate-400 dark:text-slate-500">
            <SocialLink href="https://github.com/ISamrithRatana" icon={<Github />} />
            <SocialLink href="https://www.linkedin.com/in/samrith-ratana" icon={<Linkedin />} />
            <SocialLink href="https://x.com/samrith_ratana" icon={<Twitter />} />
            <SocialLink href="#" icon={<Facebook />} />
          </div>

          <div className="flex gap-4">
            <Link
              href="#experience"
              className="px-8 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-primary transition-all shadow-lg"
            >
              View Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/80 transition-all shadow-lg"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-2xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
            {/* Ensure you have profile.png in your public folder */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
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