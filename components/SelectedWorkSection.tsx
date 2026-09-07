"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Project } from "@/data/seed-projects";

interface SelectedWorkProps {
  projects: Project[];
}

export default function SelectedWorkSection({ projects }: SelectedWorkProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Hospitality", "Residential", "Commercial", "Retail"];

  const filteredProjects = projects
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .slice(0, 8);

  return (
    <section className="bg-[#F5F1EB] text-[#11110F] py-28 md:py-36 px-6 md:px-12 border-b border-[#DCD0C5] relative">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#DCD0C5]">
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#8A7D73] font-sans">
              03 — ARCHITECTURAL ARCHIVE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#161412]">
              SELECTED <br />
              <span className="font-serif italic font-normal text-[#B69A6A]">WORK</span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0 max-w-sm space-y-4 text-left md:text-right">
            <p className="font-serif italic text-lg sm:text-xl text-[#5E5148]">
              “Spaces designed to be lived in, remembered and felt.”
            </p>
            <p className="text-xs text-[#8A7D73] uppercase tracking-[0.2em] font-sans">
              INDORE • MATHURA • KOLKATA
            </p>
          </div>
        </div>

        {/* Live Filter Pills on Homepage */}
        <div className="flex items-center space-x-2 sm:space-x-4 py-8 overflow-x-auto no-scrollbar border-b border-[#DCD0C5]/60">
          <span className="text-[10px] uppercase tracking-widest text-[#8A7D73] mr-2 hidden sm:inline">
            TYPOLOGY:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full transition-all duration-300 font-sans ${
                activeCategory === cat
                  ? "bg-[#11110F] text-[#F5F1EB] shadow-md"
                  : "bg-transparent text-[#8A7D73] hover:text-[#11110F] hover:bg-[#EDE7DF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Chapters List with Diverse Editorial Layouts */}
        <div className="divide-y divide-[#DCD0C5] pt-8">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isDarkProject = project.slug === "after-hours-nightclub";

            if (isDarkProject) {
              // Dark Cinematic Nightclub Chapter
              return (
                <div
                  key={project.slug}
                  className="py-16 my-12 bg-[#11110F] text-[#F5F1EB] px-6 sm:px-14 rounded-sm shadow-2xl border border-[#22201E] relative overflow-hidden group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5 space-y-6">
                      <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.35em] text-[#B69A6A]">
                        <span>0{index + 1}</span>
                        <span>/</span>
                        <span>{project.category}</span>
                      </div>
                      <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#EDE7DF] leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.25em] text-[#8A7D73]">
                        {project.subtitle} • {project.location}
                      </p>
                      <p className="text-sm text-[#EDE7DF]/80 font-light leading-relaxed">
                        {project.summary}
                      </p>
                      <div className="pt-4">
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] px-7 py-3.5 bg-[#B69A6A] text-[#11110F] hover:bg-[#D5C2A0] transition-colors rounded-full font-medium shadow-lg"
                          data-cursor-text="VIEW"
                        >
                          <span>EXPLORE CHAPTER</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="lg:col-span-7">
                      <Link
                        href={`/work/${project.slug}`}
                        className="block relative aspect-[16/10] overflow-hidden rounded-sm group shadow-2xl border border-[#33302C]"
                        data-cursor-text="VIEW"
                      >
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            // Alternating Editorial Spreads
            return (
              <div
                key={project.slug}
                className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center group"
              >
                {/* Visual side */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Link
                    href={`/work/${project.slug}`}
                    className="block relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden shadow-2xl rounded-sm bg-[#EDE7DF] border border-[#DCD0C5]"
                    data-cursor-text="DISCOVER"
                  >
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </Link>
                </div>

                {/* Typography side */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.35em] text-[#8A7D73] font-sans">
                    <span>CHAPTER 0{index + 1}</span>
                    <span>•</span>
                    <span className="text-[#B69A6A] font-medium">{project.category}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#161412] leading-tight group-hover:text-[#B69A6A] transition-colors">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>

                  <p className="text-xs uppercase tracking-[0.25em] text-[#5E5148] font-sans">
                    {project.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-[#22201E]/80 font-light leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-[#DCD0C5]/70 text-xs text-[#8A7D73]">
                    <span className="uppercase tracking-wider font-sans">{project.location}</span>
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center space-x-2 uppercase tracking-[0.25em] text-[#11110F] group-hover:text-[#B69A6A] font-medium transition-colors"
                      data-cursor-text="VIEW"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <div className="pt-16 text-center">
          <Link
            href="/work"
            className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.3em] px-8 py-4 bg-[#11110F] text-[#F5F1EB] hover:bg-[#B69A6A] hover:text-[#11110F] transition-all rounded-full font-medium shadow-xl"
            data-cursor-text="ALL WORK"
          >
            <span>EXPLORE ALL 19 ARCHITECTURAL COMMISSIONS</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
