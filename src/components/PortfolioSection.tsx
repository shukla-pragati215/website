"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    name: "Captor",
    url: "https://captor.in",
    category: "Performance // Marketing",
    description: "High-impact performance marketing showcase and cinematic conversion engines.",
    color: "from-cyan-500/20 to-blue-600/20",
  },
  {
    name: "Growora",
    url: "https://growora.com",
    category: "Growth // Scaling",
    description: "Advanced growth-hacking systems and intelligent scaling architectures.",
    color: "from-blue-500/20 to-indigo-600/20",
  },
  {
    name: "Obsidian Velvet",
    url: "https://obsidianvelvet.in",
    category: "Luxury // Branding",
    description: "Luxury branding and premium aesthetics for the world's most elite digital experiences.",
    color: "from-purple-500/20 to-pink-600/20",
  },
  {
    name: "Enlightened Magic",
    url: "https://enlightenedmagic.com",
    category: "The Mothership",
    description: "The core engine powering all digital manifestations and creative intelligence.",
    color: "from-cyan-400/20 to-cyan-600/20",
  },
  {
    name: "Trueheal Global",
    url: "https://truehealglobal.com",
    category: "Health // Technology",
    description: "Corporate and global healthcare technology solutions for a connected world.",
    color: "from-emerald-500/20 to-teal-600/20",
  },
];

const PortfolioSection = () => {
  const { scrollYProgress } = useScroll();
  
  // Align fragments animation: cards drift into place as user scrolls through this section
  const yOffset = useTransform(scrollYProgress, [0.4, 0.5], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);

  return (
    <section id="portfolio" className="relative py-40 px-6 bg-[#050505] overflow-hidden z-30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <span className="text-cyan-500 font-bold uppercase tracking-[0.5em] text-sm mb-6 block">
            The Anthology //
          </span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
            Selected <span className="text-gradient">Works</span>
          </h2>
        </motion.div>

        <motion.div
          style={{ y: yOffset, opacity }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-xl transition-all duration-700 hover:border-cyan-500/30 hover:bg-white/[0.05]"
            >
              {/* Glass Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Hover Cyan Glow */}
              <div className="absolute -inset-2 bg-[#00D6FF]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

              <div className="relative inset-0 p-8 flex flex-col justify-between h-full z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.3em] text-cyan-400 uppercase mb-3 block">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white tracking-tighter group-hover:text-cyan-400 transition-colors duration-500">
                      {project.name}
                    </h3>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-500">
                    <ExternalLink size={18} />
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 group-hover:text-white transition-colors duration-500">
                    View Project <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </div>
                </div>
              </div>

              {/* Internal Accent Glow */}
              <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
