"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Play } from "lucide-react";

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

/* ── Marquee Component ─────────────────────────────────────── */
const Marquee = () => (
  <div className="relative overflow-hidden py-4 border-y border-white/[0.04] mb-14">
    <motion.div
      animate={{ x: [0, -2400] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex gap-16 whitespace-nowrap"
    >
      {[...projects, ...projects, ...projects].map((p, i) => (
        <span key={i} className="text-5xl md:text-6xl font-black tracking-tighter text-white/[0.03] select-none uppercase">
          {p.name}
          <span className="text-amber-500/10 ml-8">✦</span>
        </span>
      ))}
    </motion.div>
  </div>
);

/* ── Interactive Card with mouse-tracking glow ──────────────── */
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
      {/* Mouse-tracking radial glow */}
      {isHovered && (
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none z-0"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
            background: `radial-gradient(circle, ${project.accentHex}15, transparent 70%)`,
          }}
        />
      )}

      {/* Animated gradient border on hover */}
      <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-sm`} />
      <div className="absolute inset-[1px] rounded-[2rem] bg-[#111111] z-0" />

      {/* Large faded number */}
      <div className={`absolute ${isFeatured ? "top-4 right-6" : "top-3 right-5"} pointer-events-none z-10`}>
        <span className={`font-black tracking-tighter text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-700 ${
          isFeatured ? "text-[8rem] md:text-[12rem]" : "text-[7rem]"
        }`}>
          {project.number}
        </span>
      </div>

      {/* Content */}
      <div className={`relative z-10 h-full flex flex-col justify-between ${isFeatured ? "p-8 md:p-10" : "p-7"}`}>
        {/* Top */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
                {project.category}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-gray-600 tracking-widest uppercase font-mono">
                {project.year}
              </span>
            </div>
          </div>

          <motion.div
            whileHover={{ rotate: 45, scale: 1.1 }}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-600 group-hover:border-white/30 group-hover:text-white transition-all duration-500"
          >
            <ArrowUpRight size={20} />
          </motion.div>
        </div>

        {/* Middle */}
        <div className={`flex-1 flex flex-col justify-end ${isFeatured ? "max-w-3xl" : ""}`}>
          <h3 className={`font-black tracking-tighter text-white leading-none mb-3 ${
            isFeatured ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"
          }`}>
            <span className="relative">
              {project.name}
              {/* Underline animation on hover */}
              <motion.span
                className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r ${project.gradient} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: isHovered ? "100%" : 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </h3>
          <p className={`text-gray-500 italic font-light mb-4 group-hover:text-gray-400 transition-colors duration-500 ${
            isFeatured ? "text-xl" : "text-lg"
          }`}>
            &ldquo;{project.tagline}&rdquo;
          </p>
          <p className={`text-gray-600 leading-relaxed font-light group-hover:text-gray-500 transition-colors duration-500 max-w-lg ${
            isFeatured ? "text-base" : "text-sm"
          }`}>
            {project.description}
          </p>
        </div>

        {/* Bottom */}
        <div className="flex items-end justify-between mt-8 pt-6 border-t border-white/[0.04]">
          <div className="flex items-baseline gap-2">
            <span className={`text-3xl font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
              {project.stats.metric}
            </span>
            <span className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">
              {project.stats.label}
            </span>
          </div>

          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Explore
            </span>
            <ExternalLink size={12} className="text-gray-500" />
          </div>
        </div>
      </div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none z-[1] mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
        }}
      />
    </motion.a>
  );
};

/* ── Main Section ──────────────────────────────────────────── */
const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={sectionRef} id="portfolio" className="relative py-20 bg-[#0A0A0A] overflow-hidden z-30">
      {/* Background ambient glow */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-amber-500/[0.03] blur-[200px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-px bg-gradient-to-r from-amber-500 to-transparent"
            />
            <span className="text-amber-500 font-bold uppercase tracking-[0.5em] text-[10px]">
              Selected Work
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.85]">
                The <span className="text-gradient">Anthology.</span>
              </h2>
            </div>
            <motion.a
              href="/portfolio"
              whileHover={{ x: 4 }}
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 hover:border-amber-500/40 transition-all self-start md:self-auto mb-4"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-amber-400 transition-colors">
                View All
              </span>
              <ArrowUpRight size={14} className="text-gray-600 group-hover:text-amber-400 group-hover:rotate-45 transition-all duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scrolling Marquee */}
      <Marquee />

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto px-6">
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
      </div>

      {/* Bottom Stats Ticker */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
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
    </section>
  );
};

export default PortfolioSection;
