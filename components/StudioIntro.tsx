import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function StudioIntro() {
  return (
    <section
      id="studio-intro"
      className="relative bg-[#F5F1EB] text-[#11110F] py-28 md:py-36 px-6 md:px-12 border-b border-[#DCD0C5]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Sub-header */}
        <div className="flex items-center justify-between pb-12 border-b border-[#DCD0C5]">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#8A7D73] font-sans">
            01 — THE STUDIO
          </span>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A7D73] font-sans">
            INDORE • ARCHITECTURE & INTERIORS
          </span>
        </div>

        {/* Asymmetrical Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-start">
          {/* Left: Oversized Statement */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light leading-[1.08] tracking-tight text-[#161412]">
              DESIGNING WITH PURPOSE, <br />
              <span className="font-serif italic font-normal text-[#B69A6A]">CRAFTING WITH SOUL.</span>
            </h2>

            <div className="pt-6">
              <div className="h-[1px] w-24 bg-[#B69A6A]" />
            </div>

            <p className="font-serif text-xl sm:text-2xl text-[#5E5148] italic font-light pt-2 max-w-lg leading-relaxed">
              “Every project is a story, every space is an emotion, and every detail reflects timeless craftsmanship.”
            </p>
          </div>

          {/* Right: Studio Narrative, Practice Areas & Floating Pure Photo */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-5 text-[#22201E] text-base leading-relaxed font-light">
              <p>
                Antaara Design Studio is a creative interior design firm based in
                Indore, dedicated to transforming spaces through innovative ideas,
                functional planning, and timeless aesthetics.
              </p>
              <p className="text-sm text-[#5E5148]">
                We specialize in designing residential, commercial, hospitality, and
                retail interiors that achieve a harmonious balance between spatial
                clarity, tactile warmth, and functional everyday living.
              </p>
            </div>

            {/* Practice Areas */}
            <div className="pt-4 border-t border-[#DCD0C5]">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7D73] mb-4">
                DISCIPLINES & PRACTICES
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs tracking-wider uppercase font-sans">
                <div className="flex items-center space-x-2 text-[#11110F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6A]" />
                  <span>Residential Villas</span>
                </div>
                <div className="flex items-center space-x-2 text-[#11110F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6A]" />
                  <span>Hospitality Venues</span>
                </div>
                <div className="flex items-center space-x-2 text-[#11110F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6A]" />
                  <span>Corporate Offices</span>
                </div>
                <div className="flex items-center space-x-2 text-[#11110F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6A]" />
                  <span>Boutique Ateliers</span>
                </div>
              </div>
            </div>

            {/* Floating Pure Architectural Photograph */}
            <div className="relative w-full aspect-[16/10] overflow-hidden shadow-2xl rounded-sm mt-8 group border border-[#DCD0C5]">
              <Image
                src="/images/projects/hotel-pride-cottages/p7_1_1536x1024.jpeg"
                alt="Hotel Pride Cottages Luxury Interior Architecture"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[11px] tracking-wider uppercase font-sans">
                <span>Hotel Pride Luxury Cottages</span>
                <span className="text-[#D5C2A0]">Indore</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#11110F] hover:text-[#B69A6A] font-medium transition-colors"
                data-cursor-text="STORY"
              >
                <span>READ THE STUDIO NARRATIVE</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
