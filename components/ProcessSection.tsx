"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Discover",
      subtitle: "Contextual Exploration",
      desc: "Immersion into your lifestyle rituals, aesthetic sensibilities, and spatial aspirations. We study site orientation, daylight vectors, and circulation flows.",
      image: "/images/projects/bcm-planet-luxury-residence/bcm_living_room.jpg",
    },
    {
      num: "02",
      title: "Define",
      subtitle: "Spatial Planning",
      desc: "Translating functional requirements into architectural zoning. We establish volume, materiality moodboards, and 3D perspectives to align with your vision.",
      image: "/images/projects/coffee-by-di-bella/p3_3_1310x1201.png",
    },
    {
      num: "03",
      title: "Design",
      subtitle: "Tactile Detailing",
      desc: "Specifying bespoke millwork, Italian marbles, lighting coves, and acoustic treatments. Every profile is drafted with mathematical and artistic precision.",
      image: "/images/projects/omaxe-mathura-residence/p4_2_1402x1122.png",
    },
    {
      num: "04",
      title: "Detail",
      subtitle: "Quality Craft",
      desc: "Refining custom cabinetry, fluted wood panels, concealed hardware, and brushed brass details to ensure lasting durability and timeless beauty.",
      image: "/images/projects/bcm-planet-luxury-residence/bcm_kitchen.jpg",
    },
    {
      num: "05",
      title: "Deliver",
      subtitle: "Turnkey Handover",
      desc: "On-site execution overseen by seasoned architects and supervisors. Rigorous quality control culminating in a pristine white-glove handover.",
      image: "/images/projects/hotel-pride-cottages/p7_1_1536x1024.jpeg",
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#180606] text-[#f7f6ef] select-none border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-14">
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#dca82b] font-sans font-medium">
            Design Journey
          </span>
          <span className="text-[10px] uppercase tracking-[0.22em] font-sans text-[#d3c8bd]">
            From idea to turnkey space
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Sticky Details & Stepper */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-[#f7f6ef]">
                How we bring spaces to <span className="italic text-[#dca82b]">life.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans font-light leading-relaxed">
                A disciplined five-phase methodology balancing architectural rigor with creative freedom.
              </p>
            </div>

            {/* Stepper Buttons */}
            <div className="space-y-3">
              {steps.map((step, i) => (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                    activeStep === i
                      ? "bg-[#250909] border-[#dca82b] text-[#f7f6ef] shadow-lg shadow-black/30"
                      : "border-white/10 text-[#d3c8bd] hover:border-white/25 hover:text-[#f7f6ef] bg-transparent"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-serif text-sm ${activeStep === i ? "text-[#dca82b]" : "text-white/40"}`}>
                      {step.num}
                    </span>
                    <div>
                      <p className="font-serif text-base text-[#f7f6ef]">{step.title}</p>
                      <p className="text-[10px] uppercase tracking-wider text-[#d3c8bd] font-sans">{step.subtitle}</p>
                    </div>
                  </div>
                  <span className={`text-xs ${activeStep === i ? "text-[#dca82b]" : "text-white/20"}`}>
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Step Visual & Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#200808]">
              <Image
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-all duration-700 brightness-[0.9]"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#180606]/80 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-[0.2em] text-[#dca82b]">
                Phase {steps[activeStep].num} · {steps[activeStep].title}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#200808] border border-white/10 space-y-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#dca82b] font-sans font-medium">
                Phase Objective
              </p>
              <h3 className="font-serif text-xl sm:text-2xl text-[#f7f6ef] font-light">
                {steps[activeStep].subtitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans leading-relaxed font-light">
                {steps[activeStep].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
