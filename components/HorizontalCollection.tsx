"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HorizontalCollection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const spaces = [
    {
      id: "01",
      typology: "01 // RESIDENTIAL",
      title: "BCM Planet Living Sanctuary",
      location: "Indore, MP",
      image: "/images/projects/bcm-planet-luxury-residence/bcm_living_room.jpg",
      slug: "bcm-planet-luxury-residence",
    },
    {
      id: "02",
      typology: "02 // HOSPITALITY",
      title: "Coffee by Di Bella Atrium",
      location: "Indore, MP",
      image: "/images/projects/coffee-by-di-bella/p3_2_627x627.png",
      slug: "coffee-by-di-bella",
    },
    {
      id: "03",
      typology: "03 // COMMERCIAL",
      title: "Global Automotive Headquarters",
      location: "Kolkata, WB",
      image: "/images/projects/corporate-office-kolkata/p5_0_1536x1024.jpeg",
      slug: "corporate-office-kolkata",
    },
    {
      id: "04",
      typology: "04 // RETAIL",
      title: "Luxury Bridal Experience Studio",
      location: "New Palasia, Indore",
      image: "/images/projects/luxury-bridal-experience-studio/p16_0_1536x1024.jpeg",
      slug: "luxury-bridal-experience-studio",
    },
    {
      id: "05",
      typology: "05 // RESIDENTIAL",
      title: "Residence at Omaxe Mathura",
      location: "Mathura, UP",
      image: "/images/projects/omaxe-mathura-residence/p4_2_1402x1122.png",
      slug: "residence-at-omaxe-mathura",
    },
  ];

  return (
    <section className="relative w-full py-28 md:py-36 bg-[#EDEAE3] text-[#22201E] select-none border-t border-[#22201E]/8">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-16 mb-12">
        <div className="flex items-center justify-between border-b border-[#22201E]/12 pb-4">
          <span className="text-[10px] uppercase tracking-[0.35em] font-sans text-[#6E6862]">
            04 — HORIZONTAL GALLERY
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-[#6E6862]">
            DRAG OR SCROLL HORIZONTALLY →
          </span>
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:items-end justify-between">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#22201E]">
            A COLLECTION <br />
            <span className="italic text-[#6E6862]">OF SPACES.</span>
          </h2>
          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#6E6862] font-sans max-w-sm leading-relaxed">
            A curated wandering through private residential sanctuaries, boutique hospitality pavilions, and bespoke retail spaces.
          </p>
        </div>
      </div>

      {/* 60–75vw Horizontal Gallery Track */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-8 sm:space-x-12 overflow-x-auto no-scrollbar px-6 sm:px-10 md:px-16 py-4 cursor-grab active:cursor-grabbing"
      >
        {spaces.map((space) => (
          <div
            key={space.id}
            data-cursor="explore"
            className="flex-none w-[75vw] sm:w-[65vw] md:w-[55vw] lg:w-[46vw] group"
          >
            <Link href={`/work/${space.slug}`} className="block space-y-4">
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#22201E]/12 shadow-lg bg-[#F7F5F0]">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  sizes="(max-width: 1024px) 80vw, 50vw"
                  className="object-cover object-center transition-transform duration-[1800ms] group-hover:scale-103"
                />
                <div className="absolute top-4 left-4 bg-[#F7F5F0]/95 backdrop-blur-sm px-3 py-1 border border-[#22201E]/10 text-[9px] uppercase tracking-[0.25em] font-sans text-[#22201E]">
                  {space.typology}
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#22201E] group-hover:text-[#3157D5] transition-colors">
                    {space.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest font-sans text-[#6E6862] block mt-0.5">
                    {space.location}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border border-[#22201E]/15 flex items-center justify-center group-hover:border-[#22201E] group-hover:bg-[#22201E] group-hover:text-[#F7F5F0] transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
