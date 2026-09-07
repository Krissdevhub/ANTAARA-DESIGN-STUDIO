"use client";

import { useState } from "react";
import Image from "next/image";

export default function SignatureDetails() {
  const [activeTab, setActiveTab] = useState(0);

  const details = [
    {
      word: "MATERIAL",
      tagline: "Natural stones, Italian Statuario, hand-waxed warm oak & aged brass.",
      description:
        "Every surface is selected not merely for immediate beauty, but for how it patinas with grace across generations of living.",
      image: "/images/projects/omaxe-mathura-residence/p4_2_1402x1122.png",
    },
    {
      word: "LIGHT",
      tagline: "Architectural illumination sculpting spatial depth & tranquility.",
      description:
        "Concealed cove illumination, soft diffused wall washes, and bespoke fixtures calibrated to mirror natural solar rhythms.",
      image: "/images/projects/coffee-by-di-bella/p3_3_1310x1201.png",
    },
    {
      word: "TEXTURE",
      tagline: "Rich bouclé, fluted wall panels, textured lime plaster & linen.",
      description:
        "Tactile depth invites touch. We balance acoustic absorption with visual relief to create multi-sensory sanctuaries.",
      image: "/images/projects/luxury-bridal-experience-studio/p16_0_1536x1024.jpeg",
    },
    {
      word: "FORM",
      tagline: "Fluid curvilinear transitions paired with structural discipline.",
      description:
        "From double-height spatial voids to intimate barrel arches, geometries are calibrated to guide gaze and movement effortlessly.",
      image: "/images/projects/hotel-pride-cottages/p7_1_1536x1024.jpeg",
    },
    {
      word: "CRAFT",
      tagline: "Artisanal joinery, custom stone carving & hand-finished detail.",
      description:
        "We collaborate with master craftsmen to ensure every joinery reveal and metal inlay reflects uncompromising human touch.",
      image: "/images/projects/vinod-dhar-residence/p12_4_1536x1024.jpeg",
    },
  ];

  return (
    <section className="bg-[#F5F1EB] text-[#11110F] py-28 md:py-36 px-6 md:px-12 border-b border-[#DCD0C5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between pb-12 border-b border-[#DCD0C5]">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#8A7D73] font-sans">
            05 — THE FIVE PILLARS
          </span>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A7D73] font-sans">
            SIGNATURE DETAIL & TACTILITY
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-center">
          {/* Left: Interactive Words List */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7D73] mb-6">
              HOVER OR SELECT PILLAR
            </p>
            <div className="flex flex-col space-y-3">
              {details.map((item, idx) => (
                <button
                  key={item.word}
                  onClick={() => setActiveTab(idx)}
                  onMouseEnter={() => setActiveTab(idx)}
                  className={`text-left transition-all duration-300 py-3 border-b ${
                    activeTab === idx
                      ? "border-[#B69A6A] pl-4 text-[#11110F]"
                      : "border-transparent text-[#8A7D73] hover:text-[#11110F]"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight">
                      {item.word}
                    </span>
                    <span className="font-mono text-xs text-[#B69A6A]">
                      0{idx + 1}
                    </span>
                  </div>
                  {activeTab === idx && (
                    <p className="font-sans text-xs uppercase tracking-wider text-[#5E5148] mt-2 animate-fadeIn">
                      {item.tagline}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Dynamic Visual & Description */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl bg-[#EDE7DF] border border-[#DCD0C5]">
              <Image
                src={details[activeTab].image}
                alt={details[activeTab].word}
                fill
                className="object-cover transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-[#F5F1EB]">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#B69A6A]">
                  PILLAR 0{activeTab + 1}
                </span>
                <p className="font-serif text-2xl font-light">
                  {details[activeTab].word}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#5E5148] font-light leading-relaxed max-w-lg">
              {details[activeTab].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
