const navLinks = [
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const resumeUrl = "/Resume%20-%20Matteo%20Coffman.pdf";

const stats = [
  { label: "Professional experience", value: "1.5 yrs" },
  { label: "Active builds", value: "FretNot · Fyte · ApplyTrack" },
  { label: "Core stack", value: "TypeScript · React · Expo · AWS" },
];

const experience = [
  {
    role: "Junior Software Developer",
    company: "Call Box",
    period: "May 2024 — Present · Remote (Dallas-based)",
    summary:
      "Modernizing Humanatic 2.0 and AI-driven call handling products with TypeScript across AWS Lambda, DynamoDB, and containerized services on Azure.",
    highlights: [
      "Migrated legacy ColdFusion/Vue flows to scalable TypeScript services.",
      "Shipped hybrid frontend features for Car Wars across ColdFusion + Vue.",
      "Enhanced CARI, the AI phone assistant, focusing on automated scheduling.",
      "Queried sensitive lead data via SQL Server & DynamoDB with guardrails.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Charter Communications · Spectrum Enterprise",
    period: "May 2023 — Aug 2023 · Austin, TX",
    summary:
      "Built responsive React interfaces for Crosswalk using Spectrum's Kite library while collaborating closely with designers in Figma/InVision.",
    highlights: [
      "Implemented reusable SCSS components that shipped to pilot customers.",
      "Partnered with PMs in JIRA/JQL to scope workload for the React squad.",
      "Documented UI decisions to accelerate hand-offs between design + eng.",
    ],
  },
];

const education = {
  school: "Texas State University",
  degree: "B.A. in Computer Science · Minor in Applied Mathematics",
  period: "San Marcos, TX · December 2023",
  details:
    "Coursework: Data Structures, OOP, Software Engineering, Database Systems, Human Factors, Architecture, Assembly.",
};

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Vue.js",
  "Next.js",
  "Python",
  "SQL / DynamoDB",
  "AWS (Lambda, DynamoDB, Cognito, CloudWatch)",
  "Azure & Docker",
  "Git/GitHub & JIRA",
];

const projects = [
  {
    title: "FretNot · Guitar Theory Companion",
    description:
      "Rebuilt my college fretboard tool into a production-ready Vite app with a maple-inspired UI, chord sketcher, and live tonal.js detection augmented by custom interval heuristics so guitar voicings get context-aware naming (e.g., Am11 shells).",
    impact:
      "Launched on Vercel so recruiters and students can explore voicings without cloning a repo; added ranking logic that mirrors Oolimo results and dedupes chord aliases, plus a roadmap for audio + alternate tunings.",
    stack: ["React", "TypeScript", "Vite", "@tonaljs/tonal", "Vercel"],
    links: [
      { label: "Launch app", href: "https://fret-not.vercel.app" },
      { label: "View repo", href: "https://github.com/MatteoCoffman/FretNot" },
    ],
  },
  {
    title: "Fyte · UFC Odds Companion",
    description:
      "Expo/React Native app that pulls live fight odds from The Odds API, filters by sportsbook, and opens bet tickets with modal calculators for stake/return math.",
    impact:
      "Replaced spreadsheet workflows for friends who track parlays—bets persist locally, bookmaker filtering speeds scanning, and calculator logic translates American odds for casual bettors.",
    stack: ["Expo", "React Native", "React Navigation", "The Odds API"],
  },
  {
    title: "ApplyTrack · Job Application Pipeline",
    description:
      "Kanban-style job tracker with Cognito sign-up, a JWT-secured serverless API, and per-user DynamoDB storage—users move applications across Saved, Applied, Interview, Offer, and Rejected columns.",
    impact:
      "Deployed on Vercel with AWS SAM backend so anyone can create an account and track applications across devices; built to mirror the TypeScript + Lambda + DynamoDB patterns from my Call Box work.",
    stack: [
      "Next.js",
      "TypeScript",
      "Amazon Cognito",
      "AWS Lambda",
      "DynamoDB",
      "API Gateway",
      "SAM",
    ],
    links: [
      { label: "Launch app", href: "https://applytrack-flame.vercel.app" },
      { label: "View repo", href: "https://github.com/MatteoCoffman/applytrack" },
    ],
  },
];

const contact = [
  { label: "Email", value: "matteo.coffman@gmail.com", href: "mailto:matteo.coffman@gmail.com" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/matteo-coffman-8114a8222",
    href: "https://www.linkedin.com/in/matteo-coffman-8114a8222/",
  },
  { label: "GitHub", value: "github.com/MatteoCoffman", href: "https://github.com/MatteoCoffman" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-slate-100">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-blue-500/25 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-400/20 blur-[180px]" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/5 bg-[#030712]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Portfolio</p>
            <p className="text-lg font-semibold text-slate-100">Matteo Coffman</p>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="transition hover:text-white"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-blue-500/70 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
          >
            View resume (PDF)
          </a>
        </div>
        <div className="flex justify-center gap-4 border-t border-white/5 px-6 py-3 text-xs text-slate-400 md:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="font-semibold text-blue-200">
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <main className="relative mx-auto flex max-w-5xl flex-col gap-24 px-6 py-16">
        <section id="about" className="grid gap-10 md:grid-cols-[2fr,1fr] md:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-blue-200">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px] shadow-blue-400 animate-pulse" />
              Based in Austin, TX · Open to remote roles
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                Full-stack web developer building modern voice + AI tooling.
              </h1>
              <p className="text-lg text-slate-300">
                I keep TypeScript at the center—pairing React, AWS Lambda, and data work in SQL/DynamoDB to
                modernize call intelligence products. Currently shipping features for Humanatic 2.0, Car Wars,
                and CARI at Call Box. Nights and weekends I’m leveling up personal builds like FretNot, ApplyTrack, and
                Fyte to showcase full-stack craft.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 transition hover:-translate-y-0.5"
              >
                View resume (PDF)
              </a>
              <a
                href="mailto:matteo.coffman@gmail.com?subject=Let%27s%20build%20something"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400 hover:text-white"
              >
                Email Matteo
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-200">Snapshot</p>
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li>→ Austin-based; remote friendly</li>
              <li>→ TypeScript-first full-stack developer</li>
              <li>→ Shipping voice + AI features at Call Box</li>
            </ul>
          </div>
        </section>

        <section
          aria-label="Key stats"
          className="grid gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/60 p-8 md:grid-cols-3"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1 border-l border-white/10 pl-6">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="text-sm uppercase tracking-wide text-slate-400">{stat.label}</p>
            </div>
          ))}
        </section>

        <section id="resume" className="space-y-10">
          <header className="space-y-3">
            <p className="text-sm uppercase tracking-[0.4em] text-blue-200">Resume</p>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 className="text-3xl font-semibold text-white">Experience &amp; expertise</h2>
              <p className="text-sm text-slate-400">
                Currently shipping across Humanatic 2.0, Car Wars, and internal tooling. Always iterating.
              </p>
            </div>
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            {experience.map((item) => (
              <article
                key={item.company}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.period}</p>
                  <h3 className="text-xl font-semibold text-white">
                    {item.role} · <span className="text-blue-200">{item.company}</span>
                  </h3>
                  <p className="text-sm text-slate-300">{item.summary}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-[1.3fr,0.8fr]">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Education</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{education.school}</h3>
              <p className="mt-1 text-blue-200">{education.degree}</p>
              <p className="text-sm text-slate-400">{education.period}</p>
              <p className="mt-4 text-sm text-slate-300">{education.details}</p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-blue-800/20 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-200">Capabilities</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 transition hover:-translate-y-0.5"
            >
              View PDF resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400 hover:text-white"
            >
              Book an intro call
            </a>
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <header className="space-y-2">
            <p className="text-sm uppercase tracking-[0.4em] text-blue-200">Selected work</p>
            <h2 className="text-3xl font-semibold text-white">Projects &amp; systems</h2>
          </header>
          <div className="space-y-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-400/60 hover:bg-white/10"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-blue-200">
                    {project.stack.map((tag) => (
                      <span key={tag} className="rounded-full border border-blue-300/40 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-slate-300">{project.description}</p>
                <p className="mt-3 text-sm text-slate-400">{project.impact}</p>
                {project.links && (
                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-blue-300/40 px-4 py-2 font-semibold text-blue-100 transition hover:border-blue-200 hover:text-white"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/70 to-blue-900/30 p-8">
          <header className="space-y-3">
            <p className="text-sm uppercase tracking-[0.4em] text-blue-200">Contact</p>
            <h2 className="text-3xl font-semibold text-white">Let&apos;s build together</h2>
            <p className="text-slate-300">
              Open to web developer roles where TypeScript, AWS, voice, or AI-assisted customer experience are
              at the core. Reach out for full-time, contract, or collaboration ideas.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {contact.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-blue-400/60"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
