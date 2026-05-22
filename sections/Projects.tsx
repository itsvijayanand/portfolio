"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Calendar, User, Compass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData, Project } from "@/data/portfolioData";

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const categories = ["All", "UI UX", "Posters"];

  const filteredProjects =
    filter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((project) => project.category === filter);

  const getGridSpanClass = (span?: string) => {
    switch (span) {
      case "md:col-span-2 md:row-span-2":
        return "md:col-span-2 md:row-span-2";
      case "md:col-span-1 md:row-span-2":
        return "md:col-span-1 md:row-span-2";
      case "md:col-span-3 md:row-span-1":
        return "md:col-span-3 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <section
      id="work"
      className="relative min-h-screen w-full bg-[#e5e5e5] py-24 px-6 md:px-12 border-b border-stone-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Top: Title & Filter Bar */}
        <div className="flex flex-col gap-8 select-none">
          <div className="flex flex-col items-start">
            <span className="font-mono text-xs uppercase tracking-widest text-[#f4b223] font-bold mb-2">
              03 / VISUAL ARCHIVE
            </span>
            <h2
              className="text-5xl md:text-7xl font-bold tracking-tight text-stone-900"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              SELECTED WORK.
            </h2>
          </div>

          {/* Dynamic Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-stone-300 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-widest transition-all ${
                  filter === cat
                    ? "bg-stone-900 text-[#e5e5e5]"
                    : "bg-transparent text-stone-700 hover:text-stone-950"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full auto-rows-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className={`relative rounded-[2.5rem] p-8 md:p-10 border-2 border-stone-900/40 bg-stone-200/40 cursor-pointer shadow-sm group overflow-hidden ${
                  getGridSpanClass(project.gridSpan)
                } flex flex-col justify-between hover:border-stone-950 hover:shadow-lg transition-all duration-500 ease-out`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      project.category === 'Posters' 
                        ? 'opacity-100 scale-100 group-hover:scale-105' 
                        : 'opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 transition-opacity duration-700 ${
                    project.category === 'Posters'
                      ? 'bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-stone-950/20'
                      : 'bg-stone-950/80 opacity-0 group-hover:opacity-100'
                  }`} />
                </div>

                {/* Top: Category & Year */}
                <div className="relative z-10 flex justify-between items-center w-full">
                  <span className="px-3 py-1 bg-stone-900 text-[#e5e5e5] rounded-lg font-mono text-[9px] uppercase tracking-widest font-bold group-hover:bg-[#f4b223] group-hover:text-stone-950 transition-colors duration-300">
                    {project.category}
                  </span>
                  <span className={`font-mono text-xs font-bold transition-colors duration-300 ${
                    project.category === 'Posters' ? 'text-stone-300' : 'text-stone-500 group-hover:text-stone-300'
                  }`}>
                    {project.year}
                  </span>
                </div>

                {/* Middle: Title & Description */}
                <div className="relative z-10 flex flex-col gap-3 my-6 text-left">
                  <h3
                    className={`text-2xl md:text-3xl font-black tracking-tight transition-colors duration-300 ${
                      project.category === 'Posters' ? 'text-[#e5e5e5]' : 'text-stone-900 group-hover:text-[#e5e5e5]'
                    }`}
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className={`font-mono text-xs leading-relaxed line-clamp-3 transition-colors duration-300 ${
                    project.category === 'Posters' ? 'text-stone-300' : 'text-stone-600 group-hover:text-stone-300'
                  }`}>
                    {project.description}
                  </p>
                </div>

                {/* Bottom: Client info & Arrow */}
                <div className={`relative z-10 flex justify-between items-end w-full border-t pt-4 transition-colors duration-300 ${
                  project.category === 'Posters' ? 'border-stone-700' : 'border-stone-900/10 group-hover:border-stone-800'
                }`}>
                  <div className="flex flex-col text-left font-mono text-[10px]">
                    <span className={`uppercase font-bold tracking-wider ${
                      project.category === 'Posters' ? 'text-stone-400' : 'text-stone-400'
                    }`}>Client</span>
                    <span className={`font-bold transition-colors duration-300 ${
                      project.category === 'Posters' ? 'text-stone-200' : 'text-stone-800 group-hover:text-stone-200'
                    }`}>{project.client}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-stone-900 text-[#e5e5e5] group-hover:bg-[#f4b223] group-hover:text-stone-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10">
            {/* Modal Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl h-[85vh] bg-[#e5e5e5] rounded-[2.5rem] border-2 border-stone-900 overflow-y-auto overscroll-contain flex flex-col z-10 text-stone-900"
            >
              {/* Close Button sticky top */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-6 top-6 w-10 h-10 rounded-full border-2 border-stone-900 bg-stone-200 text-stone-900 flex items-center justify-center z-30 hover:bg-[#f4b223] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Banner Image */}
              <div className="relative w-full h-[250px] md:h-[350px] flex-shrink-0">
                <Image
                  src={selectedProject.images[0] || selectedProject.thumbnail}
                  alt={selectedProject.title}
                  fill
                  priority
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-8 right-8 flex flex-col items-start gap-2">
                  <span className="px-3 py-1 bg-[#f4b223] text-stone-900 rounded-lg font-mono text-[10px] font-bold uppercase tracking-widest">
                    {selectedProject.category}
                  </span>
                  <h3
                    className="text-2xl md:text-4xl font-bold text-[#e5e5e5]"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-8 md:p-12 flex flex-col gap-8">
                {/* Meta Grid info */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-stone-300">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-mono text-xs">
                    <div className="flex items-center gap-2 text-stone-600">
                      <User className="w-4 h-4 text-[#f4b223]" />
                      <div>
                        <p className="text-[10px] uppercase font-bold text-stone-500">Client Partner</p>
                        <p className="font-bold text-stone-900">{selectedProject.client}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-stone-600">
                      <Compass className="w-4 h-4 text-[#f4b223]" />
                      <div>
                        <p className="text-[10px] uppercase font-bold text-stone-500">Project Role</p>
                        <p className="font-bold text-stone-900">{selectedProject.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-stone-600">
                      <Calendar className="w-4 h-4 text-[#f4b223]" />
                      <div>
                        <p className="text-[10px] uppercase font-bold text-stone-500">Timeline Year</p>
                        <p className="font-bold text-stone-900">{selectedProject.year}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 font-mono text-xs w-full md:w-auto">
                    {selectedProject.behanceUrl && (
                      <a
                        href={selectedProject.behanceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#f4b223] text-stone-950 px-5 py-2.5 rounded-full hover:bg-stone-900 hover:text-[#e5e5e5] transition-colors uppercase tracking-widest text-[10px] font-bold border border-[#f4b223]"
                      >
                        Behance
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Text Block details */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-sm">
                  <div className="md:col-span-8 flex flex-col gap-6 text-left">
                    <h4
                      className="text-xl font-bold uppercase tracking-tight text-stone-900"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      Project Overview
                    </h4>
                    <p className="text-stone-700 leading-relaxed font-mono">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div className="md:col-span-4 flex flex-col gap-6 text-left bg-stone-200/50 p-6 rounded-2xl border border-stone-300">
                    <div>
                      <h5 className="font-mono text-xs uppercase font-bold text-stone-950 mb-1.5">
                        The Challenge
                      </h5>
                      <p className="text-xs text-stone-700 leading-relaxed font-mono">
                        {selectedProject.challenges}
                      </p>
                    </div>
                    <div>
                      <h5 className="font-mono text-xs uppercase font-bold text-stone-950 mb-1.5">
                        Our Solution
                      </h5>
                      <p className="text-xs text-stone-700 leading-relaxed font-mono">
                        {selectedProject.solutions}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional gallery view */}
                <div className="flex flex-col gap-4 mt-4">
                  <h4
                    className="text-xl font-bold uppercase tracking-tight text-left text-stone-900"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    Visual Gallery
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.images.slice(1).map((img, i) => (
                      <div key={i} className="relative w-full h-[200px] md:h-[280px] rounded-2xl overflow-hidden border border-stone-300">
                        <Image
                          src={img}
                          alt={`${selectedProject.title} Gallery ${i}`}
                          fill
                          className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
