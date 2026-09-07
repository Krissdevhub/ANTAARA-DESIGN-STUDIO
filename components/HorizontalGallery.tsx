"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export default function HorizontalGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const collections = [
    {
      index: "01",
      title: "RESIDENTIAL SANCTUARIES",
      category: "Residential",
      tagline: "Intimate homes designed around individuality, warmth and comfort.",
      image: "/images/projects/bcm-planet-luxury-residence/p6_3_1536x1024.jpeg",
      location: "Indore • Mathura",
      projectsCount: "8 Projects",
    },
    {
      index: "02",
      title: "HOSPITALITY DESTINATIONS",
      category: "Hospitality",
      tagline: "Hotels, dining venues and lounges creating unforgettable sensory memories.",
      image: "/images/projects/hotel-pride-cottages/p7_1_1536x1024.jpeg",
      location: "Indore, MP",
      projectsCount: "5 Projects",
    },
    {
      index: "03",
      title: "COMMERCIAL HEADQUARTERS",
      category: "Commercial",
      tagline: "Corporate offices, experience pavilions and academies driving innovation.",
      image: "/images/projects/corporate-office-kolkata/p5_0_1536x1024.jpeg",
      location: "Kolkata • Satna",
      projectsCount: "4 Projects",
    },
    {
      index: "04",
      title: "HAUTE RETAIL & ATELIERS",
      category: "Retail",
      tagline: "Bespoke bridal couture studios and boutique wellness salons.",
      image: "/images/projects/luxury-bridal-experience-studio/p16_0_1536x1024.jpeg",
      location: "New Palasia • C21 Mall",
      projectsCount: "2 Projects",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#11110F] text-[#F5F1EB] py-28 md:py-36 border-b border-[#22201E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 border-b border-[#22201E]">
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#B69A6A] font-sans">
              04 — TYPOLOGIES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#EDE7DF]">
              A COLLECTION <br />
              <span className="italic font-normal text-[#B69A6A]">OF SPACES</span>
            </h2>
          </div>

          <div className="mt-6 sm:mt-0 flex items-center space-x-4">
            <button
              onClick={() => handleScroll("left")}
              className="p-3.5 rounded-full border border-[#8A7D73]/40 text-[#EDE7DF] hover:border-[#B69A6A] hover:text-[#B69A6A] transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-3.5 rounded-full border border-[#8A7D73]/40 text-[#EDE7DF] hover:border-[#B69A6A] hover:text-[#B69A6A] transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollRef}
        className="flex space-x-6 sm:space-x-8 overflow-x-auto no-scrollbar py-12 px-6 md:px-12 scroll-smooth"
      >
        {collections.map((col) => (
          <div
            key={col.index}
            className="flex-shrink-0 w-[82vw] sm:w-[500px] md:w-[600px] group relative"
          >
            <Link
              href={`/work?category=${col.category}`}
              className="block"
              data-cursor-text="EXPLORE"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-sm bg-[#22201E] border border-[#33302C]">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Floating Top Tag */}
                <div className="absolute top-5 left-5 right-5 flex justify-between items-center text-xs tracking-widest text-[#EDE7DF]">
                  <span className="font-mono text-[#B69A6A]">{col.index}</span>
                  <span className="uppercase text-[10px] bg-black/50 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                    {col.projectsCount}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1EB] group-hover:text-[#B69A6A] transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-xs text-[#EDE7DF]/75 font-light line-clamp-2">
                    {col.tagline}
                  </p>
                  <div className="pt-2 flex items-center justify-between text-[11px] uppercase tracking-widest text-[#8A7D73]">
                    <span>{col.location}</span>
                    <span className="text-[#B69A6A] inline-flex items-center space-x-1 font-medium">
                      <span>VIEW ARCHIVE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
