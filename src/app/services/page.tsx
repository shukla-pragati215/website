"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Zap, CheckCircle2, BarChart3, Video, Globe, Cpu, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Social Media Marketing",
    icon: <CheckCircle2 size={22} />,
    description: "Dominating the digital conversation. We craft high-impact social strategies that build community and drive measurable engagement.",
    features: ["Content Strategy", "Community Management", "Influencer Partnerships", "Platform Optimization"],
    gradient: "from-amber-500 via-orange-500 to-red-500",
    accentHex: "#f59e0b",
    number: "01",
  },
  {
    title: "Performance Marketing",
    icon: <BarChart3 size={22} />,
    description: "Precision-engineered growth. Our data-first approach to paid media ensures maximum ROI and aggressive scale.",
    features: ["PPC Management", "Paid Social Ads", "Conversion Rate Optimization", "Advanced Attribution"],
    gradient: "from-blue-400 via-indigo-500 to-violet-600",
    accentHex: "#818cf8",
    number: "02",
  },
  {
    title: "Videography",
    icon: <Video size={22} />,
    description: "Cinematic storytelling that captivates. We produce ultra-high-definition visual content that defines your brand's identity.",
    features: ["Brand Films", "Social Reels", "Product Showcase", "Post-Production Mastery"],
    gradient: "from-purple-400 via-pink-500 to-rose-500",
    accentHex: "#c084fc",
    number: "03",
  },
  {
    title: "Website Development",
    icon: <Globe size={22} />,
    description: "Performance-first digital architecture. We build blazing-fast, Awwwards-level web experiences that convert visitors into loyalists.",
    features: ["Next.js & React", "Headless CMS", "Animation & Interactivity", "SEO Optimization"],
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    accentHex: "#34d399",
    number: "04",
  },
  {
    title: "AI Automation",
    icon: <Cpu size={22} />,
    description: "The nexus of intelligence. We implement proprietary AI systems to automate your workflows and supercharge your output.",
    features: ["Custom AI Agents", "Workflow Automation", "Predictive Analytics", "Machine Learning Integration"],
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
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111111] p-8 transition-all duration-700 hover:border-white/[0.12] min-h-[380px] flex flex-col justify-between"
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
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-sm`} />
      <div className="absolute inset-[1px] rounded-2xl bg-[#111111] z-0" />

      {/* Large faded number */}
      <span className="absolute top-2 right-4 text-[5rem] font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-700 pointer-events-none leading-none">
        {service.number}
      </span>

      <div className="relative z-10 flex-1">
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
        <p className="text-sm text-gray-600 leading-relaxed mb-6 group-hover:text-gray-400 transition-colors duration-500">
          {service.description}
        </p>
        
        <ul className="space-y-3 mb-8">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-xs font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
              <Zap size={12} className="text-gray-600 group-hover:text-amber-400 transition-colors" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 pt-5 border-t border-white/[0.04]">
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

const ServicesPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: pageRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <main ref={pageRef} className="min-h-screen bg-[#0A0A0A] text-white selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar />

      {/* Cinematic Hero */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto"
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
              Capabilities
            </span>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.85] mb-8">
            Our<br />
            <span className="text-gradient">Services.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-light">
            We provide a comprehensive ecosystem of elite digital services designed to
            transform your brand into a high-performance growth machine.
          </p>
        </motion.div>
      </motion.section>

      {/* Services Grid */}
      <section className="px-6 max-w-7xl mx-auto pb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 flex flex-col items-center gap-6">
        <img src="/logo.avif" alt="Enlightened Magic Logo" className="w-10 h-10 object-contain" />
        <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase">
          Enlightened Magic // 2026 Capability Showcase
        </p>
      </footer>
    </main>
  );
};

export default ServicesPage;
