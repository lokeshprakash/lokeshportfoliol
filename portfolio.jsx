import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  SiGmail,
  SiInstagram,
} from "react-icons/si";
import {
  FaLinkedinIn,
} from "react-icons/fa6";
import {
  Menu,
  X,
  ArrowUp,
  Mail,
  ExternalLink,
  Sun,
  Moon,
  User,
  Layers,
  Trophy,
  Rocket,
  Briefcase,
  GraduationCap,
  Users,
  Brain,
  Sprout,
  Compass,
  Share2,
  TrendingUp,
  Code2,
  Table2,
  Sigma,
  Coffee,
  Cpu,
  Database,
  Leaf,
  FileSpreadsheet,
  Quote,
  Calendar,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA — single source of truth, easy to edit later                  */
/* ------------------------------------------------------------------ */

const portfolioData = {
  name: "Lokesh S",
  role: "Artificial Intelligence and Data Science Student",
  about: {
    paragraphs: [
      "Hi, I'm Lokesh S., a B.Tech student specializing in Artificial Intelligence and Data Science at Rajalakshmi Engineering College, Chennai.",
      "I'm passionate about Artificial Intelligence, Machine Learning, Data Science, and software development. I enjoy turning ideas into practical projects and exploring how technology can solve real-world problems.",
      "I have worked on several projects and hackathons, including AI-powered systems, smart parking solutions, civic technology, and Bitcoin transaction monitoring using Machine Learning. These experiences have helped me develop skills in Python, Java, C, SQL, Pandas, NumPy, Machine Learning, and AI-based problem solving.",
      "Hackathons have played an important role in my learning journey. I enjoy working in teams, taking responsibility, solving problems under pressure, and learning from every experience — even when the result isn't what I expected.",
      "Recently, I also reached the finals of the ZEAI hackathon, which gave me valuable experience in building and presenting an AI-based solution.",
    ],
  },
  stats: [
    { label: "B.Tech — AI & Data Science", icon: "GraduationCap" },
    { label: "5 Hackathons", icon: "Rocket" },
    { label: "Team Leadership", icon: "Users" },
    { label: "ML Experience", icon: "Brain" },
  ],
  skills: [
    { name: "Python", icon: "Code2" },
    { name: "Pandas", icon: "Table2" },
    { name: "NumPy", icon: "Sigma" },
    { name: "Java", icon: "Coffee" },
    { name: "C", icon: "Cpu" },
    { name: "SQL", icon: "Database" },
    { name: "MongoDB", icon: "Leaf" },
    { name: "Microsoft Excel", icon: "FileSpreadsheet" },
  ],
  hackathons: [
    {
      title: "Spark Tank",
      stage: "Beginner",
      icon: "Sprout",
      points: ["Smart Parking System", "IoT Sensors"],
      description:
        "My hackathon journey started here, with zero hackathon experience. My team developed a Smart Parking System using IoT sensors. Although we didn't win, it taught me the basics of teamwork, problem-solving, pitching, and learning from failure.",
    },
    {
      title: "Smart Ability",
      stage: "Developer",
      icon: "Compass",
      points: ["Real-world problem solving", "Practical solutions"],
      description:
        "Here I learned to identify real-world problems, build practical solutions, and present ideas with more confidence.",
    },
    {
      title: "Phoenix Hackathon",
      stage: "Developer",
      icon: "Share2",
      points: ["ARAM", "AI-powered civic governance", "Multi-agent systems"],
      description:
        "I worked on ARAM, an AI-powered civic governance platform. This helped me explore AI, multi-agent systems, and civic technology while improving my teamwork and project-building skills.",
    },
    {
      title: "ZEAI Hackathon",
      stage: "Team Leader",
      icon: "Users",
      points: ["Team Hustlers", "Team Lead", "AI solution"],
      description:
        "I took on the role of Team Lead with Team Hustlers. I gained more confidence in planning, development, pitching, and leading a team, and reached the finals.",
    },
    {
      title: "Smart India Hackathon",
      stage: "ML Contributor",
      icon: "TrendingUp",
      points: ["NTRO", "Bitcoin Transaction Monitoring", "Isolation Forest", "XGBoost"],
      description:
        "I worked on an AI-powered Bitcoin Transaction Monitoring System for NTRO. As part of the ML team, I worked with Isolation Forest and XGBoost for anomaly detection.",
    },
  ],
  hackathonClosing:
    "Each hackathon helped me grow — from having zero experience to building, leading, and solving real-world problems using AI/ML.",
  hackathonQuote:
    "The journey is not about winning every time; it's about becoming better every time.",
  hackathonFooterNote:
    "I may not have won every hackathon, but every failure gave me experience, every project taught me something new, and every competition made me better.",
  experience: [
    {
      org: "Confederation of Indian Industry (CII) — Southern Region",
      title: "Internship",
      duration: "15-Day Internship",
      current: false,
      points: [
        "Gained practical exposure to the IT industry and corporate work environment.",
        "Developed an understanding of organizational operations and professional workflows.",
        "Strengthened communication, teamwork, and professional skills through workplace interactions.",
      ],
    },
    {
      org: "ARQ Club — Rajalakshmi Engineering College",
      title: "Cloud Computing Associate",
      duration: "Currently Working",
      current: true,
      points: [],
    },
  ],
  contact: {
    message:
      "Interested in collaborating, discussing technology, or connecting professionally? Feel free to reach out.",
    email: "lokeshsivaprakash5@gmail.com",
  },
  social: {
    instagram: "https://www.instagram.com/lokesh_2k25?stkn=dWFkcmFia2kxanc1",
    linkedin: "https://www.linkedin.com/in/lokesh-sivaprakash-55160035a",
  },
  footerYear: 2026,
};

const iconMap = {
  GraduationCap,
  Trophy,
  Rocket,
  Users,
  Brain,
  Sprout,
  Compass,
  Share2,
  TrendingUp,
  Code2,
  Table2,
  Sigma,
  Coffee,
  Cpu,
  Database,
  Leaf,
  FileSpreadsheet,
};

const navItems = [
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "hackathons", label: "Hackathons", icon: Trophy },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];

/* ------------------------------------------------------------------ */
/*  THEME TOKENS                                                       */
/* ------------------------------------------------------------------ */

function getTheme(isDark) {
  return isDark
    ? {
      page: "bg-slate-950 text-slate-100",
      navBg: "bg-slate-950/80 border-slate-800",
      navActive: "text-cyan-300",
      navInactive: "text-slate-400 hover:text-slate-100",
      surface: "bg-slate-900/60 border-slate-800",
      surfaceAlt: "bg-slate-900/40 border-slate-800",
      textPrimary: "text-slate-100",
      textSecondary: "text-slate-400",
      textMuted: "text-slate-500",
      border: "border-slate-800",
      chip: "bg-slate-900/70 border-slate-800 hover:border-cyan-800",
      badgeText: "text-slate-200",
      iconWrap: "bg-slate-800/80",
      footerBg: "bg-slate-950 border-slate-800",
      toggleBg: "bg-slate-800 hover:bg-slate-700",
    }
    : {
      page: "bg-white text-slate-900",
      navBg: "bg-white/85 border-slate-200",
      navActive: "text-indigo-600",
      navInactive: "text-slate-500 hover:text-slate-900",
      surface: "bg-white border-slate-200",
      surfaceAlt: "bg-slate-50 border-slate-200",
      textPrimary: "text-slate-900",
      textSecondary: "text-slate-600",
      textMuted: "text-slate-500",
      border: "border-slate-200",
      chip: "bg-white border-slate-200 hover:border-indigo-300",
      badgeText: "text-slate-700",
      iconWrap: "bg-slate-100",
      footerBg: "bg-white border-slate-200",
      toggleBg: "bg-slate-200 hover:bg-slate-300",
    };
}

/* ------------------------------------------------------------------ */
/*  SCROLL-REVEAL HOOK                                                  */
/* ------------------------------------------------------------------ */

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        } ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  NODE NETWORK GRAPHIC (single deliberate motion moment)             */
/* ------------------------------------------------------------------ */

function NodeNetwork({ isDark }) {
  const nodes = [
    { x: 40, y: 40 }, { x: 140, y: 30 }, { x: 230, y: 70 },
    { x: 70, y: 130 }, { x: 180, y: 150 }, { x: 260, y: 190 },
    { x: 30, y: 220 }, { x: 150, y: 240 },
  ];
  const edges = [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 4], [3, 4], [3, 6], [4, 5], [4, 7], [6, 7],
  ];
  const lineColor = isDark ? "#334155" : "#CBD5E1";
  const nodeColor = isDark ? "#22D3EE" : "#6366F1";

  return (
    <svg
      viewBox="0 0 300 280"
      className="w-full h-full"
      role="img"
      aria-label="Decorative network graphic representing AI and machine learning"
    >
      <style>{`
        @keyframes nodePulse {
          0%, 100% { opacity: 0.55; r: 4; }
          50% { opacity: 1; r: 6; }
        }
        .node-pulse { animation: nodePulse 3.4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .node-pulse { animation: none; opacity: 0.9; }
        }
      `}</style>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke={lineColor}
          strokeWidth="1"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="4"
          fill={nodeColor}
          className="node-pulse"
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  NAVBAR                                                              */
/* ------------------------------------------------------------------ */

function Navbar({ t, isDark, toggleTheme, activeSection, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b ${t.navBg}`}>
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => handleClick("top")}
          className={`font-semibold tracking-tight text-lg ${t.textPrimary} focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded`}
          aria-label="Scroll to top"
        >
          {portfolioData.name}
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${active ? t.navActive : t.navInactive
                  }`}
                aria-current={active ? "true" : undefined}
              >
                <Icon size={15} aria-hidden="true" />
                {item.label}
              </button>
            );
          })}
          <button
            onClick={toggleTheme}
            className={`ml-2 p-2 rounded-md ${t.toggleBg} transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400`}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-md ${t.toggleBg} transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400`}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className={`p-2 rounded-md ${t.toggleBg} transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className={`md:hidden border-t ${t.border} ${t.navBg} backdrop-blur-md`}>
          <div className="flex flex-col px-5 py-3 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-left transition-colors ${active ? t.navActive : t.navInactive
                    }`}
                >
                  <Icon size={18} aria-hidden="true" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  ABOUT                                                               */
/* ------------------------------------------------------------------ */

function About({ t, isDark }) {
  return (
    <section id="about" className="pt-28 pb-20 px-5 sm:px-8 max-w-6xl mx-auto scroll-mt-16">
      <Reveal className="mb-8">
        <h1 className="sr-only">{portfolioData.name} — {portfolioData.role}</h1>
        <p className={`text-sm font-medium ${t.textMuted}`}>{portfolioData.role}</p>
      </Reveal>

      <div className="grid md:grid-cols-5 gap-10 items-start">
        <Reveal className="md:col-span-3">
          <div className={`space-y-4 leading-relaxed ${t.textSecondary} max-w-prose`}>
            {portfolioData.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="md:col-span-2">
          <div className={`rounded-2xl border ${t.surface} p-5 mb-5 h-56 flex items-center justify-center overflow-hidden`}>
            <div className="w-full h-full max-w-xs">
              <NodeNetwork isDark={isDark} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {portfolioData.stats.map((stat, i) => {
              const Icon = iconMap[stat.icon];
              return (
                <div key={i} className={`rounded-xl border ${t.surfaceAlt} p-4 flex flex-col gap-2`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${t.iconWrap}`}>
                    <Icon size={16} className="text-cyan-400" aria-hidden="true" />
                  </div>
                  <span className={`text-sm font-medium ${t.textPrimary}`}>{stat.label}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SKILLS                                                              */
/* ------------------------------------------------------------------ */

function Skills({ t }) {
  return (
    <section id="skills" className="py-20 px-5 sm:px-8 max-w-6xl mx-auto scroll-mt-16">
      <Reveal>
        <h2 className={`text-2xl sm:text-3xl font-semibold tracking-tight ${t.textPrimary} mb-10`}>
          Technical Skills
        </h2>
      </Reveal>
      <Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {portfolioData.skills.map((skill, i) => {
            const Icon = iconMap[skill.icon];
            return (
              <div
                key={i}
                className={`group rounded-xl border ${t.chip} p-5 flex flex-col items-center gap-3 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${t.iconWrap} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={20} className="text-cyan-400" aria-hidden="true" />
                </div>
                <span className={`text-sm font-medium ${t.badgeText}`}>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  HACKATHON JOURNEY (timeline)                                       */
/* ------------------------------------------------------------------ */

function HackathonJourney({ t, isDark }) {
  const progressionTints = isDark
    ? ["bg-slate-700", "bg-slate-600", "bg-indigo-700", "bg-indigo-500", "bg-cyan-400"]
    : ["bg-slate-300", "bg-slate-400", "bg-indigo-300", "bg-indigo-500", "bg-cyan-500"];

  return (
    <section id="hackathons" className="py-20 px-5 sm:px-8 max-w-6xl mx-auto scroll-mt-16">
      <Reveal>
        <h2 className={`text-2xl sm:text-3xl font-semibold tracking-tight ${t.textPrimary} mb-3`}>
          My Hackathon Journey
        </h2>
        <p className={`text-sm ${t.textMuted} mb-12`}>Spark Tank → Smart Ability → Phoenix → ZEAI → SIH</p>
      </Reveal>

      <div className="relative">
        <div
          className={`absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b ${isDark ? "from-slate-700 via-indigo-600 to-cyan-400" : "from-slate-300 via-indigo-400 to-cyan-500"
            }`}
          aria-hidden="true"
        />
        <ol className="space-y-10">
          {portfolioData.hackathons.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <li key={i}>
                <Reveal>
                  <div className="flex gap-5">
                    <div
                      className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${progressionTints[i]}`}
                    >
                      <Icon size={17} className={isDark ? "text-slate-100" : "text-white"} aria-hidden="true" />
                    </div>
                    <div className={`flex-1 rounded-2xl border ${t.surface} p-5 sm:p-6`}>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                        <h3 className={`text-lg font-semibold ${t.textPrimary}`}>{item.title}</h3>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${t.border} ${t.textMuted}`}>
                          {item.stage}
                        </span>
                      </div>
                      <p className={`text-sm leading-relaxed ${t.textSecondary} mb-3 max-w-prose`}>
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.points.map((point, j) => (
                          <span
                            key={j}
                            className={`text-xs px-2.5 py-1 rounded-md ${t.surfaceAlt} border ${t.border} ${t.textSecondary}`}
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>

      <Reveal className="mt-14 max-w-2xl">
        <p className={`text-base leading-relaxed ${t.textSecondary} mb-8`}>{portfolioData.hackathonClosing}</p>
        <blockquote className={`border-l-2 ${isDark ? "border-cyan-400" : "border-indigo-500"} pl-5`}>
          <Quote size={20} className={isDark ? "text-cyan-400 mb-2" : "text-indigo-500 mb-2"} aria-hidden="true" />
          <p className={`text-xl sm:text-2xl font-medium ${t.textPrimary} leading-snug`}>
            {portfolioData.hackathonQuote}
          </p>
        </blockquote>
        <p className={`text-sm leading-relaxed ${t.textMuted} mt-6`}>{portfolioData.hackathonFooterNote}</p>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  EXPERIENCE                                                          */
/* ------------------------------------------------------------------ */

function Experience({ t }) {
  return (
    <section id="experience" className="py-20 px-5 sm:px-8 max-w-6xl mx-auto scroll-mt-16">
      <Reveal>
        <h2 className={`text-2xl sm:text-3xl font-semibold tracking-tight ${t.textPrimary} mb-10`}>
          Experience
        </h2>
      </Reveal>
      <div className="space-y-5 max-w-3xl">
        {portfolioData.experience.map((job, i) => (
          <Reveal key={i}>
            <div className={`rounded-2xl border ${t.surface} p-6 flex gap-4`}>
              <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${t.iconWrap}`}>
                <Briefcase size={18} className="text-cyan-400" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className={`text-base font-semibold ${t.textPrimary}`}>{job.title}</h3>
                  <span
                    className={`flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${job.current
                      ? isDarkBadge(t)
                      : `${t.surfaceAlt} border ${t.border} ${t.textMuted}`
                      }`}
                  >
                    <Calendar size={12} aria-hidden="true" />
                    {job.duration}
                  </span>
                </div>
                <p className={`text-sm ${t.textMuted} mb-3`}>{job.org}</p>
                {job.points.length > 0 && (
                  <ul className={`space-y-1.5 text-sm leading-relaxed ${t.textSecondary} list-disc pl-4`}>
                    {job.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                )}
                {job.current && job.points.length === 0 && (
                  <p className={`text-sm italic ${t.textMuted}`}>More details coming soon.</p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function isDarkBadge(t) {
  return t.page.includes("slate-950")
    ? "bg-cyan-500/15 text-cyan-300"
    : "bg-indigo-50 text-indigo-600";
}

/* ------------------------------------------------------------------ */
/*  CONTACT                                                             */
/* ------------------------------------------------------------------ */

function Contact({ t }) {
  const { message, email } = portfolioData.contact;
  return (
    <section id="contact" className="py-24 px-5 sm:px-8 max-w-6xl mx-auto scroll-mt-16">
      <Reveal className="max-w-xl">
        <h2 className={`text-2xl sm:text-3xl font-semibold tracking-tight ${t.textPrimary} mb-3`}>
          Let's Connect
        </h2>
        <p className={`text-base leading-relaxed ${t.textSecondary} mb-8`}>{message}</p>

        <a
          href={`mailto:${email}`}
          className={`group inline-flex items-center gap-3 rounded-xl border ${t.chip} px-5 py-4 text-base font-medium ${t.textPrimary} transition-all hover:-translate-y-0.5 hover:shadow-lg mb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400`}
          aria-label={`Send an email to ${email}`}
        >
          <SiGmail size={18} className="text-[#EA4335] shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
          <span>{email}</span>
        </a>

        <div className="flex items-center gap-3">
          <a
            href={portfolioData.social.instagram.startsWith("http") ? portfolioData.social.instagram : `https://instagram.com/${portfolioData.social.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Instagram profile (opens in a new tab)"
            className={`group w-11 h-11 rounded-lg border ${t.chip} flex items-center justify-center transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-[#E4405F]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400`}
          >
            <SiInstagram size={18} className={`${t.textSecondary} transition-colors group-hover:text-[#E4405F]`} aria-hidden="true" />
          </a>
          <a
            href={portfolioData.social.linkedin.startsWith("http") ? portfolioData.social.linkedin : `https://linkedin.com/in/${portfolioData.social.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile (opens in a new tab)"
            className={`group w-11 h-11 rounded-lg border ${t.chip} flex items-center justify-center transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-[#0A66C2]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400`}
          >
            <FaLinkedinIn size={18} className={`${t.textSecondary} transition-colors group-hover:text-[#0A66C2]`} aria-hidden="true" />
          </a>
          <span className={`text-xs ${t.textMuted} flex items-center gap-1`}>
            <ExternalLink size={12} aria-hidden="true" />
            opens in a new tab
          </span>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                              */
/* ------------------------------------------------------------------ */

function Footer({ t, onBackToTop }) {
  return (
    <footer className={`border-t ${t.footerBg} py-8 px-5 sm:px-8`}>
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className={`text-sm ${t.textMuted}`}>
          © {portfolioData.footerYear} {portfolioData.name}. All rights reserved.
        </p>
        <button
          onClick={onBackToTop}
          className={`flex items-center gap-1.5 text-sm font-medium ${t.textSecondary} hover:${t.textPrimary} transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-2 py-1`}
        >
          <ArrowUp size={14} aria-hidden="true" />
          Back to top
        </button>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  APP                                                                 */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  const sectionIds = ["about", "skills", "hackathons", "experience", "contact"];
  const t = getTheme(isDark);

  const scrollTo = useCallback((id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen ${t.page} transition-colors duration-300`}>
      <Navbar
        t={t}
        isDark={isDark}
        toggleTheme={() => setIsDark((d) => !d)}
        activeSection={activeSection}
        onNavigate={scrollTo}
      />
      <main>
        <About t={t} isDark={isDark} />
        <Skills t={t} />
        <HackathonJourney t={t} isDark={isDark} />
        <Experience t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} onBackToTop={() => scrollTo("top")} />
    </div>
  );
}
