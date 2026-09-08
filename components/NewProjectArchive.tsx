"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/data/seed-projects";
import { SlidersHorizontal, Eye, FileText, ArrowUpRight, X, Compass, Ruler, MapPin } from "lucide-react";

interface Props {
  projects: Project[];
}

export default function NewProjectArchive({ projects }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [blueprintMode, setBlueprintMode] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Residential", "Hospitality", "Commercial", "Retail"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="masterworks" className="relative w-full py-28 bg-[#08080A] text-[#FBFBFD] overflow-hidden border-t border-[#E6CA85]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Monograph Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#E6CA85]/20 pb-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 text-[10px] uppercase font-mono tracking-[0.35em] text-[#E6CA85] mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>CAP. II — THE MASTERWORKS ARCHIVE</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-[#FBFBFD] tracking-tight">
              CURATED <span className="font-serif italic text-gold-shimmer">PORTFOLIO</span>
            </h2>
          </div>

          {/* Dual Mode Switcher & Category Controls */}
          <div className="mt-6 lg:mt-0 flex flex-wrap items-center gap-4">
            {/* Blueprint Mode Toggle */}
            <button
              onClick={() => setBlueprintMode(!blueprintMode)}
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border text-[10px] font-mono tracking-[0.2em] transition-all duration-300 ${
                blueprintMode
                  ? "bg-[#E6CA85] text-[#08080A] border-[#E6CA85] shadow-[0_0_25px_rgba(230,202,133,0.4)]"
                  : "glass-onyx text-[#9C9890] border-white/10 hover:border-[#E6CA85] hover:text-[#E6CA85]"
              }`}
            >
              <Ruler className="w-3.5 h-3.5" />
              <span>{blueprintMode ? "BLUEPRINT VIEW: ACTIVE" : "ENABLE BLUEPRINT MODE"}</span>
            </button>
          </div>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-cinzel tracking-widest transition-all ${
                activeCategory === cat
                  ? "bg-[#E6CA85] text-[#08080A] font-semibold shadow-[0_0_20px_rgba(230,202,133,0.3)]"
                  : "glass-onyx text-[#9C9890] hover:text-[#FBFBFD] border-white/10 hover:border-[#E6CA85]/40"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Masterworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.slug}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden glass-onyx glass-onyx-hover border border-[#E6CA85]/20 flex flex-col transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Project Image Frame with Blueprint Mode Support */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#101014]">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className={`object-cover object-center transition-all duration-700 group-hover:scale-105 ${
                    blueprintMode ? "blueprint-mode contrast-125 opacity-85" : "brightness-95 contrast-105"
                  }`}
                />

                {/* Blueprint Grid Overlay if Active */}
                {blueprintMode && (
                  <div className="absolute inset-0 blueprint-grid-fine pointer-events-none" />
                )}

                {/* Category Badge & Index */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#08080A]/85 backdrop-blur-md text-[9px] font-mono tracking-widest text-[#E6CA85] border border-[#E6CA85]/20">
                    {project.category.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-mono text-[#FBFBFD]/80 bg-[#08080A]/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    #{String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Hover Reveal Quick Button */}
                <div className="absolute inset-0 bg-[#08080A]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#E6CA85] text-[#08080A] text-[10px] font-cinzel font-semibold tracking-widest shadow-lg">
                    <span>VIEW MONOGRAPH</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Project Card Metadata */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono text-[#E6CA85] tracking-widest mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-cinzel text-xl text-[#FBFBFD] group-hover:text-[#E6CA85] transition-colors">
                    {project.title}
                  </h3>

                  {project.subtitle && (
                    <p className="text-xs text-[#9C9890] font-sans mt-1 line-clamp-1">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#9C9890]">
                  <span>{project.year || "2024"}</span>
                  <span className="text-[#E6CA85] group-hover:underline">
                    {blueprintMode ? "VIEW SPEC SHEET →" : "INSPECT DETAILS →"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Quick-Look Monograph Drawer / Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#08080A]/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-onyx border border-[#E6CA85]/40 p-6 md:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.9)]">
            {/* Close Trigger */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-[#E6CA85] text-[#FBFBFD] hover:text-[#08080A] transition-all z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#E6CA85] mb-2">
                  <span>{selectedProject.category}</span>
                  <span>•</span>
                  <span>{selectedProject.location}</span>
                  <span>•</span>
                  <span>{selectedProject.year}</span>
                </div>
                <h3 className="font-cinzel text-2xl sm:text-4xl text-[#FBFBFD]">
                  {selectedProject.title}
                </h3>
                {selectedProject.subtitle && (
                  <p className="text-sm text-[#E6CA85] font-serif italic mt-1">
                    {selectedProject.subtitle}
                  </p>
                )}
              </div>

              {/* Cover Photography */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#E6CA85]/20">
                <Image
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Scope & Description */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
                <div className="space-y-3">
                  <div>
                    <span className="block text-[9px] font-mono uppercase text-[#9C9890] tracking-widest">
                      CLIENT / COMMISSION
                    </span>
                    <span className="text-xs font-cinzel text-[#FBFBFD]">
                      {selectedProject.client || "Private Commission"}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono uppercase text-[#9C9890] tracking-widest">
                      SCOPE OF ARCHITECTURE
                    </span>
                    <span className="text-xs font-sans text-[#FBFBFD]">
                      {selectedProject.scope || "Full Interior Architecture"}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                  <span className="block text-[9px] font-mono uppercase text-[#E6CA85] tracking-widest">
                    ATELIER MONOGRAPH NOTE
                  </span>
                  <p className="text-xs sm:text-sm text-[#9C9890] font-sans leading-relaxed whitespace-pre-line">
                    {selectedProject.description || selectedProject.summary}
                  </p>
                </div>
              </div>

              {/* Gallery Strip */}
              {selectedProject.galleryImages && selectedProject.galleryImages.length > 1 && (
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <span className="block text-[9px] font-mono uppercase text-[#9C9890] tracking-widest">
                    PROJECT ARCHIVE PLATES
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {selectedProject.galleryImages.map((img, i) => (
                      <div
                        key={i}
                        className="relative aspect-square rounded-xl overflow-hidden border border-white/10 group"
                      >
                        <Image
                          src={img}
                          alt={`${selectedProject.title} plate ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action */}
              <div className="flex justify-end pt-4">
                <a
                  href="#commission-concierge"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 rounded-full bg-[#E6CA85] text-[#08080A] font-cinzel text-xs uppercase tracking-widest font-semibold hover:shadow-[0_0_25px_rgba(230,202,133,0.5)] transition-all"
                >
                  INQUIRE ABOUT A SIMILAR COMMMISSION
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
