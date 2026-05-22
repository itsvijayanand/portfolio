"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { portfolioData, CaseStudy } from "@/data/portfolioData";

export default function CaseStudySection() {
  return (
    <section
      id="process"
      className="relative min-h-screen w-full bg-[#e5e5e5] py-24 px-6 md:px-12 border-b border-stone-300 overflow-hidden"
    >
      {/* Background grids */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-full border-r border-stone-400 last:border-0" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start select-none">
          <span className="font-mono text-xs uppercase tracking-widest text-[#f4b223] font-bold mb-2">
            04 / CASE STUDY SYSTEM
          </span>
          <h2
            className="text-5xl md:text-7xl font-bold tracking-tight text-stone-900"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            WORK PROCESS.
          </h2>
        </div>

        {/* Process Roadmap Grid (Vertical Stack with progress connector) */}
        <div className="relative flex flex-col gap-16 md:gap-24 pl-8 md:pl-16 before:absolute before:left-3 before:md:left-7 before:top-4 before:bottom-4 before:w-[2px] before:bg-stone-300">
          
          {portfolioData.caseStudySteps.map((stepItem: CaseStudy, idx: number) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                {/* Step Connector Indicator */}
                <div className="absolute -left-[37px] md:-left-[53px] top-6 w-[20px] h-[20px] md:w-[26px] md:h-[26px] rounded-full border-4 border-[#e5e5e5] bg-stone-900 flex items-center justify-center text-[8px] md:text-[10px] text-[#e5e5e5] font-black font-mono shadow-md group-hover:bg-[#f4b223]">
                  {stepItem.step}
                </div>

                {/* Left block: Step details & typography */}
                <div className="lg:col-span-6 flex flex-col items-start text-stone-900 text-left">
                  <span className="font-mono text-xs font-bold text-[#f4b223] uppercase tracking-widest mb-2">
                    Phase {stepItem.step}
                  </span>
                  
                  <h3
                    className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {stepItem.title}
                  </h3>

                  <p className="text-stone-700 font-mono text-sm leading-relaxed mb-6">
                    {stepItem.description}
                  </p>

                  {/* Bullet check list */}
                  <div className="flex flex-col gap-2.5 w-full">
                    {stepItem.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#f4b223] flex-shrink-0 mt-0.5" />
                        <span className="text-xs font-mono text-stone-600 leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right block: Process Image Card */}
                <div className={`lg:col-span-6 relative w-full h-[240px] md:h-[350px] rounded-[2rem] overflow-hidden border-2 border-stone-300 shadow-lg ${
                  isEven ? "lg:order-last" : "lg:order-first"
                }`}>
                  <Image
                    src={stepItem.image}
                    alt={stepItem.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-stone-900/10 pointer-events-none" />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
