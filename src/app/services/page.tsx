"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { CheckCircle2, Zap, BarChart3, Video, Globe, Cpu } from "lucide-react";

const services = [
  {
    title: "Social Media Marketing",
    icon: <CheckCircle2 className="text-cyan-500" size={32} />,
    description: "Dominating the digital conversation. We craft high-impact social strategies that build community and drive measurable engagement.",
    features: ["Content Strategy", "Community Management", "Influencer Partnerships", "Platform Optimization"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Performance Marketing",
    icon: <BarChart3 className="text-blue-500" size={32} />,
    description: "Precision-engineered growth. Our data-first approach to paid media ensures maximum ROI and aggressive scale.",
    features: ["PPC Management", "Paid Social Ads", "Conversion Rate Optimization", "Advanced Attribution"],
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    title: "Videography",
    icon: <Video className="text-purple-500" size={32} />,
    description: "Cinematic storytelling that captivates. We produce ultra-high-definition visual content that defines your brand's identity.",
    features: ["Brand Films", "Social Reels", "Product Showcase", "Post-Production Mastery"],
    color: "from-purple-500/20 to-indigo-500/20"
  },
  {
    title: "Website Development",
    icon: <Globe className="text-emerald-500" size={32} />,
    description: "Performance-first digital architecture. We build blazing-fast, Awwwards-level web experiences that convert visitors into loyalists.",
    features: ["Next.js & React", "Headless CMS", "Animation & Interactivity", "SEO Optimization"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "AI Automation",
    icon: <Cpu className="text-cyan-400" size={32} />,
    description: "The nexus of intelligence. We implement proprietary AI systems to automate your workflows and supercharge your output.",
    features: ["Custom AI Agents", "Workflow Automation", "Predictive Analytics", "Machine Learning Integration"],
    color: "from-cyan-400/20 to-blue-600/20"
  }
];

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-sm mb-6 block">
            Capabilities //
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            We provide a comprehensive ecosystem of elite digital services designed to
            transform your brand into a high-performance growth machine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-10 rounded-3xl border border-white/5 bg-[#0f0f0f]/50 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-700"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`} />
              
              <div className="relative z-10">
                <div className="mb-8 p-4 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-500 text-white">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-300">
                      <Zap size={14} className="text-cyan-500/50 group-hover:text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 flex flex-col items-center gap-6">
        <div className="w-12 h-12 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg glow-cyan" />
        <p className="text-gray-600 text-sm tracking-widest uppercase">
          Enlightened Magic // 2026 Capability Showcase
        </p>
      </footer>
    </main>
  );
};

export default ServicesPage;
