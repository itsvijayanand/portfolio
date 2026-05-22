"use client";

import { motion } from "framer-motion";
import { Paintbrush, Layout, Camera, Play, ArrowRight } from "lucide-react";
import { portfolioData, Service } from "@/data/portfolioData";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Paintbrush: Paintbrush,
  Layout: Layout,
  Camera: Camera,
  Play: Play,
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen w-full bg-[#e5e5e5] py-24 px-6 md:px-12 border-b border-stone-300 overflow-hidden"
    >
      {/* Editorial Grids */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-full border-r border-stone-400 last:border-0" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 select-none">
          <div className="flex flex-col items-start">
            <span className="font-mono text-xs uppercase tracking-widest text-[#f4b223] font-bold mb-2">
              02 / SERVICES
            </span>
            <h2
              className="text-5xl md:text-7xl font-bold tracking-tight text-stone-900"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              MY CAPABILITIES.
            </h2>
          </div>
          <p className="text-stone-600 font-mono text-sm max-w-sm leading-relaxed">
            Delivering high-fidelity aesthetic solutions across multiple creative disciplines to establish cohesive brand footprints.
          </p>
        </div>

        {/* Services Grid (4 Rounded Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {portfolioData.services.map((service: Service, idx: number) => {
            const IconComponent = iconMap[service.icon] || Paintbrush;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="bg-[#e5e5e5] border-2 border-stone-300 hover:border-stone-900 rounded-[2rem] p-8 md:p-10 transition-all duration-300 flex flex-col justify-between items-start group relative overflow-hidden shadow-sm"
              >
                {/* Background Number Accent */}
                <span className="absolute right-8 top-6 font-mono text-7xl md:text-8xl font-black text-stone-400/10 group-hover:text-[#f4b223]/10 select-none transition-colors">
                  {service.number}
                </span>

                {/* Top: Icon + Title */}
                <div className="w-full">
                  <div className="w-14 h-14 rounded-full bg-stone-200 border-2 border-stone-300 flex items-center justify-center mb-6 text-stone-800 group-hover:bg-[#f4b223] group-hover:border-stone-900 group-hover:text-stone-900 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3
                    className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 tracking-tight"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-stone-700 text-sm font-mono leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom: Feature List */}
                <div className="w-full pt-6 border-t border-stone-300/60 flex flex-col gap-3">
                  <span className="text-[10px] font-mono font-bold text-stone-500 uppercase tracking-widest">
                    Key Features
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {service.details.map((detail, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-xs font-mono text-stone-700 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 bg-stone-900 group-hover:bg-[#f4b223] transition-colors rounded-full" />
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
