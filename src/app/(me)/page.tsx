"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2, Coffee,
  GraduationCap, Mail, MapPin, Menu, Moon, Network, ShieldCheck,
  Sun, X, type LucideIcon,
} from "lucide-react";

const navigation = [
  ["Home", "home"], ["About", "about"], ["Skills", "skills"],
  ["Projects", "projects"], ["Experience", "experience"], ["Contact", "contact"],
] as const;

const skills = [
  ["N", "Next.js"], ["⚛", "React"], ["TS", "TypeScript"], ["Dj", "Django"],
  ["JS", "Node.js"], ["Ex", "Express"], ["PG", "PostgreSQL"], ["Or", "Oracle"],
  ["▦", "Docker"], ["⌘", "Linux"], ["≈", "Tailwind CSS"], ["Git", "Git"],
];

const projects = [
  { icon: BriefcaseBusiness, title: "Wedding Management System", description: "Guests, tables, attendance, gift records, receipts, and multi-currency reporting.", tags: ["Next.js", "Oracle", "Tailwind"], type: "Web app" },
  { icon: Coffee, title: "Coffee Shop POS System", description: "Fast checkout, products, inventory, receipts, and sales reporting.", tags: ["Django", "SQLite", "POS"], type: "Business system" },
  { icon: Network, title: "CCTV Cloud Service", description: "Exploring IP/PTZ cameras, RTSP streams, device management, and remote viewing.", tags: ["Django", "RTSP", "Networking"], type: "IT / IoT" },
  { icon: ShieldCheck, title: "Secure Account Portal", description: "Role-based access, account workflows, protected pages, and transaction concepts.", tags: ["Next.js", "Oracle", "Security"], type: "Learning lab" },
];

const experience = [
  { year: "2023 – Present", title: "IT Support / Network & CCTV", description: "Router, Wi-Fi, Hikvision, PoE, NVR/DVR, and IP camera solutions.", note: "Replace with your exact job title and responsibilities." },
  { year: "2021 – 2023", title: "Web Development Practice", description: "Web applications, databases, APIs, and client-support workflows.", note: "Add verified freelance or project experience here." },
  { year: "Current", title: "Software Engineering Projects", description: "Building full-stack applications and improving secure coding skills.", note: "Learning through hands-on implementation." },
];

const education = [
  { year: "2022 – 2026", title: "Applied Communication (ES106)", description: "Workplace communication", note: "Update dates and qualification as appropriate." },
  { year: "In progress", title: "Software Engineering", description: "Full-stack development and system design", note: "Add your institution, degree, and expected graduation." },
];

function SectionHeading({ icon: Icon, title, subtitle, href, linkText }: {
  icon: LucideIcon; title: string; subtitle: string; href?: string; linkText?: string;
}) {
  return (
    <div className="section-title">
      <div className="title-left"><span className="title-icon"><Icon size={17} aria-hidden="true" /></span><div><h2>{title}</h2><p>{subtitle}</p></div></div>
      {href && <a className="mini-link" href={href}>{linkText}<ArrowUpRight size={13} aria-hidden="true" /></a>}
    </div>
  );
}

function Timeline({ items }: { items: typeof experience }) {
  return <div className="timeline">{items.map(item => <article className="timeline-item" key={item.title}>
    <div className="timeline-year">{item.year}</div><div><h3>{item.title}</h3><p>{item.description}</p><small>{item.note}</small></div>
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
          <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">SR</span><span>Samrith Ratana</span></a>
          <div className={`nav-links${menuOpen ? " open" : ""}`}>
            {navigation.map(([label, id]) => <a key={id} className={activeSection === id ? "active" : ""} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          </div>
          <div className="nav-actions">
            <button className="icon-button" type="button" onClick={() => setTheme(dark ? "light" : "dark")} aria-label={dark ? "Switch to light appearance" : "Switch to dark appearance"} title="Toggle light/dark appearance">
              {dark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
            </button>
            <a className="download-button" href="#contact"><span><ArrowDown size={14} aria-hidden="true" /></span> Let&apos;s connect <ArrowUpRight size={13} aria-hidden="true" /></a>
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
                <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
                <a href="mailto:your.email@example.com" aria-label="Email"><Mail size={17} /></a>
              </div>
            </div>
            <div className="hero-art" aria-label="Profile monogram">
              <div className="orb"><div className="initials">SR</div></div>
              <div className="float-card"><span className="online-dot" />Available for<b>new opportunities</b></div>
            </div>
          </div>
          <div className="stats">
            {[[Code2, "5+", "Projects in progress"], [GraduationCap, "2+", "Years of learning"], [ArrowRight, "Always", "Learning & improving"], [ShieldCheck, "100%", "Committed to quality"]].map(([Icon, metric, caption]) => {
              const StatIcon = Icon as LucideIcon;
              return <div className="stat glass" key={caption as string}><span className="stat-icon"><StatIcon size={17} aria-hidden="true" /></span><div><strong>{metric as string}</strong><small>{caption as string}</small></div></div>;
            })}
          </div>
        </section>

        <section id="about"><div className="section-card glass">
          <SectionHeading icon={MapPin} title="About Me" subtitle="A little about what I do" href="#experience" linkText="My journey" />
          <div className="about-grid">
            <div className="about-copy"><p>I am a dedicated developer with an interest in web development, backend systems, networking, and CCTV solutions. I enjoy solving real-world problems, learning new technologies, and building products that make life easier and more secure.</p><a className="soft-button" href="#projects">Explore my work <ArrowRight size={14} /></a></div>
            <div className="vision"><div className="apple-mark">✧</div><h3>My Vision</h3><p>“Bring quality of product and care.”</p></div>
            <div className="contact-mini">
              <div className="contact-line"><span className="small-icon"><MapPin size={14} /></span><span>Cambodia</span></div>
              <div className="contact-line"><span className="small-icon"><Mail size={14} /></span><a href="mailto:your.email@example.com">your.email@example.com</a></div>
              <div className="contact-line"><span className="small-icon"><ArrowUpRight size={14} /></span><a href="https://github.com/" target="_blank" rel="noreferrer">github.com/your-username</a></div>
              <div className="contact-line"><span className="small-icon"><BriefcaseBusiness size={14} /></span><span>Open to remote / onsite</span></div>
            </div>
          </div>
        </div></section>

        <section id="skills"><div className="section-card glass">
          <SectionHeading icon={Code2} title="Skills & Technologies" subtitle="Tools I use and continue to learn" />
          <div className="skills-grid">{skills.map(([symbol, name]) => <div className="skill-chip" key={name}><span className="skill-logo">{symbol}</span><span>{name}</span></div>)}</div>
        </div></section>

        <section id="projects"><div className="section-card glass">
          <SectionHeading icon={BriefcaseBusiness} title="Featured Projects" subtitle="Selected concepts and portfolio work" href="https://github.com/" linkText="View GitHub" />
          <div className="projects-grid">{projects.map(({ icon: Icon, title, description, tags, type }, index) => <article className="project" key={title}>
            <div className={`project-art project-art-${index + 1}`}><div className="mock-window"><div className="mock-bar"><i /><i /><i /></div><div className="mock-lines"><i /><i /><i /></div><div className="mock-tiles"><i /><i /><i /></div><Icon className="project-mark" size={25} aria-hidden="true" /></div></div>
            <div className="project-info"><h3>{title}</h3><p>{description}</p><div className="project-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-bottom"><span className="project-tags"><span>{type}</span></span><a href="#contact" aria-label={`Ask about ${title}`}><ArrowUpRight size={14} /></a></div></div>
          </article>)}</div>
        </div></section>

        <section id="experience"><div className="timeline-grid">
          <div className="section-card glass"><SectionHeading icon={BriefcaseBusiness} title="Experience" subtitle="Professional and practical experience" /><Timeline items={experience} /></div>
          <div className="section-card glass"><SectionHeading icon={GraduationCap} title="Education" subtitle="Academic background" /><Timeline items={education} /></div>
        </div></section>

        <section id="contact"><div className="section-card glass contact-panel">
          <div><SectionHeading icon={Mail} title="Get In Touch" subtitle="Have a project, an idea, or an opportunity?" /><p>Feel free to reach out about collaboration, software projects, or IT solutions.</p></div>
          <div className="contact-actions">
            <a href="mailto:your.email@example.com"><Mail size={14} /> Send Email</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GH GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">in LinkedIn</a>
            <a className="primary" href="mailto:your.email@example.com?subject=Let%27s%20work%20together">Let&apos;s Work Together&nbsp; <ArrowRight size={14} /></a>
          </div>
        </div></section>
        <footer><div className="footer-line" />© {year} Samrith Ratana. All rights reserved.</footer>
      </main>
    </>
  );
}
