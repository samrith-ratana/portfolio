"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  ArrowRight, ArrowUpRight, BriefcaseBusiness, CalendarDays, Code2,
  FolderOpen, GraduationCap, LayoutGrid, Link2, Mail, MapPin, Menu, Moon, ShieldCheck, UserRound,
  Sun, X, type LucideIcon,
} from "lucide-react";
import SocialMark from "@/components/SocialMark";

const navigation = [
  ["Home", "home"], ["About", "about"], ["Skills", "skills"],
  ["Projects", "projects"], ["Experience", "experience"], ["Contact", "contact"],
] as const;

const skills = [
  ["next", "Next.js"], ["react", "React"], ["typescript", "TypeScript"], ["django", "Django"],
  ["node", "Node.js"], ["express", "Express"], ["postgres", "PostgreSQL"], ["oracle", "Oracle"],
  ["docker", "Docker"], ["linux", "Linux"], ["tailwind", "Tailwind CSS"], ["git", "Git"],
];

const projects = [
  { title: "Wedding Management System", description: "Guests, table plans, payments, receipts, and multi-currency reports.", tags: ["Next.js", "Oracle", "Tailwind"], type: "Web app" },
  { title: "Coffee Shop POS System", description: "Fast checkout, products, inventory, receipts, and sales reporting.", tags: ["Django", "SQLite", "Bootstrap"], type: "Business system" },
  { title: "CCTV Cloud Service", description: "IP/PTZ cameras, RTSP cloud recording, remote viewing, and multi-device management.", tags: ["Django", "RTSP", "WebSocket"], type: "IT / IoT" },
  { title: "Ecbank Demo Portal", description: "A banking portal concept for role management, account services, and transactions.", tags: ["Next.js", "Oracle", "JWT"], type: "Learning lab" },
];

const experience = [
  { year: "2023 – Present", title: "IT Support / Network & CCTV", description: "Router, Wi-Fi, Hikvision, PoE, NVR/DVR, and IP camera solutions." },
  { year: "2021 – 2023", title: "Web Developer (Freelance)", description: "Web applications, database, and client support." },
  { year: "2020 – 2021", title: "IT Assistant", description: "System setup, troubleshooting, and network support." },
];

const education = [
  { year: "2022 – 2026", title: "Applied Communication (ES106)", description: "Workplace Communication" },
  { year: "2026 – Present", title: "Bachelor’s Degree", description: "In Progress" },
];

function SectionHeading({ icon: Icon, title, subtitle, href, linkText }: {
  icon: LucideIcon; title: string; subtitle?: string; href?: string; linkText?: string;
}) {
  return (
    <div className="section-title">
      <div className="title-left"><span className="title-icon"><Icon size={17} aria-hidden="true" /></span><div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div></div>
      {href && <a className="mini-link" href={href}>{linkText}<ArrowUpRight size={13} aria-hidden="true" /></a>}
    </div>
  );
}

function Timeline({ items }: { items: typeof experience }) {
  return <div className="timeline">{items.map(item => <article className="timeline-item" key={item.title}>
    <div className="timeline-year">{item.year}</div><div><h3>{item.title}</h3><p>{item.description}</p></div>
  </article>)}</div>;
}

export default function Page() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [year, setYear] = useState(2026);
  const dark = mounted && resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
    setYear(new Date().getFullYear());
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: "-30% 0px -60% 0px" });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="nav-wrap container">
        <nav className="nav" aria-label="Main navigation">
          <div className="nav-core">
            <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">SR</span><span>Samrith Ratana</span></a>
            <div className={`nav-links${menuOpen ? " open" : ""}`}>
              {navigation.map(([label, id]) => <a key={id} className={activeSection === id ? "active" : ""} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
            </div>
          </div>
          <div className="nav-actions">
            <button className="icon-button" type="button" onClick={() => setTheme(dark ? "light" : "dark")} aria-label={dark ? "Switch to light appearance" : "Switch to dark appearance"} title="Toggle light/dark appearance">
              {dark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
            </button>
            <a className="download-button" href="#contact"><span><Mail size={14} aria-hidden="true" /></span> Let&apos;s connect <ArrowUpRight size={13} aria-hidden="true" /></a>
            <button className="menu-button" type="button" onClick={() => setMenuOpen(open => !open)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>{menuOpen ? <X size={17} /> : <Menu size={17} />}</button>
          </div>
        </nav>
      </header>

      <main className="container">
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="pill">Hello, I&apos;m</span>
              <h1>Samrith Ratana</h1>
              <p className="role">Full Stack Developer &amp; IT Solutions Specialist</p>
              <p className="hero-desc">I build modern web applications, secure systems, and smart IT solutions. Passionate about technology, networking, CCTV, and creating real value.</p>
              <div className="socials">
                <a href="https://github.com/samrith-ratana" target="_blank" rel="noreferrer" aria-label="GitHub"><SocialMark network="github" size={20} /></a>
                <a href="https://www.linkedin.com/in/samrith-ratana" target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialMark network="linkedin" size={20} /></a>
                <a href="mailto:samrithratana@outlook.com" aria-label="Email"><Mail size={17} /></a>
              </div>
            </div>
            <div className="hero-art">
              <div className="orb">
                <Image
                  src="/profile.png"
                  alt="Portrait of Samrith Ratana"
                  fill
                  priority
                  sizes="(max-width: 680px) 195px, 290px"
                  className="profile-photo"
                />
              </div>
              <div className="float-card"><span className="online-dot" />Available for<b>new opportunities</b></div>
            </div>
          </div>
          <div className="stats">
            {[[Code2, "5+", "Projects Completed"], [BriefcaseBusiness, "2+", "Years of Experience"], [GraduationCap, "Degree", "In Progress"], [ShieldCheck, "100%", "Committed to Quality"]].map(([Icon, metric, caption]) => {
              const StatIcon = Icon as LucideIcon;
              return <div className="stat glass" key={caption as string}><span className="stat-icon"><StatIcon size={17} aria-hidden="true" /></span><div><strong>{metric as string}</strong><small>{caption as string}</small></div></div>;
            })}
          </div>
        </section>

        <section id="about"><div className="section-card glass">
          <SectionHeading icon={UserRound} title="About Me" />
          <div className="about-grid">
            <div className="about-copy"><p>I am a dedicated developer with an interest in web development, backend systems, networking, and CCTV solutions. I enjoy solving real-world problems, learning new technologies, and building products that make life easier and more secure.</p><a className="soft-button" href="#projects">Explore my work <ArrowRight size={14} /></a></div>
            <div className="vision"><div className="apple-mark">✧</div><h3>My Vision</h3><p>“Bring quality of product and care.”</p></div>
            <div className="contact-mini">
              <div className="contact-line"><span className="small-icon"><MapPin size={14} /></span><span>Cambodia</span></div>
              <div className="contact-line"><span className="small-icon"><Mail size={14} /></span><a href="mailto:samrithratana@outlook.com">samrithratana@outlook.com</a></div>
              <div className="contact-line"><span className="small-icon"><Link2 size={14} /></span><a href="https://github.com/samrith-ratana" target="_blank" rel="noreferrer">github.com/samrith-ratana</a></div>
              <div className="contact-line"><span className="small-icon"><CalendarDays size={14} /></span><span>Available for remote / onsite</span></div>
            </div>
          </div>
        </div></section>

        <section id="skills"><div className="section-card glass">
          <SectionHeading icon={LayoutGrid} title="Skills & Technologies" />
          <div className="skills-grid">{skills.map(([icon, name]) => <div className="skill-chip" key={name}><span className="skill-logo"><Image src={`/skills/${icon}.svg`} alt="" width={25} height={25} /></span><span>{name}</span></div>)}</div>
        </div></section>

        <section id="projects"><div className="section-card glass">
          <SectionHeading icon={FolderOpen} title="Featured Projects" href="https://github.com/samrith-ratana" linkText="View all" />
          <div className="projects-grid">{projects.map(({ title, description, tags, type }, index) => <article className="project" key={title}>
            <div className={`project-art project-art-${index + 1}`}><Image src={`/projects/project-${index + 1}.svg`} alt={`${title} project preview`} fill sizes="(max-width: 680px) 45vw, (max-width: 980px) 42vw, 22vw" /></div>
            <div className="project-info"><h3>{title}</h3><p>{description}</p><div className="project-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-bottom"><span className="project-tags"><span>{type}</span></span><a href="#contact" aria-label={`Ask about ${title}`}><ArrowUpRight size={14} /></a></div></div>
          </article>)}</div>
        </div></section>

        <section id="experience"><div className="timeline-grid">
          <div className="section-card glass"><SectionHeading icon={BriefcaseBusiness} title="Experience" /><Timeline items={experience} /></div>
          <div className="section-card glass"><SectionHeading icon={GraduationCap} title="Education" /><Timeline items={education} /></div>
        </div></section>

        <section id="contact"><div className="section-card glass contact-panel">
          <div><SectionHeading icon={Mail} title="Get In Touch" /><p>Feel free to reach out for collaboration, job opportunities, or just to say hello!</p></div>
          <div className="contact-actions">
            <a href="mailto:samrithratana@outlook.com"><Mail size={14} /> Send Email</a>
            <a href="https://github.com/samrith-ratana" target="_blank" rel="noreferrer"><SocialMark network="github" size={14} /> GitHub</a>
            <a href="https://www.linkedin.com/in/samrith-ratana" target="_blank" rel="noreferrer"><SocialMark network="linkedin" size={14} /> LinkedIn</a>
            <a className="primary" href="mailto:samrithratana@outlook.com?subject=Let%27s%20work%20together">Let&apos;s Work Together&nbsp; <ArrowRight size={14} /></a>
          </div>
        </div></section>
        <footer><div className="footer-line" />© {year} Samrith Ratana. All rights reserved.</footer>
      </main>
    </>
  );
}
