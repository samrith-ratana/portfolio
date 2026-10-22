"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Moon,
  Monitor,
  Sun,
  Terminal,
  X,
} from "lucide-react";
import SocialMark from "@/components/SocialMark";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const skills = [
  { name: "Next.js", icon: "next" },
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Django", icon: "django" },
  { name: "Node.js", icon: "node" },
  { name: "Express", icon: "express" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Oracle", icon: "oracle" },
  { name: "Docker", icon: "docker" },
  { name: "Linux", icon: "linux" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Git", icon: "git" },
];

const projects = [
  {
    title: "Wedding Management System",
    description: "Guests, tables, attendance, gift records, receipts, and multi-currency reporting.",
    tags: ["Next.js", "Oracle", "Tailwind"],
    type: "Web app",
    color: "#9cb8d7",
  },
  {
    title: "Coffee Shop POS System",
    description: "Fast checkout, products, inventory, receipts, and sales reporting.",
    tags: ["Django", "SQLite", "POS"],
    type: "Business system",
    color: "#7ab09b",
  },
  {
    title: "CCTV Cloud Service",
    description: "Exploring IP/PTZ cameras, RTSP streams, device management, and remote viewing.",
    tags: ["Django", "RTSP", "Networking"],
    type: "IT / IoT",
    color: "#76a9dc",
  },
  {
    title: "Secure Account Portal",
    description: "Role-based access, account workflows, protected pages, and transaction concepts.",
    tags: ["Next.js", "Oracle", "Security"],
    type: "Learning lab",
    color: "#a09bd9",
  },
];

const experience = [
  {
    year: "2023 – Present",
    title: "IT Support / Network & CCTV",
    description: "Router, Wi-Fi, Hikvision, PoE, NVR/DVR, and IP camera solutions.",
    note: "Replace with your exact job title and responsibilities.",
  },
  {
    year: "2021 – 2023",
    title: "Web Development Practice",
    description: "Web applications, databases, APIs, and client-support workflows.",
    note: "Add verified freelance or project experience here.",
  },
  {
    year: "Current",
    title: "Software Engineering Projects",
    description: "Building full-stack applications and improving secure coding skills.",
    note: "Learning through hands-on implementation.",
  },
];

const education = [
  {
    year: "2022 – 2026",
    title: "Applied Communication (ES106)",
    description: "Workplace communication",
    note: "Update dates and qualification as appropriate.",
  },
  {
    year: "In progress",
    title: "Software Engineering",
    description: "Full-stack development and system design",
    note: "Add your institution, degree, and expected graduation.",
  },
];

function SectionHeading({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="section-title">
      <div className="title-left">
        <span className="title-icon" aria-hidden="true">{icon}</span>
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function Timeline({ items }: { items: typeof experience }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div className="timeline-item" key={item.title}>
          <div className="timeline-year">{item.year}</div>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <small>{item.note}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const navRef = useRef<HTMLElement>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveLink(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("click", closeOnOutsideClick);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("click", closeOnOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header className="nav-wrap container" ref={navRef}>
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-core">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">SR</span>
            <span>Samrith Ratana</span>
          </a>
          <div className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
            {navLinks.map((link) => (
              <a
                className={activeLink === link.href.slice(1) ? "active" : ""}
                href={link.href}
                key={link.name}
                aria-current={activeLink === link.href.slice(1) ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="nav-actions">
          <button
            className="icon-button"
            type="button"
            aria-label={isDark ? "Switch to light appearance" : "Switch to dark appearance"}
            title="Toggle light/dark appearance"
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
          </button>
          <a className="icon-button email-button" href="mailto:your.email@example.com" aria-label="Email Samrith" title="Email Samrith">
            <Mail size={16} aria-hidden="true" />
          </a>
          <a className="download-button" href="#contact" aria-label="Contact Samrith about a CV">
            <Download size={14} aria-hidden="true" /> <span className="download-label">Download CV</span><span className="mobile-download-icon" aria-hidden="true">↓</span> <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <button
            className={`menu-button${menuOpen ? " is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="navLinks"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container">
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="pill">Hello, I&apos;m</span>
              <h1>Samrith Ratana</h1>
              <p className="role">Full Stack Developer &amp; IT Solutions Specialist</p>
              <p className="hero-desc">I build modern web applications, secure systems, and smart IT solutions. Passionate about technology, networking, CCTV, and creating real value.</p>
              <div className="socials">
                <a href="https://github.com/samrith-ratana" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
                <a href="https://www.linkedin.com/in/samrith-ratana" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
                <a href="mailto:your.email@example.com" aria-label="Email"><Mail size={17} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="hero-art">
              <div className="orb">
                <Image
                  src="/profile.png"
                  alt="Samrith Ratana"
                  fill
                  priority
                  sizes="(max-width: 680px) 160px, 246px"
                  className="profile-photo"
                />
              </div>
              <div className="float-card"><span className="online-dot" />Available for<b>new opportunities</b></div>
            </div>
          </div>
          <div className="stats">
            <div className="stat glass"><span className="stat-icon"><Code2 size={18} /></span><div><strong>5+</strong><small>Projects in progress</small></div></div>
            <div className="stat glass"><span className="stat-icon"><BriefcaseBusiness size={18} /></span><div><strong>2+</strong><small>Years of learning</small></div></div>
            <div className="stat glass"><span className="stat-icon"><span aria-hidden="true">✦</span></span><div><strong>Always</strong><small>Learning &amp; improving</small></div></div>
            <div className="stat glass"><span className="stat-icon"><Check size={18} /></span><div><strong>100%</strong><small>Committed to quality</small></div></div>
          </div>
        </section>

        <section id="about">
          <div className="section-card glass">
            <div className="section-title">
              <div className="title-left"><span className="title-icon"><Monitor size={17} /></span><div><h2>About Me</h2><p>A little about what I do</p></div></div>
              <a className="mini-link" href="#experience">My journey <ArrowUpRight size={14} /></a>
            </div>
            <div className="about-grid">
              <div className="about-copy"><p>I am a dedicated developer with an interest in web development, backend systems, networking, and CCTV solutions. I enjoy solving real-world problems, learning new technologies, and building products that make life easier and more secure.</p><a className="soft-button" href="#projects">Explore my work <ArrowRight size={15} /></a></div>
              <div className="vision"><div className="apple-mark">✧</div><h3>My Vision</h3><p>“Bring quality of product and care.”</p></div>
              <div className="contact-mini">
                <div className="contact-line"><span className="small-icon"><MapPin size={14} /></span><span>Cambodia</span></div>
                <div className="contact-line"><span className="small-icon"><Mail size={14} /></span><a href="mailto:your.email@example.com">your.email@example.com</a></div>
                <div className="contact-line"><span className="small-icon"><SocialMark network="github" size={14} /></span><a href="https://github.com/samrith-ratana" target="_blank" rel="noreferrer">github.com/samrith-ratana</a></div>
                <div className="contact-line"><span className="small-icon"><Database size={14} /></span><span>Open to remote / onsite</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="section-card glass">
            <SectionHeading icon={<Terminal size={17} />} title="Skills & Technologies" subtitle="Tools I use and continue to learn" />
            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-chip" key={skill.name}>
                  <span className="skill-logo"><img src={`/skills/${skill.icon}.svg`} alt="" /></span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="section-card glass">
            <div className="section-title">
              <div className="title-left"><span className="title-icon"><Code2 size={17} /></span><div><h2>Featured Projects</h2><p>Selected concepts and portfolio work</p></div></div>
              <a className="mini-link" href="https://github.com/samrith-ratana" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={14} /></a>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project" key={project.title}>
                  <div className="project-art"><div className="mock-window"><div className="mock-bar"><i /><i /><i /></div><div className="mock-lines"><i style={{ width: "58%", height: 9, background: project.color }} /><i /><i /></div><div className="mock-tiles"><i /><i /><i /></div></div></div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <div className="project-bottom"><span className="project-tags"><span>{project.type}</span></span><a href="#contact" aria-label={`Ask about ${project.title}`}><ExternalLink size={13} /></a></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="timeline-grid">
            <div className="section-card glass">
              <SectionHeading icon={<BriefcaseBusiness size={17} />} title="Experience" subtitle="Professional and practical experience" />
              <Timeline items={experience} />
            </div>
            <div className="section-card glass education-card">
              <SectionHeading icon={<GraduationCap size={17} />} title="Education" subtitle="Academic background" />
              <Timeline items={education} />
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="section-card glass contact-panel">
            <div><div className="title-left"><span className="title-icon"><Mail size={17} /></span><div><h2>Get In Touch</h2><p>Have a project, an idea, or an opportunity?</p></div></div><p>Feel free to reach out about collaboration, software projects, or IT solutions.</p></div>
            <div className="contact-actions">
              <a href="mailto:your.email@example.com"><Mail size={14} /> Send Email</a>
              <a href="https://github.com/samrith-ratana" target="_blank" rel="noreferrer"><SocialMark network="github" size={14} /> GitHub</a>
              <a href="https://www.linkedin.com/in/samrith-ratana" target="_blank" rel="noreferrer"><span className="linkedin-mark">in</span> LinkedIn</a>
              <a className="primary" href="mailto:your.email@example.com?subject=Let%27s%20work%20together">Let&apos;s Work Together <ArrowRight size={14} /></a>
            </div>
          </div>
        </section>
        <footer><div className="footer-line" />© {new Date().getFullYear()} Samrith Ratana. All rights reserved.</footer>
      </main>
    </>
  );
}
