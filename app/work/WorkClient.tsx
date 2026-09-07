"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { Project } from "@/data/seed-projects";

interface WorkClientProps {
  initialProjects: Project[];
}

export default function WorkClient({ initialProjects }: WorkClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Residential",
    "Hospitality",
    "Commercial",
    "Retail",
    "Institutional",
  ];

  const filteredProjects = initialProjects.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.client && p.client.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.subtitle && p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F5F1EB] min-h-screen pt-32 pb-36 px-6 md:px-12 text-[#11110F]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="border-b border-[#DCD0C5] pb-12 space-y-6">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#8A7D73] font-sans">
            ARCHITECTURAL PORTFOLIO
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-[#11110F] leading-[0.98]">
            SELECTED <br />
            <span className="italic font-normal text-[#B69A6A]">ARCHIVE</span>
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-[#5E5148] font-light leading-relaxed">
            A comprehensive catalog of residential villas, boutique hospitality spaces,
            corporate headquarters, and bespoke retail ateliers designed and executed
            by Antaara Design Studio across Indore, Mathura, and beyond.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#DCD0C5]/70">
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto no-scrollbar py-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-[#11110F] text-[#F5F1EB]"
                    : "text-[#8A7D73] hover:text-[#11110F] hover:bg-[#EDE7DF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8A7D73] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects, client, city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#EDE7DF] border border-transparent focus:border-[#B69A6A] pl-9 pr-4 py-2 text-xs text-[#11110F] outline-none rounded-full transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center space-y-4">
            <p className="font-serif text-3xl text-[#8A7D73]">No projects found</p>
            <p className="text-xs uppercase tracking-widest text-[#5E5148]">
              Try resetting your filter or search query.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs uppercase tracking-[0.25em] text-[#B69A6A] underline pt-2"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProjects.map((project, idx) => (
              <article key={project.slug} className="group space-y-5">
                <Link
                  href={`/work/${project.slug}`}
                  className="block relative aspect-[4/3] overflow-hidden rounded-sm bg-[#EDE7DF] shadow-md border border-[#DCD0C5]/60"
                  data-cursor-text="EXPLORE"
                >
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-[10px] uppercase tracking-widest text-[#EDE7DF]">
                    <span className="bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                      {project.category}
                    </span>
                    <span className="font-mono text-[#EDE7DF]/80">
                      0{idx + 1}
                    </span>
                  </div>
                </Link>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#8A7D73] font-sans">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#11110F] group-hover:text-[#B69A6A] transition-colors leading-snug">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>

                  <p className="text-xs text-[#5E5148] font-light leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-[#11110F] group-hover:text-[#B69A6A] font-medium transition-colors"
                      data-cursor-text="VIEW"
                    >
                      <span>VIEW PROJECT STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
