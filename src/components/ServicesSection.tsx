"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, CheckCircle2, BarChart3, Video, Globe, Cpu } from "lucide-react";

const services = [
  {
    title: "Social Media Marketing",
    icon: <CheckCircle2 className="text-cyan-500" size={24} />,
    description: "Dominating the digital conversation with high-impact social strategies.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Performance Marketing",
    icon: <BarChart3 className="text-blue-500" size={24} />,
    description: "Precision-engineered growth media for maximum ROI and scale.",
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    title: "Videography",
    icon: <Video className="text-purple-500" size={24} />,
    description: "Cinematic storytelling that defines your brand's digital identity.",
    color: "from-purple-500/20 to-indigo-500/20"
  },
  {
    title: "Website Development",
    icon: <Globe className="text-emerald-500" size={24} />,
    description: "Awwwards-level digital architecture built for performance.",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "AI Automation",
    icon: <Cpu className="text-cyan-400" size={24} />,
    description: "Supercharging workflows with proprietary intelligent systems.",
    color: "from-cyan-400/20 to-blue-600/20"
  }
];

const ServicesSection = () => {
  const { scrollYProgress } = useScroll();
  
  // Fade and drift animation for the section header
  const headerOpacity = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0.1, 0.15], [50, 0]);

  return (
    <section id="services" className="relative py-40 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <span className="text-cyan-500 font-bold uppercase tracking-[0.5em] text-sm mb-6 block">
            The Manifestations //
          </span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
            Our <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-10 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-700"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`} />
              
              <div className="relative z-10">
                <div className="mb-8 p-3 w-fit rounded-xl bg-white/5 border border-white/10 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-500 text-white">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
                
                <div className="mt-8 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-500/50 group-hover:text-cyan-400 transition-colors">
                  <Zap size={12} /> Detailed Capability
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default ServicesSection;
