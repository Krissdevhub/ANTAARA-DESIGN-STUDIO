"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Layers, Sliders, Check, ArrowRight } from "lucide-react";

interface Material {
  id: string;
  name: string;
  origin: string;
  finish: string;
  colorScheme: string;
  acousticScore: string;
  thermalTouch: string;
  lightReflectance: string;
  featuredProject: string;
  description: string;
  accentColor: string;
  image: string;
}

export default function NewMaterialLab() {
  const materials: Material[] = [
    {
      id: "calacatta",
      name: "Calacatta Gold Honed Marble",
      origin: "Carrara, Tuscany",
      finish: "Matte Silken Honed (Non-Reflective)",
      colorScheme: "Warm Alabaster with Golden Veining",
      acousticScore: "0.15 NRC (Reflective & Crisp)",
      thermalTouch: "Cool Sensation (18.5°C Surface)",
      lightReflectance: "78% Ambient Diffusion",
      featuredProject: "3 BHK Luxury Residence, BCM Planet",
      description:
        "Extracted from historic Italian quarries, this stone brings luminous dignity to bespoke kitchen islands, master en-suite vanities, and monolithic entrance porticos.",
      accentColor: "#E6CA85",
      image: "/images/projects/bcm-planet-luxury-residence/bcm_kitchen.jpg",
    },
    {
      id: "walnut",
      name: "Fluted Smoked European Walnut",
      origin: "Bavaria, Germany",
      finish: "Natural Organic Oil & Wax",
      colorScheme: "Deep Espresso & Roasted Sienna",
      acousticScore: "0.68 NRC (High Acoustic Absorption)",
      thermalTouch: "Warm Organic Touch",
      lightReflectance: "18% Diffuse Light Absorbance",
      featuredProject: "Coffee by Di Bella & Sky Luxuria",
      description:
        "Milled with 12mm fluted vertical reveals to diffuse sound flutter and deliver visual rhythm across double-height feature walls and executive study sanctuaries.",
      accentColor: "#8C6D46",
      image: "/images/projects/coffee-by-di-bella/p3_2_627x627.png",
    },
    {
      id: "brass",
      name: "Hand-Burnished Antique Brass",
      origin: "Artisanal Foundry, Moradabad",
      finish: "Hand-Rubbed Liver of Sulfur Patina",
      colorScheme: "Deep Champagne Gold with Dark Edges",
      acousticScore: "Metallic Tone",
      thermalTouch: "Solid Conductive Weight",
      lightReflectance: "54% Directional Sheen",
      featuredProject: "Hotel Pride Luxury Cottages",
      description:
        "A living metal that matures gracefully with age and human touch. Employed for custom door hardware, cove trims, recessed linear reveals, and architectural pivot hinges.",
      accentColor: "#D4AF37",
      image: "/images/projects/hotel-pride-cottages/p7_1_1536x1024.jpeg",
    },
    {
      id: "travertine",
      name: "Roman Travertine Navona",
      origin: "Tivoli, Italy",
      finish: "Open-Pore Matte Troweled",
      colorScheme: "Warm Bone & Earth Sediment",
      acousticScore: "0.32 NRC (Balanced Resonance)",
      thermalTouch: "Neutral Organic Tactility",
      lightReflectance: "64% Natural Soft Scatter",
      featuredProject: "Residence at Omaxe, Mathura",
      description:
        "Ancient sedimentary stone with linear cavernous pores, echoing Roman classical architecture while infusing contemporary minimalist villas with grounded permanence.",
      accentColor: "#DCD0C5",
      image: "/images/projects/omaxe-mathura-residence/p4_2_1402x1122.png",
    },
    {
      id: "boucle",
      name: "French Wool & Alpaca Bouclé",
      origin: "Lyon, France",
      finish: "High-Pile Looped Weave",
      colorScheme: "Soft Chalk & Warm Oatmeal",
      acousticScore: "0.85 NRC (Whisper Softness)",
      thermalTouch: "Ultra-Warm Enveloping Tactility",
      lightReflectance: "10% Complete Light Absorption",
      featuredProject: "Dr. Upendra Dhar Private Residence",
      description:
        "Woven with natural unbleached wool loops, providing tactile comfort for bespoke curvilinear sofas, acoustic bed heads, and intimate lounge armchairs.",
      accentColor: "#F5F1EB",
      image: "/images/projects/grand-exotica-upendra-dhar/p15_4_1024x1536.jpeg",
    },
    {
      id: "obsidian",
      name: "Smoked Fluted Obsidian Glass",
      origin: "Saint-Gobain Precision Glass",
      finish: "Acid-Etched Fluted Reed",
      colorScheme: "Nocturnal Charcoal Bronze",
      acousticScore: "0.22 NRC Acoustic Barrier",
      thermalTouch: "Smooth Glass Temper",
      lightReflectance: "35% Soft Optical Glow",
      featuredProject: "After Hours Nightclub & Lounge",
      description:
        "Provides subtle visual obscuration while transmitting warm back-lighting. Perfect for walk-in wardrobe partitions, wine cellars, and moody bar backdrops.",
      accentColor: "#24242D",
      image: "/images/projects/after-hours-nightclub/p8_4_1535x1024.jpeg",
    },
  ];

  const [activeMaterial, setActiveMaterial] = useState<Material>(materials[0]);

  return (
    <section id="material-lab" className="relative w-full py-28 bg-[#08080A] text-[#FBFBFD] overflow-hidden border-t border-[#E6CA85]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E6CA85]/20 pb-8 mb-16">
          <div>
            <div className="flex items-center space-x-2 text-[10px] uppercase font-mono tracking-[0.35em] text-[#E6CA85] mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>CAP. III — THE ATELIER MATERIALITY LAB</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-[#FBFBFD] tracking-tight">
              TACTILE <span className="font-serif italic text-gold-shimmer">ALCHEMY</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm text-[#9C9890] font-sans leading-relaxed">
            Touch is our primary sense of architectural truth. Explore the noble raw materials we source and custom-craft for Antaara commissions.
          </p>
        </div>

        {/* Swatch Selector Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {materials.map((mat) => {
            const isSelected = activeMaterial.id === mat.id;
            return (
              <button
                key={mat.id}
                onClick={() => setActiveMaterial(mat)}
                className={`p-4 rounded-xl text-left transition-all duration-300 flex flex-col justify-between h-32 relative border ${
                  isSelected
                    ? "bg-[#16161D] border-[#E6CA85] shadow-[0_0_25px_rgba(230,202,133,0.3)] scale-[1.03]"
                    : "glass-onyx border-white/10 hover:border-[#E6CA85]/40 hover:bg-[#121218]"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-inner"
                    style={{ backgroundColor: mat.accentColor }}
                  />
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#E6CA85]" />}
                </div>

                <div>
                  <span className="font-cinzel text-xs text-[#FBFBFD] block line-clamp-1">
                    {mat.name.split(" ")[0]} {mat.name.split(" ")[1]}
                  </span>
                  <span className="text-[9px] font-mono text-[#9C9890] block mt-0.5">
                    {mat.origin.split(",")[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Material Deep Dive Panel */}
        <div className="rounded-3xl glass-onyx border border-[#E6CA85]/30 overflow-hidden p-6 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Material In-Situ Photography */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E6CA85]/20 shadow-xl group">
              <Image
                src={activeMaterial.image}
                alt={activeMaterial.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-[#E6CA85] uppercase block">
                    CRAFTED IN-SITU AT
                  </span>
                  <span className="font-cinzel text-sm text-[#FBFBFD]">
                    {activeMaterial.featuredProject}
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#E6CA85] text-[#08080A] text-[9px] font-cinzel font-semibold uppercase tracking-widest">
                  VERIFIED ATELIER FINISH
                </span>
              </div>
            </div>

            {/* Right: Technical Materiality Specs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#E6CA85] mb-1">
                  <span>PROVENANCE: {activeMaterial.origin}</span>
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl text-[#FBFBFD]">
                  {activeMaterial.name}
                </h3>
                <p className="text-xs text-[#E6CA85] font-serif italic mt-1">
                  Finish: {activeMaterial.finish}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#9C9890] font-sans leading-relaxed">
                {activeMaterial.description}
              </p>

              {/* Specification Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-3.5 rounded-xl bg-[#101014] border border-white/5">
                  <span className="text-[9px] font-mono text-[#9C9890] uppercase block">
                    ACOUSTIC PERFORMANCE
                  </span>
                  <span className="text-xs font-mono text-[#E6CA85] font-semibold mt-1 block">
                    {activeMaterial.acousticScore}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#101014] border border-white/5">
                  <span className="text-[9px] font-mono text-[#9C9890] uppercase block">
                    TACTILE TEMPERATURE
                  </span>
                  <span className="text-xs font-mono text-[#E6CA85] font-semibold mt-1 block">
                    {activeMaterial.thermalTouch}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#101014] border border-white/5">
                  <span className="text-[9px] font-mono text-[#9C9890] uppercase block">
                    LIGHT REFLECTANCE (LRV)
                  </span>
                  <span className="text-xs font-mono text-[#E6CA85] font-semibold mt-1 block">
                    {activeMaterial.lightReflectance}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#101014] border border-white/5">
                  <span className="text-[9px] font-mono text-[#9C9890] uppercase block">
                    PALETTE SPECTRUM
                  </span>
                  <span className="text-xs font-mono text-[#E6CA85] font-semibold mt-1 block">
                    {activeMaterial.colorScheme}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#commission-concierge"
                  className="inline-flex items-center space-x-2 text-xs font-cinzel tracking-widest text-[#E6CA85] hover:text-[#FBFBFD] transition-colors group"
                >
                  <span>SPECIFY THIS MATERIAL FOR YOUR PROJECT</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
