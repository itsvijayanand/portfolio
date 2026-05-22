"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Sparkles, Terminal } from "lucide-react";
import Image from "next/image";
import { portfolioData, TimelineItem, Skill } from "@/data/portfolioData";
import { useState } from "react";

// Software SVG icons for maximum accuracy without importing heavy libraries
const SoftwareIcon = ({ name }: { name: string }) => {
  const baseClass = "w-6 h-6 transition-all duration-300";
  switch (name.toLowerCase()) {
    case "figma":
      return (
        <svg className={baseClass} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 0C9.6 0 2 7.6 2 17C2 21.8 4 26.1 7.2 29.2C4 32.3 2 36.6 2 41.4C2 50.8 9.6 58.4 19 58.4C28.4 58.4 36 50.8 36 41.4V0H19Z" fill="#1E1E1E" fillOpacity="0.05" />
          <path d="M9.5 28.5C9.5 23.25 13.75 19 19 19C24.25 19 28.5 23.25 28.5 28.5V38C28.5 43.25 24.25 47.5 19 47.5C13.75 47.5 9.5 43.25 9.5 38V28.5Z" fill="#0ACF83" />
          <path d="M9.5 9.5C9.5 4.25 13.75 0 19 0H28.5V19H19C13.75 19 9.5 14.75 9.5 9.5Z" fill="#F24E1E" />
          <path d="M28.5 9.5C28.5 4.25 32.75 0 38 0H47.5V19H38C32.75 19 28.5 14.75 28.5 9.5Z" fill="#FF7262" />
          <path d="M28.5 28.5C28.5 23.25 32.75 19 38 19C43.25 19 47.5 23.25 47.5 28.5C47.5 33.75 43.25 38 38 38H28.5V28.5Z" fill="#A259FF" />
          <path d="M9.5 47.5C9.5 42.25 13.75 38 19 38H28.5V47.5C28.5 52.75 24.25 57 19 57C13.75 57 9.5 52.75 9.5 47.5Z" fill="#1ABCFE" />
        </svg>
      );
    case "photoshop":
      return (
        <div className="w-8 h-8 rounded bg-[#001d26] border border-[#00c8ff] flex items-center justify-center font-bold text-[#00c8ff] text-xs font-sans select-none shadow-sm">
          Ps
        </div>
      );
    case "illustrator":
      return (
        <div className="w-8 h-8 rounded bg-[#261300] border border-[#ff9a00] flex items-center justify-center font-bold text-[#ff9a00] text-xs font-sans select-none shadow-sm">
          Ai
        </div>
      );
    case "xd":
      return (
        <div className="w-8 h-8 rounded bg-[#2e001f] border border-[#ff2bc2] flex items-center justify-center font-bold text-[#ff2bc2] text-xs font-sans select-none shadow-sm">
          Xd
        </div>
      );
    case "vscode":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "framer":
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 2h14v6.5L12 15h7v7H5v-6.5L12 9H5z" />
        </svg>
      );
    default:
      return <Terminal className="w-6 h-6" />;
  }
};

export default function About() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  const timelineData = activeTab === "experience" ? portfolioData.experience : portfolioData.education;

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#e5e5e5] py-24 px-6 md:px-12 border-b border-stone-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start select-none">
          <span className="font-mono text-xs uppercase tracking-widest text-[#f4b223] font-bold mb-2">
            01 / WHO AM I
          </span>
          <h2
            className="text-5xl md:text-7xl font-bold tracking-tight text-stone-900"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            ABOUT ME.
          </h2>
        </div>

        {/* Top Grid: Split Image/Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Offset Rounded Yellow Frame */}
            <div className="absolute w-[280px] h-[340px] md:w-[320px] md:h-[400px] bg-[#f4b223] rounded-[2.5rem] rotate-3 shadow-lg z-0" />
            
            {/* Main Rounded Image */}
            <div className="relative w-[280px] h-[340px] md:w-[320px] md:h-[400px] rounded-[2.5rem] overflow-hidden bg-stone-300 border-2 border-stone-900 shadow-2xl z-10">
              <Image
                src="/profile.jpg"
                alt="Vijayanand B Rathod Portrait"
                fill
                sizes="(max-width: 768px) 280px, 320px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Right Column: Narrative bio */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start text-stone-900">
            <h3 
              className="text-3xl md:text-4xl font-bold mb-6 text-stone-900"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {portfolioData.aboutHeadline}
            </h3>
            <div className="text-stone-700 leading-relaxed text-base md:text-lg mb-8 font-mono space-y-4 text-left">
              {portfolioData.aboutText.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Software Skill Grid */}
            <div className="w-full">
              <h4 className="font-mono text-xs uppercase tracking-widest text-stone-500 font-bold mb-4">
                CREATIVE ENGINE TOOLS
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                {portfolioData.skills.map((skill: Skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5, borderColor: "#f4b223" }}
                    className="p-4 bg-[#e5e5e5] border-2 border-stone-300 rounded-2xl flex flex-col items-center justify-center gap-3 transition-colors duration-300 hover:bg-[#e5e5e5]/50 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-stone-200 border border-stone-300 group-hover:bg-[#f4b223]/25 group-hover:border-[#f4b223] transition-colors">
                      <SoftwareIcon name={skill.iconName} />
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-bold font-mono text-stone-900">{skill.name}</p>
                      <div className="w-16 h-1 bg-stone-300 rounded-full mt-1.5 overflow-hidden">
                        <div 
                          className="h-full bg-stone-950 group-hover:bg-[#f4b223] transition-all duration-1000" 
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section: Experience vs Education Timeline Toggle */}
        <div className="mt-12 flex flex-col lg:flex-row gap-12 items-start">
          {/* Toggle Column */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col gap-4 w-full">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex-1 lg:flex-none text-left p-6 rounded-2xl border-2 transition-all flex items-center justify-between ${
                activeTab === "experience"
                  ? "bg-stone-900 border-stone-900 text-[#e5e5e5] shadow-lg"
                  : "bg-transparent border-stone-300 text-stone-700 hover:border-stone-950 hover:text-stone-950"
              }`}
            >
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-widest font-bold">Experience</span>
              </div>
              <Sparkles className={`w-4 h-4 ${activeTab === "experience" ? "opacity-100" : "opacity-0"}`} />
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`flex-1 lg:flex-none text-left p-6 rounded-2xl border-2 transition-all flex items-center justify-between ${
                activeTab === "education"
                  ? "bg-stone-900 border-stone-900 text-[#e5e5e5] shadow-lg"
                  : "bg-transparent border-stone-300 text-stone-700 hover:border-stone-950 hover:text-stone-950"
              }`}
            >
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-widest font-bold">Education</span>
              </div>
              <Sparkles className={`w-4 h-4 ${activeTab === "education" ? "opacity-100" : "opacity-0"}`} />
            </button>
          </div>

          {/* Timeline Cards Column */}
          <div className="lg:w-2/3 w-full flex flex-col gap-6 relative pl-6 before:absolute before:left-0 before:top-4 before:bottom-4 before:w-[2px] before:bg-stone-300">
            {timelineData.map((item: TimelineItem, index: number) => (
              <motion.div
                key={item.title + index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-[#e5e5e5] border-2 border-stone-300 p-6 md:p-8 rounded-3xl hover:border-stone-900 transition-colors group shadow-sm"
              >
                {/* Connector Dot */}
                <div className="absolute -left-[30px] top-9 w-4 h-4 rounded-full border-4 border-[#e5e5e5] bg-stone-400 group-hover:bg-[#f4b223] transition-colors" />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#f4b223] rounded-lg text-stone-900 font-mono text-xs font-bold">
                    {item.year}
                  </span>
                  <span className="text-xs font-mono text-stone-500 uppercase tracking-widest">
                    {item.subtitle}
                  </span>
                </div>
                <h4 
                  className="text-xl md:text-2xl font-bold text-stone-900 mb-2"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {item.title}
                </h4>
                <div className="text-stone-600 text-sm font-mono leading-relaxed text-left">
                  {item.description.includes('\n') ? (
                    <ul className="list-disc pl-4 space-y-1.5 mt-2">
                      {item.description.split('\n').map((line, i) => (
                        <li key={i}>{line.trim()}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
