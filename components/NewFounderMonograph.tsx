"use client";

import Image from "next/image";
import { Sparkles, Award, Compass, CheckCircle2 } from "lucide-react";

export default function NewFounderMonograph() {
  const patronages = [
    {
      title: "Hema Malini Ji Commission",
      location: "Omaxe, Mathura",
      scope: "Private Luxury Villa Interior & Fine Art Tribute to Dharmendra Ji",
    },
    {
      title: "Coffee by Di Bella",
      location: "Indore, MP",
      scope: "Exterior Architecture & Double-Height Dining Experience",
    },
    {
      title: "BCM Planet 3 BHK Luxury Residence",
      location: "Vijay Nagar, Indore",
      scope: "Full Interior Architecture & Bespoke Italian Marble Millwork",
    },
    {
      title: "Hotel Pride Luxury Cottages",
      location: "Bypass Road, Indore",
      scope: "Private Resort Sanctuaries, Vaulted Wood Ceilings & Ensuites",
    },
  ];

  return (
    <section id="founder-monograph" className="relative w-full py-28 bg-[#08080A] text-[#FBFBFD] overflow-hidden border-t border-[#E6CA85]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Monograph Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E6CA85]/20 pb-8 mb-16">
          <div>
            <div className="flex items-center space-x-2 text-[10px] uppercase font-mono tracking-[0.35em] text-[#E6CA85] mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>CAP. V — THE MAISON PRINCIPAL & PRACTICE</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-[#FBFBFD] tracking-tight">
              KIRTI JAISWAL <span className="font-serif italic text-gold-shimmer">RAJPAL</span>
            </h2>
          </div>
          <span className="mt-4 md:mt-0 text-xs font-mono text-[#E6CA85] tracking-widest uppercase">
            FOUNDER & PRINCIPAL ARCHITECTURAL DESIGNER
          </span>
        </div>

        {/* Editorial Feature Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Haute Founder Portrait with Architectural Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-[#E6CA85]/30 shadow-[0_25px_60px_rgba(0,0,0,0.85)] group">
              <Image
                src="/images/founder/kirti-portrait-fixed.jpg"
                alt="Kirti Jaiswal Rajpal — Founder Antaara Design Studio"
                fill
                priority
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent opacity-60" />

              {/* Gold Atelier Seal */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#08080A]/80 backdrop-blur-md border border-[#E6CA85]/40 flex items-center space-x-2">
                <Sparkles className="w-3 h-3 text-[#E6CA85]" />
                <span className="text-[9px] font-cinzel tracking-widest text-[#E6CA85]">
                  ATELIER PRINCIPAL
                </span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-onyx border border-[#E6CA85]/20">
                <span className="text-[9px] font-mono text-[#E6CA85] tracking-widest uppercase block">
                  PRACTICE PHILOSOPHY
                </span>
                <p className="text-xs font-serif italic text-[#FBFBFD] mt-0.5">
                  &ldquo;A home must not impress strangers—it must comfort the soul that dwells within it.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right: Narrative Monograph & Selected Patronage */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-cinzel text-2xl sm:text-3xl text-[#FBFBFD] leading-snug">
                Crafting Spaces with <span className="font-serif italic text-[#E6CA85]">Intimacy, Restraint, and Enduring Grace.</span>
              </h3>

              <p className="text-sm text-[#9C9890] font-sans leading-relaxed">
                Based out of Indore with commissions spanning Madhya Pradesh, Uttar Pradesh, and West Bengal, 
                Kirti Jaiswal Rajpal approaches architecture not as an assembly of trends, but as a deeply human, 
                bespoke relationship between physical materiality and interior quietude.
              </p>

              <p className="text-sm text-[#9C9890] font-sans leading-relaxed">
                Her celebrated portfolio unites ultra-exclusive private residential estates, signature hospitality dining, 
                and corporate headquarters—each distinguished by artisanal millwork, bespoke lighting choreography, 
                and tactile stone craftsmanship.
              </p>
            </div>

            {/* Selected High-Profile Patronage List */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <span className="text-[10px] font-mono uppercase text-[#E6CA85] tracking-widest block">
                DISTINGUISHED COMMISSIONS & PATRONAGE
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {patronages.map((p, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl glass-onyx border border-white/5 hover:border-[#E6CA85]/30 transition-all"
                  >
                    <div className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#E6CA85] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-cinzel text-xs text-[#FBFBFD] font-semibold">
                          {p.title}
                        </h4>
                        <span className="text-[10px] font-mono text-[#E6CA85] block mt-0.5">
                          {p.location}
                        </span>
                        <p className="text-[11px] text-[#9C9890] font-sans mt-1 line-clamp-2">
                          {p.scope}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Studio Manifesto Signature */}
            <div className="pt-4 flex items-center justify-between border-t border-[#E6CA85]/20">
              <div>
                <span className="text-lg font-cinzel text-[#FBFBFD] block">
                  Kirti Jaiswal Rajpal
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#9C9890]">
                  FOUNDER • ANTAARA DESIGN STUDIO
                </span>
              </div>

              <a
                href="#commission-concierge"
                className="px-5 py-2.5 rounded-full border border-[#E6CA85]/40 text-[#E6CA85] hover:bg-[#E6CA85] hover:text-[#08080A] text-xs font-cinzel tracking-widest transition-all"
              >
                REQUEST DIRECT CONSULTATION
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
