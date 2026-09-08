"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search, LayoutGrid, ListFilter, MapPin, Calendar, Building2 } from "lucide-react";
import { Project } from "@/data/seed-projects";

interface WorkClientProps {
  initialProjects: Project[];
}

export default function WorkClient({ initialProjects }: WorkClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"editorial" | "ledger">("editorial");

  const categories = [
    { label: "All Works", value: "All" },
    { label: "Private Residences", value: "Residential" },
    { label: "Hospitality & Nightlife", value: "Hospitality" },
    { label: "Corporate & Commercial", value: "Commercial" },
    { label: "Institutions & Retail", value: "Institutional" },
  ];

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" || p.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.client && p.client.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.subtitle && p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [initialProjects, selectedCategory, searchQuery]);

  // Lead project for the spotlight (e.g. Omaxe Mathura or BCM Planet)
  const spotlightProject = useMemo(() => {
    return (
      filteredProjects.find((p) => p.slug === "residence-at-omaxe-mathura") ||
      filteredProjects[0] ||
      initialProjects[0]
    );
  }, [filteredProjects, initialProjects]);

  const remainingProjects = useMemo(() => {
    return filteredProjects.filter((p) => p.slug !== spotlightProject?.slug);
  }, [filteredProjects, spotlightProject]);

  return (
    <div className="bg-[#180606] text-[#f7f6ef] min-h-screen pt-36 pb-36 px-6 sm:px-10 md:px-16 select-none">
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* ═══════════════════════════════════════════════════════════
            01. EDITORIAL HEADER & ATELIER IDENTITY
            ═══════════════════════════════════════════════════════════ */}
        <div className="border-b border-white/10 pb-12 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#dca82b]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#dca82b] font-sans font-medium">
                The Architectural Archive
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#d3c8bd] font-sans">
              {filteredProjects.length} Catalogued Commissions
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#f7f6ef] tracking-tight leading-[1.04]">
              Selected Architectural <br />
              <span className="italic text-[#dca82b]">Works & Commissions.</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base font-sans text-[#d3c8bd] max-w-2xl font-light leading-relaxed">
              An exhaustive archive of luxury private residences, landmark hospitality venues, executive corporate headquarters, and institutional campuses shaped across India.
            </p>
          </div>

          {/* Controls: Categories + Search + View Switcher */}
          <div className="pt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-t border-white/10">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {categories.map((cat) => {
                const count =
                  cat.value === "All"
                    ? initialProjects.length
                    : initialProjects.filter((p) => p.category.toLowerCase() === cat.value.toLowerCase()).length;
                return (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.18em] font-sans transition-all whitespace-nowrap border ${
                      selectedCategory === cat.value
                        ? "bg-[#dca82b] text-[#180606] font-semibold border-[#dca82b] shadow-lg shadow-[#dca82b]/20"
                        : "border-white/15 text-[#d3c8bd] hover:border-[#dca82b] hover:text-[#f7f6ef] bg-[#200808]"
                    }`}
                  >
                    {cat.label} <span className="opacity-60 ml-1">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Right: Search & View Toggle */}
            <div className="flex items-center gap-4">
              <div className="relative w-full sm:w-72">
                <Search className="w-3.5 h-3.5 text-[#dca82b] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by patron, city, or title..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#200808] border border-white/15 focus:border-[#dca82b] rounded-full pl-9 pr-4 py-2 text-xs text-[#f7f6ef] placeholder-[#d3c8bd]/50 outline-none transition-colors"
                />
              </div>

              {/* View Toggle */}
              <div className="hidden sm:inline-flex p-1 rounded-full bg-[#200808] border border-white/10">
                <button
                  onClick={() => setViewMode("editorial")}
                  className={`px-3 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-sans flex items-center gap-1.5 transition-all ${
                    viewMode === "editorial"
                      ? "bg-[#dca82b] text-[#180606] font-semibold"
                      : "text-[#d3c8bd] hover:text-[#f7f6ef]"
                  }`}
                  title="Editorial Monograph Layout"
                >
                  <LayoutGrid size={12} />
                  <span>Monograph</span>
                </button>
                <button
                  onClick={() => setViewMode("ledger")}
                  className={`px-3 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-sans flex items-center gap-1.5 transition-all ${
                    viewMode === "ledger"
                      ? "bg-[#dca82b] text-[#180606] font-semibold"
                      : "text-[#d3c8bd] hover:text-[#f7f6ef]"
                  }`}
                  title="Architectural Ledger Index"
                >
                  <ListFilter size={12} />
                  <span>Ledger</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            02. EMPTY STATE CHECK
            ═══════════════════════════════════════════════════════════ */}
        {filteredProjects.length === 0 ? (
          <div className="py-28 text-center space-y-4">
            <p className="font-serif text-3xl text-[#d3c8bd] font-light italic">
              No commissions catalogued under this filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs uppercase tracking-widest text-[#dca82b] border-b border-[#dca82b] pb-1 hover:text-[#edd277]"
            >
              Reset Archive Filters
            </button>
          </div>
        ) : viewMode === "editorial" ? (
          /* ═══════════════════════════════════════════════════════════
              03. EDITORIAL MONOGRAPH PRESENTATION (NOT BORING CARDS!)
              ═══════════════════════════════════════════════════════════ */
          <div className="space-y-16">
            {/* Spotlight Feature Commission (Panoramic Monograph Spread) */}
            {spotlightProject && selectedCategory === "All" && !searchQuery && (
              <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#250909] to-[#1c0606] border border-[#dca82b]/30 shadow-2xl relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                      src={spotlightProject.coverImage}
                      alt={spotlightProject.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#180606]/85 backdrop-blur-md border border-white/15 text-[9px] uppercase tracking-[0.2em] text-[#dca82b]">
                      Featured Landmark Commission
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-5">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[#dca82b] font-sans">
                        <span>{spotlightProject.category}</span>
                        <span>·</span>
                        <span>{spotlightProject.location}</span>
                      </div>
                      <h2 className="font-serif text-3xl sm:text-4xl text-[#f7f6ef] font-light leading-tight">
                        {spotlightProject.title}
                      </h2>
                      {spotlightProject.client && (
                        <p className="text-xs text-[#d3c8bd] font-sans font-medium">
                          Client: {spotlightProject.client}
                        </p>
                      )}
                    </div>

                    <p className="font-serif italic text-base sm:text-lg text-[#f7f6ef]/90 leading-relaxed border-l-2 border-[#dca82b] pl-4">
                      &ldquo;{spotlightProject.summary}&rdquo;
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/work/${spotlightProject.slug}`}
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#dca82b] text-[#180606] font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#edd277] transition-all shadow-lg shadow-[#dca82b]/20"
                      >
                        Explore Case Study <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Asymmetrical Magazine Rhythm Projects */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {remainingProjects.map((project, idx) => {
                  // Asymmetric layout logic: Alternate between 7-col + 5-col diptychs and 4-col trios
                  const isLarge = idx % 5 === 0;
                  const isMedium = idx % 5 === 1 || idx % 5 === 2;
                  const colSpan = isLarge
                    ? "md:col-span-8"
                    : isMedium
                    ? "md:col-span-4"
                    : "md:col-span-6 lg:col-span-4";

                  const aspectClass = isLarge
                    ? "aspect-[16/10]"
                    : isMedium
                    ? "aspect-[4/5]"
                    : "aspect-[16/11]";

                  return (
                    <div key={project.slug} className={colSpan}>
                      <Link
                        href={`/work/${project.slug}`}
                        className="luxury-card group block bg-[#200808] rounded-xl overflow-hidden border border-white/10 shadow-xl flex flex-col justify-between h-full"
                      >
                        <div className={`relative ${aspectClass} overflow-hidden bg-black/40`}>
                          <Image
                            src={project.coverImage}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover luxury-img-zoom brightness-[0.9]"
                          />
                          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#180606]/80 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-[0.18em] text-[#dca82b]">
                            {project.category}
                          </div>
                          {project.year && (
                            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#180606]/80 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-[0.14em] text-[#d3c8bd]">
                              {project.year}
                            </div>
                          )}
                        </div>

                        <div className="p-6 space-y-3 flex flex-col justify-between flex-1">
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-[#d3c8bd] font-sans">
                              <span>{project.location}</span>
                              <span className="text-[#dca82b]">{project.client || "Private Patron"}</span>
                            </div>
                            <h3 className="font-serif text-2xl font-light text-[#f7f6ef] group-hover:text-[#dca82b] transition-colors">
                              {project.title}
                            </h3>
                            {project.subtitle && (
                              <p className="text-xs text-[#c7bcb1] font-sans font-light line-clamp-2 pt-1">
                                {project.subtitle}
                              </p>
                            )}
                          </div>

                          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-[#a89f91] font-sans">
                            <span className="truncate max-w-[200px]">{project.scope}</span>
                            <span className="text-[#dca82b] font-medium uppercase tracking-wider inline-flex items-center gap-1">
                              Case Study <ArrowUpRight size={12} className="gold-hover-arrow" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inter-Archive Quote Break (PDF Endorsement) */}
            <div className="p-10 rounded-2xl bg-[#1c0606] border border-[#dca82b]/20 text-center space-y-4 shadow-xl">
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#dca82b] font-sans font-medium">
                Atelier Philosophy
              </span>
              <p className="font-serif italic text-2xl sm:text-3xl text-[#f7f6ef] max-w-3xl mx-auto leading-relaxed">
                &ldquo;At Antaara Design Studio every project is a story, every space is an emotion, and every detail reflects timeless craftsmanship.&rdquo;
              </p>
              <p className="text-xs text-[#d3c8bd] font-sans uppercase tracking-widest">
                Kirti Jaiswal Rajpal · Principal Architect
              </p>
            </div>
          </div>
        ) : (
          /* ═══════════════════════════════════════════════════════════
              04. ARCHITECTURAL INDEX LEDGER VIEW (PROFESSIONAL TABLE)
              ═══════════════════════════════════════════════════════════ */
          <div className="rounded-2xl border border-white/10 bg-[#200808] overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-[#180606] border-b border-white/10 text-[10px] uppercase tracking-[0.2em] text-[#dca82b]">
                  <tr>
                    <th className="py-4 px-6 font-medium">Project Name</th>
                    <th className="py-4 px-6 font-medium">Typology</th>
                    <th className="py-4 px-6 font-medium">Location</th>
                    <th className="py-4 px-6 font-medium">Patron / Client</th>
                    <th className="py-4 px-6 font-medium">Scope of Work</th>
                    <th className="py-4 px-6 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {filteredProjects.map((p) => (
                    <tr key={p.slug} className="hover:bg-[#280909] transition-colors group">
                      <td className="py-4 px-6 font-serif text-lg text-[#f7f6ef] group-hover:text-[#dca82b]">
                        <Link href={`/work/${p.slug}`} className="block">
                          {p.title}
                        </Link>
                      </td>
                      <td className="py-4 px-6 text-[#d3c8bd]">
                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase tracking-wider text-[#dca82b]">
                          {p.category}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-[#d3c8bd] whitespace-nowrap">{p.location}</td>
                      <td className="py-4 px-6 text-[#f7f6ef] font-medium">{p.client || "Private Client"}</td>
                      <td className="py-4 px-6 text-[#c7bcb1] max-w-xs truncate">{p.scope || "Full Turnkey Interior Architecture"}</td>
                      <td className="py-4 px-6 text-right whitespace-nowrap">
                        <Link
                          href={`/work/${p.slug}`}
                          className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#dca82b] hover:text-[#edd277] font-semibold"
                        >
                          View Study <ArrowUpRight size={13} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════
            05. BOTTOM ARCHITECTURAL COMMISSION INQUIRY
            ═══════════════════════════════════════════════════════════ */}
        <section className="p-10 sm:p-16 rounded-2xl bg-gradient-to-r from-[#2a0909] via-[#210707] to-[#180606] border border-[#dca82b]/30 text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dca82b]/15 border border-[#dca82b]/30 text-[10px] uppercase tracking-[0.24em] text-[#dca82b] font-medium">
            New Commission Inquiries
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#f7f6ef] max-w-2xl mx-auto leading-tight">
            Commission Antaara for your <span className="italic text-[#dca82b]">architectural space.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans max-w-lg mx-auto font-light leading-relaxed">
            We accept a curated selection of residential, hospitality, and commercial commissions each year to ensure uncompromising artisanal supervision and timely execution.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#dca82b] text-[#180606] font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#edd277] transition-all shadow-xl shadow-[#dca82b]/20"
            >
              Start an Architectural Consultation <ArrowUpRight size={14} />
            </Link>
            <a
              href="tel:+919243051598"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 text-[#f7f6ef] text-xs uppercase tracking-[0.16em] hover:border-[#dca82b] hover:text-[#dca82b] transition-all"
            >
              Direct Studio Line: +91 92430 51598
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
