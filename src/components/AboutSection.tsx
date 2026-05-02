"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "99%", label: "Performance Score", description: "Lighthouse & Core Web Vitals" },
  { value: "24/7", label: "AI Automation", description: "Always-on intelligent systems" },
  { value: "8K", label: "Visual Fidelity", description: "Cinematic-grade production" },
];

const principles = [
  {
    number: "01",
    title: "Beauty × Performance",
    text: "Beauty without performance is irrelevant. Performance without beauty is forgettable. We deliver both.",
  },
  {
    number: "02",
    title: "Data-Driven Creativity",
    text: "Every creative decision is backed by data. Every data point inspires new creative possibilities.",
  },
  {
    number: "03",
    title: "Scale Through Systems",
    text: "We don't just deliver projects — we build systems that compound growth autonomously.",
  },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={sectionRef} id="about" className="relative py-20 px-6 bg-[#0A0A0A] overflow-hidden">
      {/* Ambient glow */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-amber-500/[0.03] blur-[200px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
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
              The Collective
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.85]">
              Artistry &amp; <span className="text-gradient">Intelligence.</span>
            </h2>
            <div className="md:mb-4">
              <p className="text-xl text-gray-500 leading-relaxed font-light">
                We are a luxury tech collective dedicated to turning brands into 
                growth machines through cinematic visuals and intelligent automation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 + 0.3 }}
              className="bg-[#111111] p-8 md:p-10 group hover:bg-[#141414] transition-colors duration-500"
            >
              <h3 className="text-4xl md:text-5xl font-black text-gradient-gold mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-white font-bold text-sm tracking-tight mb-1">{stat.label}</p>
              <p className="text-gray-600 text-xs">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Principles */}
        <div className="space-y-0">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-white/[0.04] hover:border-white/[0.08] transition-colors duration-500 items-center"
            >
              <div className="md:col-span-1">
                <span className="text-4xl font-black text-white/[0.06] group-hover:text-amber-500/20 transition-colors duration-500 font-mono">
                  {principle.number}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors duration-500">
                  {principle.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-500">
                  {principle.text}
                </p>
              </div>
              <div className="md:col-span-1 flex justify-end">
                <motion.div
                  whileHover={{ rotate: 45 }}
                  className="w-8 h-8 rounded-full border border-white/[0.06] flex items-center justify-center text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-500"
                >
                  <span className="text-xs">→</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111111] p-10 md:p-12"
        >
          <div className="absolute top-6 left-12 text-[10rem] font-black text-white/[0.02] leading-none pointer-events-none select-none">&ldquo;</div>
          <div className="relative z-10 max-w-3xl">
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed italic mb-6">
              We believe that in the intersection of art and technology lies the future 
              of brand building. Every project we touch becomes a living, breathing 
              digital organism.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-amber-500 to-transparent" />
              <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px]">
                Enlightened Magic Collective
              </span>
            </div>
          </div>
          {/* Corner glow */}
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-amber-500/[0.06] blur-[100px] rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
