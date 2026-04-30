"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ExternalLink, ArrowRight, Eye, Layers } from "lucide-react";

const projects = [
  {
    name: "Captor",
    url: "https://captor.in",
    category: "Performance // Marketing",
    description: "High-impact performance marketing showcase and cinematic conversion engines.",
    color: "from-cyan-500 to-blue-600",
    image: "/api/placeholder/800/600", // Would be real project screenshot
    tags: ["Paid Media", "CRO", "Strategy"]
  },
  {
    name: "Growora",
    url: "https://growora.com",
    category: "Growth // Scaling",
    description: "Advanced growth-hacking systems and intelligent scaling architectures.",
    color: "from-blue-500 to-indigo-600",
    image: "/api/placeholder/800/600",
    tags: ["Automation", "Data", "Scaling"]
  },
  {
    name: "Obsidian Velvet",
    url: "https://obsidianvelvet.in",
    category: "Luxury // Branding",
    description: "Luxury branding and premium aesthetics for the world's most elite digital experiences.",
    color: "from-purple-500 to-pink-600",
    image: "/api/placeholder/800/600",
    tags: ["UI/UX", "Identity", "Luxury"]
  },
  {
    name: "Enlightened Magic",
    url: "https://enlightenedmagic.com",
    category: "The Mothership",
    description: "The core engine powering all digital manifestations and creative intelligence.",
    color: "from-cyan-400 to-cyan-600",
    image: "/api/placeholder/800/600",
    tags: ["AI", "Creative", "Engine"]
  },
  {
    name: "Trueheal Global",
    url: "https://truehealglobal.com",
    category: "Health // Technology",
    description: "Corporate and global healthcare technology solutions for a connected world.",
    color: "from-emerald-500 to-teal-600",
    image: "/api/placeholder/800/600",
    tags: ["Enterprise", "Health", "Global"]
  }
];

const PortfolioPage = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="text-cyan-500 font-bold uppercase tracking-[0.4em] text-xs mb-6 block">
            The Anthology //
          </span>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8">
            Selected <span className="text-gradient">Works</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed font-light">
            A curated showcase of digital manifestations where cinematic storytelling 
            meets technical precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl"
              >
                {/* Project Image Placeholder / Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-30 transition-opacity duration-700`} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-90 group-hover:scale-100">
                  <div className="px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-2 shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                    View Project <ExternalLink size={18} />
                  </div>
                </div>

                {/* Decorative Tags */}
                <div className="absolute top-8 left-8 flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-widest uppercase text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>

              <div className="mt-8 flex justify-between items-end">
                <div className="max-w-md">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-cyan-500 uppercase mb-3 block">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold tracking-tighter text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
                <div className="hidden lg:block">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                    <Layers size={20} className="text-gray-600 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-40 px-6 text-center border-t border-white/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tighter">Ready to manifest <br /><span className="text-gradient">the magic?</span></h2>
          <a 
            href="https://www.enlightenedmagic.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-6 rounded-full bg-white text-black font-black text-xl hover:bg-cyan-500 hover:text-white transition-all duration-500 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
          >
            Start Your Project
          </a>
        </motion.div>
      </section>

      <footer className="py-20 border-t border-white/5 flex flex-col items-center gap-6">
        <div className="w-12 h-12 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg glow-cyan" />
        <p className="text-gray-600 text-sm tracking-widest uppercase">
          Enlightened Magic // 2026 Work Portfolio
        </p>
      </footer>
    </main>
  );
};

export default PortfolioPage;
