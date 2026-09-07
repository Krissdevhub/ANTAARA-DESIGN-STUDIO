"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Compass, Award, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function FounderSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-[#FAF7F2] text-[#1C1A18] py-28 md:py-36 px-6 md:px-12 border-b border-[#E3DDD4] relative overflow-hidden">
      {/* Ambient luxury radial glow */}
      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-[#B69A6A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-[#DCD0C5]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Editorial Sub-bar */}
        <div className="flex items-center justify-between pb-8 border-b border-[#E3DDD4]">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B69A6A] animate-ping opacity-75" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#8A7D73] font-sans font-medium">
              02 — LEADERSHIP & DESIGN ETHOS
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A7D73] font-sans hidden sm:inline">
              FOUNDER & PRINCIPAL • INDORE, INDIA
            </span>
            <span className="text-[10px] font-mono tracking-widest px-2.5 py-0.5 rounded-full bg-[#EDE7DF] text-[#5E5148] border border-[#DCD0C5]">
              EST. 2014
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-center">
          {/* Left Column: Authentic Portrait & Luxury Golden Seal */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div 
              className="relative w-full max-w-[440px] group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Outer decorative architectural frames */}
              <div className="absolute -inset-4 rounded-[220px] border border-[#B69A6A]/30 -rotate-2 transition-transform duration-700 group-hover:rotate-0 pointer-events-none" />
              <div className="absolute -inset-2 rounded-[210px] border border-[#E3DDD4] rotate-1 transition-transform duration-700 group-hover:rotate-0 pointer-events-none" />

              {/* Main Portrait Card with warm backdrop and soft shadow */}
              <div className="relative aspect-[3/4] rounded-[200px] overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#EDE7DF] to-[#E5DCD0] shadow-2xl border-2 border-[#D5C2A0]/80 p-2">
                <div className="relative w-full h-full rounded-[190px] overflow-hidden bg-[#E7E3DC]">
                  <Image
                    src="/images/founder/kirti-portrait-oval.png"
                    alt="Kirti Jaiswal Rajpal - Founder, Antaara Design Studio"
                    fill
                    priority
                    className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle warm champagne light vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Name badge inside portrait card */}
                  <div className="absolute bottom-6 left-0 right-0 text-center px-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#FAF7F2] font-sans font-medium drop-shadow-md">
                      KIRTI JAISWAL RAJPAL
                    </p>
                    <p className="font-serif italic text-sm text-[#D5C2A0] drop-shadow-md">
                      Founder & Principal Architect
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Authentic Antaara Gold Studio Crest */}
              <div className="absolute -top-4 -right-4 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-2xl border-2 border-[#FAF7F2] bg-white transition-transform duration-500 hover:scale-110 hover:rotate-6">
                <Image
                  src="/images/founder/antaara-gold-crest.jpg"
                  alt="Antaara Design Studio Official Crest"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute -bottom-6 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-[#E3DDD4] flex items-center space-x-3 text-[#1C1A18] transition-transform duration-500 hover:scale-105">
                <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#B69A6A]/40 flex items-center justify-center text-[#B69A6A]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-[#8A7D73] font-sans font-semibold">
                    STUDIO PRACTICE
                  </p>
                  <p className="font-serif text-sm font-medium text-[#1C1A18]">
                    10+ Years of Craftsmanship
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Authentic Positioning */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EDE7DF] border border-[#DCD0C5]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6A]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#5E5148] font-sans font-semibold">
                  FOUNDER’S PERSPECTIVE
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#1C1A18] leading-[1.08] tracking-tight">
                KIRTI JAISWAL <br />
                <span className="font-serif italic font-normal text-[#B69A6A]">RAJPAL</span>
              </h2>

              <p className="font-serif italic text-lg sm:text-xl text-[#5E5148] pt-1">
                “The woman behind the spaces.”
              </p>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#3E3A36] font-light leading-relaxed">
              <p>
                Founder of Antaara Design Studio, <strong className="font-medium text-[#1C1A18]">Kirti Jaiswal Rajpal</strong> is a celebrated interior designer and spatial architect based in Indore, specializing in luxurious residential, commercial, and hospitality environments.
              </p>
              <p className="text-sm sm:text-base text-[#5E5148]">
                Recognized for visionary conceptualization, rigorous material selection, and timely delivery, Antaara transforms every space into an organic balance of luxury, comfort, and human emotional connection. From private sprawling residences to premier hospitality destinations across India, every detail is custom tailored to the life lived within.
              </p>
            </div>

            {/* Quote Card with Warm Champagne Gold Accent */}
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#E3DDD4] shadow-lg relative space-y-3 group hover:border-[#B69A6A] transition-colors duration-300">
              <span className="font-serif text-6xl text-[#B69A6A]/20 absolute top-2 right-6 select-none pointer-events-none">
                “
              </span>
              <p className="font-serif italic text-lg sm:text-xl text-[#22201E] leading-relaxed relative z-10">
                “At Antaara Design Studio, every project is a story, every space is an
                emotion, and every detail reflects timeless craftsmanship.”
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-[#F0ECE7]">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#B69A6A] font-semibold font-sans">
                  — KIRTI JAISWAL RAJPAL
                </p>
                <span className="text-[10px] text-[#8A7D73] font-sans uppercase tracking-widest">
                  PRINCIPAL DESIGNER
                </span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-[#E3DDD4]">
              <div className="p-3 bg-white/60 rounded-xl border border-[#E3DDD4]">
                <p className="font-serif text-2xl sm:text-3xl font-light text-[#1C1A18]">19+</p>
                <p className="text-[10px] uppercase tracking-wider text-[#8A7D73] font-sans">
                  Completed Projects
                </p>
              </div>
              <div className="p-3 bg-white/60 rounded-xl border border-[#E3DDD4]">
                <p className="font-serif text-2xl sm:text-3xl font-light text-[#1C1A18]">100%</p>
                <p className="text-[10px] uppercase tracking-wider text-[#8A7D73] font-sans">
                  Bespoke Interiors
                </p>
              </div>
              <div className="p-3 bg-white/60 rounded-xl border border-[#E3DDD4]">
                <p className="font-serif text-2xl sm:text-3xl font-light text-[#1C1A18]">Indore</p>
                <p className="text-[10px] uppercase tracking-wider text-[#8A7D73] font-sans">
                  Headquarters & Studio
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] px-8 py-4 bg-[#1C1A18] text-[#FAF7F2] hover:bg-[#B69A6A] hover:text-[#1C1A18] transition-all duration-300 rounded-full font-medium shadow-xl hover:shadow-2xl hover:scale-105"
                data-cursor-text="BIOGRAPHY"
              >
                <span>EXPLORE FOUNDER STORY</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] px-6 py-4 border border-[#B69A6A] text-[#1C1A18] hover:bg-[#B69A6A]/10 transition-colors rounded-full font-medium"
              >
                <span>COMMISSION A PROJECT</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
