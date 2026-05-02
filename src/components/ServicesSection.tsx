"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Zap, CheckCircle2, BarChart3, Video, Globe, Cpu, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Social Media Marketing",
    icon: <CheckCircle2 size={22} />,
    description: "Dominating the digital conversation with high-impact social strategies that build empires.",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    accentHex: "#f59e0b",
    number: "01",
  },
  {
    title: "Performance Marketing",
    icon: <BarChart3 size={22} />,
    description: "Precision-engineered growth media for maximum ROI and aggressive scale.",
    gradient: "from-blue-400 via-indigo-500 to-violet-600",
    accentHex: "#818cf8",
    number: "02",
  },
  {
    title: "Videography",
    icon: <Video size={22} />,
    description: "Cinematic storytelling that defines your brand's digital identity in 8K.",
    gradient: "from-purple-400 via-pink-500 to-rose-500",
    accentHex: "#c084fc",
    number: "03",
  },
  {
    title: "Website Development",
    icon: <Globe size={22} />,
    description: "Awwwards-level digital architecture built for performance and conversion.",
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    accentHex: "#34d399",
    number: "04",
  },
  {
    title: "AI Automation",
    icon: <Cpu size={22} />,
    description: "Supercharging workflows with proprietary intelligent systems and agents.",
    gradient: "from-amber-300 via-yellow-500 to-amber-600",
    accentHex: "#fbbf24",
    number: "05",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
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
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111111] p-8 transition-all duration-700 hover:border-white/[0.12] min-h-[220px] flex flex-col justify-between"
    >
      {/* Mouse glow */}
      {isHovered && (
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full pointer-events-none z-0"
          style={{
            x: springX, y: springY,
            translateX: "-50%", translateY: "-50%",
            background: `radial-gradient(circle, ${service.accentHex}12, transparent 70%)`,
          }}
        />
      )}

      {/* Gradient border glow */}
      <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-sm`} />
      <div className="absolute inset-[1px] rounded-[2rem] bg-[#111111] z-0" />

      {/* Large faded number */}
      <span className="absolute top-2 right-4 text-[5rem] font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-700 pointer-events-none leading-none">
        {service.number}
      </span>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white/[0.04] border border-white/[0.08] text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-500`}>
            {service.icon}
          </div>
          <motion.div
            whileHover={{ rotate: 45 }}
            className="w-8 h-8 rounded-full border border-white/[0.06] flex items-center justify-center text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-500"
          >
            <ArrowUpRight size={14} />
          </motion.div>
        </div>

        <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:text-white transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-400 transition-colors duration-500">
          {service.description}
        </p>
      </div>

      <div className="relative z-10 mt-8 pt-5 border-t border-white/[0.04]">
        <div className="flex items-center gap-2">
          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-600 group-hover:text-gray-400 transition-colors">
            Explore Capability
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={sectionRef} id="services" className="relative py-20 px-6 bg-[#0A0A0A] overflow-hidden">
      {/* Ambient glow */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-1/2 left-1/4 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/[0.03] blur-[200px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
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
              Capabilities
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.85]">
              What We <span className="text-gradient">Build.</span>
            </h2>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed font-light md:mb-4">
              A comprehensive arsenal of elite digital services — each one engineered for maximum impact.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
