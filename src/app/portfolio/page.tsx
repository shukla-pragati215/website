"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Captor",
    url: "https://captor.in",
    category: "Performance Marketing",
    tagline: "Conversion engines that never sleep.",
    description: "High-impact performance marketing delivering cinematic conversion engines that transform clicks into customers at scale.",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    accentHex: "#f59e0b",
    number: "01",
    stats: { metric: "340%", label: "ROI" },
    year: "2025",
  },
  {
    name: "Growora",
    url: "https://growora.com",
    category: "Growth Engineering",
    tagline: "Scale without limits.",
    description: "Intelligent scaling architectures that automate acquisition funnels and maximize lifetime value at unprecedented speed.",
    gradient: "from-blue-400 via-indigo-500 to-violet-600",
    accentHex: "#818cf8",
    number: "02",
    stats: { metric: "10x", label: "Growth" },
    year: "2025",
  },
  {
    name: "Obsidian Velvet",
    url: "https://obsidianvelvet.in",
    category: "Luxury Branding",
    tagline: "Where elegance meets digital.",
    description: "Ultra-premium branding and bespoke aesthetics crafted for the world's most elite digital experiences.",
    gradient: "from-purple-400 via-pink-500 to-rose-500",
    accentHex: "#c084fc",
    number: "03",
    stats: { metric: "98%", label: "Satisfaction" },
    year: "2024",
  },
  {
    name: "Enlightened Magic",
    url: "https://enlightenedmagic.com",
    category: "The Mothership",
    tagline: "The engine behind the magic.",
    description: "The core creative engine powering all digital manifestations — AI automation meets cinematic storytelling.",
    gradient: "from-amber-300 via-yellow-500 to-amber-600",
    accentHex: "#fbbf24",
    number: "04",
    stats: { metric: "∞", label: "Possibilities" },
    year: "2024",
  },
  {
    name: "Trueheal Global",
    url: "https://truehealglobal.com",
    category: "Health Technology",
    tagline: "Healing through innovation.",
    description: "Enterprise healthcare technology connecting patients, providers, and data across a global digital ecosystem.",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    accentHex: "#34d399",
    number: "05",
    stats: { metric: "50K+", label: "Users" },
    year: "2025",
  },
];

/* ── Project Card ──────────────────────────────────────────── */
const ProjectCard = ({ project, index, isFeatured }: {
  project: typeof projects[0];
  index: number;
  isFeatured: boolean;
}) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.a
      ref={cardRef}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative block overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111111] transition-all duration-700 hover:border-white/[0.12] ${
        isFeatured ? "md:col-span-2 min-h-[380px]" : "min-h-[320px]"
      }`}
    >
      {isHovered && (
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none z-0"
          style={{
            x: springX, y: springY,
            translateX: "-50%", translateY: "-50%",
            background: `radial-gradient(circle, ${project.accentHex}15, transparent 70%)`,
          }}
        />
      )}

      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-sm`} />
      <div className="absolute inset-[1px] rounded-2xl bg-[#111111] z-0" />

      <div className={`absolute ${isFeatured ? "top-4 right-6" : "top-3 right-5"} pointer-events-none z-10`}>
        <span className={`font-black tracking-tighter text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-700 ${
          isFeatured ? "text-[8rem] md:text-[12rem]" : "text-[7rem]"
        }`}>
          {project.number}
        </span>
      </div>

      <div className={`relative z-10 h-full flex flex-col justify-between ${isFeatured ? "p-8 md:p-10" : "p-7"}`}>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">{project.category}</span>
            </div>
            <span className="text-[10px] text-gray-600 tracking-widest uppercase font-mono">{project.year}</span>
          </div>
          <motion.div
            whileHover={{ rotate: 45, scale: 1.1 }}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-600 group-hover:border-white/30 group-hover:text-white transition-all duration-500"
          >
            <ArrowUpRight size={20} />
          </motion.div>
        </div>

        <div className={`flex-1 flex flex-col justify-end ${isFeatured ? "max-w-3xl" : ""}`}>
          <h2 className={`font-black tracking-tighter text-white leading-none mb-4 ${
            isFeatured ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"
          }`}>
            <span className="relative">
              {project.name}
              <motion.span
                className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r ${project.gradient} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: isHovered ? "100%" : 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </h2>
          <p className={`text-gray-500 italic font-light mb-4 group-hover:text-gray-400 transition-colors duration-500 ${
            isFeatured ? "text-xl" : "text-lg"
          }`}>
            &ldquo;{project.tagline}&rdquo;
          </p>
          <p className={`text-gray-600 leading-relaxed font-light group-hover:text-gray-500 transition-colors duration-500 max-w-xl ${
            isFeatured ? "text-base" : "text-sm"
          }`}>
            {project.description}
          </p>
        </div>

        <div className="flex items-end justify-between mt-8 pt-6 border-t border-white/[0.04]">
          <div className="flex items-baseline gap-2">
            <span className={`text-3xl font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
              {project.stats.metric}
            </span>
            <span className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">{project.stats.label}</span>
          </div>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Explore</span>
            <ExternalLink size={12} className="text-gray-500" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-[0.3] pointer-events-none z-[1] mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
        }}
      />
    </motion.a>
  );
};

/* ── Page ───────────────────────────────────────────────────── */
const PortfolioPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar />

      {/* Cinematic Hero */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-px bg-gradient-to-r from-amber-500 to-transparent"
            />
            <span className="text-amber-500 font-bold uppercase tracking-[0.5em] text-[10px]">
              Selected Work
            </span>
          </div>
          <h1 className="text-[6rem] md:text-[12rem] font-black tracking-tighter leading-[0.8] mb-10">
            The<br />
            <span className="text-gradient">Anthology.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="text-xl text-gray-500 max-w-xl leading-relaxed font-light">
              Every project is a universe. Each one built to perform, 
              designed to mesmerize, and engineered to scale.
            </p>
            <div className="flex items-center gap-8 text-gray-600">
              <div className="text-center">
                <span className="text-3xl font-black text-white block">5</span>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Projects</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <span className="text-3xl font-black text-white block">3</span>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Industries</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <span className="text-3xl font-black text-white block">∞</span>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Impact</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Marquee */}
      <div className="relative overflow-hidden py-6 border-y border-white/[0.04] mb-20">
        <motion.div
          animate={{ x: [0, -2400] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...projects, ...projects, ...projects].map((p, i) => (
            <span key={i} className="text-6xl md:text-8xl font-black tracking-tighter text-white/[0.03] select-none uppercase">
              {p.name}
              <span className="text-amber-500/10 ml-8">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Projects */}
      <section className="px-6 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              isFeatured={index === 0}
            />
          ))}
        </div>
      </section>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden"
        >
          {[
            { value: "5+", label: "Live Projects" },
            { value: "99%", label: "Client Retention" },
            { value: "10x", label: "Average Growth" },
            { value: "24/7", label: "AI Systems" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="bg-[#0f0f0f] p-8 md:p-10 text-center"
            >
              <h4 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">{stat.value}</h4>
              <p className="text-gray-600 text-[9px] font-bold uppercase tracking-[0.3em]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <section className="py-32 px-6 text-center border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <span className="text-amber-500 font-bold uppercase tracking-[0.5em] text-xs mb-8 block">
            Next Chapter //
          </span>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Ready to manifest<br />
            <span className="text-gradient">the magic?</span>
          </h2>
          <p className="text-gray-500 text-lg mb-12 max-w-xl mx-auto">
            Every project starts with a conversation. Let&apos;s turn your vision into the next case study.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-black text-lg hover:bg-amber-500 hover:text-white transition-all duration-500 shadow-[0_0_60px_rgba(255,255,255,0.08)]"
          >
            Start Your Project
            <ArrowUpRight size={22} className="group-hover:rotate-45 transition-transform duration-500" />
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 flex flex-col items-center gap-6">
        <img src="/logo.avif" alt="Enlightened Magic Logo" className="w-10 h-10 object-contain" />
        <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase">
          Enlightened Magic // 2026 Work Portfolio
        </p>
      </footer>
    </main>
  );
};

export default PortfolioPage;
