"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProcessSection() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      num: "01",
      title: "DISCOVER",
      tagline: "Understanding the client, lifestyle and vision.",
      body: "We begin every commission with an intimate listening session. We explore your daily rituals, aesthetic affinities, functional requirements, and personal memories to establish the foundational brief.",
      image: "/images/studio/hero-cover.jpg",
    },
    {
      num: "02",
      title: "DEFINE",
      tagline: "Concept development and spatial planning.",
      body: "Translating aspirations into clear architectural volumes. We develop circulation schemes, spatial layouts, light pathways, and initial material mood boards to visualize structural potential.",
      image: "/images/pages/page_03.jpg",
    },
    {
      num: "03",
      title: "DESIGN",
      tagline: "Materials, furniture, lighting and detailing.",
      body: "Deep curation of every tangible touchpoint. Hand-selecting Italian marbles, custom fluted millwork, architectural luminaires, textiles, and bespoke furnishings crafted for your lifestyle.",
      image: "/images/studio/bridal-couture.jpg",
    },
    {
      num: "04",
      title: "DELIVER",
      tagline: "Execution, coordination and finishing.",
      body: "Meticulous on-site management, coordination with master artisans, precision electrical and plumbing alignments, and strict adherence to agreed project timelines.",
      image: "/images/studio/hotel-pride-hero.jpg",
    },
    {
      num: "05",
      title: "EXPERIENCE",
      tagline: "A completed space designed to feel personal and timeless.",
      body: "The culminating handover. White-glove installation, curated styling, and the joyful revelation of a home or venue designed to hold lifetime memories.",
      image: "/images/pages/page_06.jpg",
    },
  ];

  return (
    <section className="py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#DCD0C5]">
      <div className="pb-16 border-b border-[#DCD0C5] flex flex-col md:flex-row md:items-end justify-between">
        <div className="space-y-3">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#8A7D73] font-sans">
            METHODOLOGY
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#11110F]">
            THE ARCHITECTURAL <br />
            <span className="italic font-normal text-[#B69A6A]">PROCESS</span>
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-xs uppercase tracking-[0.25em] text-[#8A7D73] font-sans">
          FIVE STAGES FROM INITIAL SKETCH TO HANDOVER
        </p>
      </div>

      <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Interactive Stage Selector & Big Number */}
        <div className="lg:col-span-5 space-y-8">
          <div className="font-serif text-7xl sm:text-8xl md:text-9xl font-light text-[#B69A6A]/40 transition-all duration-500">
            {stages[activeStage].num}
          </div>

          <div className="space-y-3">
            {stages.map((stg, idx) => (
              <button
                key={stg.num}
                onClick={() => setActiveStage(idx)}
                className={`w-full text-left p-4 rounded-sm transition-all duration-300 flex items-center justify-between border-l-2 ${
                  activeStage === idx
                    ? "border-[#B69A6A] bg-[#EDE7DF] text-[#11110F]"
                    : "border-transparent text-[#8A7D73] hover:text-[#11110F] hover:bg-[#EDE7DF]/50"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="font-mono text-xs text-[#B69A6A]">{stg.num}</span>
                  <span className="font-serif text-xl sm:text-2xl font-light tracking-wide">
                    {stg.title}
                  </span>
                </div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#8A7D73]">
                  PHASE 0{idx + 1}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Dynamic Visual & Description */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-[#EDE7DF] shadow-2xl border border-[#DCD0C5]">
            <Image
              src={stages[activeStage].image}
              alt={stages[activeStage].title}
              fill
              className="object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#B69A6A]">
                  PHASE {stages[activeStage].num}
                </p>
                <p className="font-serif text-2xl font-light">
                  {stages[activeStage].title}
                </p>
              </div>
              <span className="text-xs font-mono tracking-widest text-white/75">
                ANTAARA STUDIO
              </span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#11110F] font-light">
              {stages[activeStage].tagline}
            </h3>
            <p className="text-base text-[#5E5148] font-light leading-relaxed">
              {stages[activeStage].body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
