"use client";

import Image from "next/image";
import { Sparkles, Layers, Sliders, ShieldCheck } from "lucide-react";

export default function NewStudioManifesto() {
  const pillars = [
    {
      number: "01",
      title: "Tactile Authenticity",
      subtitle: "Material Integrity Over Superficial Ornament",
      desc: "We prioritize raw travertine, fluted natural timber, solid patinated bronze, and hand-troweled plasters that age gracefully across generations.",
      icon: Layers,
    },
    {
      number: "02",
      title: "Acoustic Silence",
      subtitle: "Engineering Sanctuary in High-Density Cities",
      desc: "True luxury is quiet. Every residential and commercial envelope is acoustically isolated, diffusing ambient noise into soothing contemplation.",
      icon: ShieldCheck,
    },
    {
      number: "03",
      title: "Diurnal Luminance",
      subtitle: "Sculpting Space with Solar Trajectories",
      desc: "Architecture must live in dialogue with natural daylight. We design sightlines to harvest morning dawn and transition seamlessly into warm 2400K evening sanctuaries.",
      icon: Sliders,
    },
  ];

  return (
    <section id="manifesto" className="relative w-full py-28 bg-[#08080A] text-[#FBFBFD] overflow-hidden border-t border-[#E6CA85]/15">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E6CA85]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Endless Architectural Luxury Marquee */}
      <div className="w-full overflow-hidden border-y border-[#E6CA85]/20 py-4 bg-[#101014]/60 backdrop-blur-md mb-20">
        <div className="animate-marquee-luxury whitespace-nowrap flex items-center space-x-12">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center space-x-12">
              <span className="font-cinzel text-xs md:text-sm tracking-[0.35em] text-[#E6CA85] uppercase">
                HAUTE RESIDENTIAL • HOSPITALITY SANCTUARIES • ARCHITECTURAL MONOGRAPHS
              </span>
              <span className="w-2 h-2 rounded-full bg-[#E6CA85]/40" />
              <span className="font-serif italic text-sm md:text-base tracking-[0.2em] text-[#FBFBFD]/80">
                Crafted in Indore by Kirti Jaiswal Rajpal
              </span>
              <span className="w-2 h-2 rounded-full bg-[#E6CA85]/40" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E6CA85]/20 pb-8 mb-16">
          <div>
            <div className="flex items-center space-x-2 text-[10px] uppercase font-mono tracking-[0.35em] text-[#E6CA85] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CAP. I — MANIFESTO OF FORM & SPACE</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-[#FBFBFD] tracking-tight">
              THE PHILOSOPHY OF <span className="font-serif italic text-[#E6CA85]">PURPOSE</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm text-[#9C9890] font-sans leading-relaxed">
            Antaara was founded on the conviction that interior architecture is not merely decorative styling—it is the deliberate sculpting of human emotion, spatial dignity, and daily ritual.
          </p>
        </div>

        {/* Asymmetric 2-Column Manifesto Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left Column: Architectural Photo with Editorial Cut */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[#E6CA85]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <Image
                src="/images/projects/coffee-by-di-bella/p3_3_1310x1201.png"
                alt="Antaara Signature Architectural Work"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent" />
              
              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-onyx border border-[#E6CA85]/30">
                <span className="text-[9px] uppercase font-mono tracking-[0.25em] text-[#E6CA85] block">
                  COMMISSION NOTE // DI BELLA INDORE
                </span>
                <p className="text-xs text-[#FBFBFD] font-cinzel mt-1">
                  &ldquo;A double-height dialogue between fluid steel, raw wood, and sensory hospitality.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Three Core Tenets */}
          <div className="lg:col-span-7 space-y-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="p-8 rounded-2xl glass-onyx glass-onyx-hover relative group transition-all duration-500"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="font-cinzel text-xl text-[#E6CA85] font-light">
                        {pillar.number}
                      </span>
                      <div>
                        <h3 className="font-cinzel text-lg sm:text-xl text-[#FBFBFD] group-hover:text-[#E6CA85] transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-[10px] uppercase tracking-widest text-[#9C9890] mt-0.5 font-mono">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-full border border-[#E6CA85]/20 text-[#E6CA85] group-hover:bg-[#E6CA85]/10 group-hover:border-[#E6CA85] transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="mt-4 text-xs sm:text-sm text-[#9C9890] font-sans font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Studio Achievement Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-[#E6CA85]/20 py-10">
          <div className="space-y-1">
            <span className="font-cinzel text-3xl sm:text-4xl text-[#E6CA85] block">25+</span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#9C9890]">
              HAUTE COMMISSIONS DELIVERED
            </span>
          </div>
          <div className="space-y-1">
            <span className="font-cinzel text-3xl sm:text-4xl text-[#E6CA85] block">150,000+</span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#9C9890]">
              SQUARE FEET SCULPTED
            </span>
          </div>
          <div className="space-y-1">
            <span className="font-cinzel text-3xl sm:text-4xl text-[#E6CA85] block">100%</span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#9C9890]">
              BESPOKE MILLWORK & ART
            </span>
          </div>
          <div className="space-y-1">
            <span className="font-cinzel text-3xl sm:text-4xl text-[#E6CA85] block">4 CITIES</span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#9C9890]">
              INDORE • MATHURA • KOLKATA • SATNA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
