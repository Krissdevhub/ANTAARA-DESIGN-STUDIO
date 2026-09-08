"use client";

import { useState } from "react";
import Image from "next/image";

export default function DesignLanguageSection() {
  const [activeWord, setActiveWord] = useState<"MATERIAL" | "LIGHT" | "FORM">("MATERIAL");

  const pillars = {
    MATERIAL: {
      word: "MATERIAL",
      subtitle: "Honest, tactile, and enduring",
      desc: "Open-pore travertine, smoked walnut fluting, hand-rubbed brass, and fine linen—noble surfaces chosen for how they feel to the hand and age with dignity.",
      image: "/images/projects/bcm-planet-luxury-residence/bcm_kitchen.jpg",
      caption: "TACTILITY // FLUTED WALNUT & HONEST STONE",
    },
    LIGHT: {
      word: "LIGHT",
      subtitle: "The primary builder of atmosphere",
      desc: "Daylight is not treated as illumination, but as an architectural sculpting tool that carves depth across planes and shifts mood over twenty-four hours.",
      image: "/images/projects/bcm-planet-luxury-residence/bcm_living_room.jpg",
      caption: "ATMOSPHERE // BALANCED NATURAL ILLUMINATION",
    },
    FORM: {
      word: "FORM",
      subtitle: "Proportion over ornamentation",
      desc: "Pure spatial lines, recessed shadow reveals, and double-height volumes that create visual balance, breathing room, and quiet poise.",
      image: "/images/projects/coffee-by-di-bella/p3_2_627x627.png",
      caption: "PROPORTION // ARCHITECTURAL REVEALS & VOLUMES",
    },
  };

  const keys: Array<"MATERIAL" | "LIGHT" | "FORM"> = ["MATERIAL", "LIGHT", "FORM"];

  return (
    <section className="relative w-full py-28 md:py-36 bg-[#F7F5F0] text-[#22201E] select-none border-t border-[#22201E]/8">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#22201E]/12 pb-4 mb-16 sm:mb-20">
          <span className="text-[10px] uppercase tracking-[0.35em] font-sans text-[#6E6862]">
            05 — DESIGN ESSENCE
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-[#6E6862]">
            TACTILE EXPLORATION
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: 3 Restrained Interactive Words (~60–80px, NOT 200px) */}
          <div className="lg:col-span-6 space-y-4">
            {keys.map((key) => {
              const isActive = activeWord === key;
              return (
                <div
                  key={key}
                  onMouseEnter={() => setActiveWord(key)}
                  onClick={() => setActiveWord(key)}
                  className={`cursor-pointer transition-all duration-300 py-3 border-b border-[#22201E]/10 ${
                    isActive
                      ? "opacity-100 pl-4 border-l-2 border-l-[#22201E]"
                      : "opacity-35 hover:opacity-75"
                  }`}
                >
                  <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#22201E]">
                    {key}
                  </h3>

                  {isActive && (
                    <div className="mt-3 space-y-1.5 max-w-md animate-fadeIn">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#3157D5] font-sans block">
                        {pillars[key].subtitle}
                      </span>
                      <p className="text-xs sm:text-sm text-[#6E6862] font-sans font-light leading-relaxed">
                        {pillars[key].desc}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Close-up Interior Photography */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#22201E]/12 shadow-lg bg-[#EDEAE3] group">
              <Image
                key={activeWord}
                src={pillars[activeWord].image}
                alt={activeWord}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-all duration-700 animate-fadeIn group-hover:scale-102"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#F7F5F0]/95 backdrop-blur-sm px-3.5 py-2 border border-[#22201E]/10 text-[9px] uppercase tracking-[0.2em] font-sans text-[#22201E] flex items-center justify-between">
                <span>{pillars[activeWord].caption}</span>
                <span className="text-[#6E6862]">ANTAARA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
