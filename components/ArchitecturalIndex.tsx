"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Layers, Sparkles, Compass, Eye } from "lucide-react";
import { Project } from "@/data/seed-projects";

interface TiltCardProps {
  project: Project;
  index: number;
}

function Card3D({ project, index }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, x: "50%", y: "50%" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.03, 1.03, 1.03)`
    );
    setGlareStyle({
      opacity: 1,
      x: `${(x / rect.width) * 100}%`,
      y: `${(y / rect.height) * 100}%`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlareStyle({ opacity: 0, x: "50%", y: "50%" });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: "transform 0.25s cubic-bezier(0.2, 0, 0, 1)",
      }}
      className="relative rounded-2xl overflow-hidden bg-[#161412] border border-[#B69A6A]/25 card-3d-glow group cursor-pointer preserve-3d"
    >
      {/* 3D Depth Layer 1: Image Backdrop */}
      <div className="relative aspect-[16/11] w-full overflow-hidden">
        <Image
          src={project.coverImage || "/images/studio/hero-cover.jpg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Layered cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#100F0E] via-[#100F0E]/40 to-transparent" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
      </div>

      {/* Dynamic 3D Glare Reflection Layer */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: glareStyle.opacity,
          background: `radial-gradient(circle at ${glareStyle.x} ${glareStyle.y}, rgba(255,255,255,0.18) 0%, transparent 60%)`,
        }}
      />

      {/* 3D Depth Layer 2: Floating Header Badges */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
        <span className="px-3 py-1 rounded-full text-[10px] font-display font-medium tracking-widest uppercase bg-black/60 backdrop-blur-md text-[#D5C2A0] border border-white/10 shadow-lg">
          {project.category}
        </span>
        <span className="text-[10px] font-mono text-white/70 bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-md border border-white/10">
          0{index + 1}
        </span>
      </div>

      {/* 3D Depth Layer 3: Content Body */}
      <div className="p-6 relative z-20 space-y-3 bg-gradient-to-b from-transparent via-[#141210]/90 to-[#141210]">
        <div className="space-y-1">
          <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#B69A6A] font-semibold">
            {project.location}
          </p>
          <h3 className="font-display text-xl sm:text-2xl font-medium text-[#FAF7F2] group-hover:text-[#D5C2A0] transition-colors leading-snug">
            {project.title}
          </h3>
        </div>

        <p className="text-xs text-[#9E9287] font-sans line-clamp-2 leading-relaxed font-light">
          {project.summary}
        </p>

        <div className="pt-3 flex items-center justify-between border-t border-white/10">
          <span className="text-[10px] uppercase tracking-wider text-[#8A7D73] font-sans">
            {project.client ? `Client: ${project.client}` : "Bespoke Commission"}
          </span>

          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center space-x-1.5 text-xs font-display font-medium uppercase tracking-wider text-[#FAF7F2] group-hover:text-[#B69A6A] transition-colors"
          >
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>

      {/* 3D Edge Highlight Border */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#B69A6A]/50 transition-colors pointer-events-none" />
    </div>
  );
}

export default function ArchitecturalIndex({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "carousel">("grid");
  const [activeCarouselIdx, setActiveCarouselIdx] = useState<number>(0);

  const categories = ["All", "Hospitality", "Residential", "Commercial", "Retail"];

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const handleNext = () => {
    setActiveCarouselIdx((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setActiveCarouselIdx(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  return (
    <section className="bg-[#0E0D0C] text-[#FAF7F2] py-28 md:py-36 px-6 md:px-12 border-b border-[#25221E] relative overflow-hidden">
      {/* 3D Ambient Atmospheric Lighting */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-[#B69A6A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-[#3B2D1F]/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle 3D Perspective Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#B69A6A 1px, transparent 1px), linear-gradient(to right, #B69A6A 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1C1A18] border border-[#B69A6A]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#B69A6A]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D5C2A0] font-sans font-semibold">
                3D SPATIAL ARCHIVE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF7F2] tracking-tight">
              PROJECT <span className="text-[#B69A6A] font-normal italic font-serif">SHOWCASE</span>
            </h2>
          </div>

          {/* Mode Switcher + Subtitle */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center bg-[#181614] p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-4 py-2 rounded-lg text-xs font-display transition-all ${
                  viewMode === "grid"
                    ? "bg-[#B69A6A] text-[#0E0D0C] font-medium shadow"
                    : "text-[#8A7D73] hover:text-[#FAF7F2]"
                }`}
              >
                3D Grid
              </button>
              <button
                onClick={() => setViewMode("carousel")}
                className={`px-4 py-2 rounded-lg text-xs font-display transition-all ${
                  viewMode === "carousel"
                    ? "bg-[#B69A6A] text-[#0E0D0C] font-medium shadow"
                    : "text-[#8A7D73] hover:text-[#FAF7F2]"
                }`}
              >
                3D Stage
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveCarouselIdx(0);
              }}
              className={`text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 font-display whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#B69A6A] text-[#0E0D0C] font-medium shadow-lg shadow-[#B69A6A]/20 scale-105"
                  : "bg-[#181614] text-[#8A7D73] hover:text-[#FAF7F2] hover:bg-[#22201D] border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* VIEW 1: 3D Perspective Grid */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {filteredProjects.slice(0, 9).map((project, idx) => (
              <Card3D key={project.slug} project={project} index={idx} />
            ))}
          </div>
        )}

        {/* VIEW 2: 3D Stage / Depth Coverflow */}
        {viewMode === "carousel" && filteredProjects.length > 0 && (
          <div className="pt-6">
            <div className="relative w-full max-w-4xl mx-auto aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border-2 border-[#B69A6A]/40 shadow-2xl bg-[#141210] group">
              <Image
                src={filteredProjects[activeCarouselIdx]?.coverImage || "/images/studio/hero-cover.jpg"}
                alt={filteredProjects[activeCarouselIdx]?.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0C] via-black/40 to-transparent" />

              {/* Top Bar */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
                <span className="px-4 py-1.5 rounded-full text-xs font-display font-medium tracking-widest uppercase bg-black/60 backdrop-blur-md text-[#D5C2A0] border border-white/10">
                  {filteredProjects[activeCarouselIdx]?.category}
                </span>
                <span className="font-mono text-xs text-white/80 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                  {activeCarouselIdx + 1} / {filteredProjects.length}
                </span>
              </div>

              {/* Navigation Controls */}
              <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between z-30 pointer-events-none">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-black/60 hover:bg-[#B69A6A] hover:text-black text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-all pointer-events-auto hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-black/60 hover:bg-[#B69A6A] hover:text-black text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-all pointer-events-auto hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-6 left-6 right-6 z-20 space-y-3">
                <p className="text-xs uppercase tracking-[0.25em] text-[#B69A6A] font-sans font-semibold">
                  {filteredProjects[activeCarouselIdx]?.location}
                </p>
                <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-light text-[#FAF7F2]">
                  {filteredProjects[activeCarouselIdx]?.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-sans max-w-2xl line-clamp-2">
                  {filteredProjects[activeCarouselIdx]?.summary}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/work/${filteredProjects[activeCarouselIdx]?.slug}`}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#B69A6A] text-[#0E0D0C] font-display font-medium text-xs tracking-wider uppercase hover:bg-[#FAF7F2] transition-colors shadow-lg"
                  >
                    <span>View Commission Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Thumbnail dots below carousel */}
            <div className="flex items-center justify-center space-x-2 pt-6">
              {filteredProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCarouselIdx(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeCarouselIdx === i
                      ? "w-8 bg-[#B69A6A]"
                      : "w-2 bg-white/20 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* View Full Architecture Portfolio Link */}
        <div className="pt-8 text-center">
          <Link
            href="/work"
            className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] px-8 py-4 rounded-full bg-[#181614] border border-[#B69A6A]/50 text-[#FAF7F2] hover:bg-[#B69A6A] hover:text-[#0E0D0C] transition-all duration-300 font-display font-medium hover:scale-105 shadow-xl"
          >
            <span>Explore All 19 Architectural Commissions</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
