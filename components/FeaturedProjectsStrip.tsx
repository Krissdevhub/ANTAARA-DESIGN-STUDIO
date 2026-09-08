"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function FeaturedProjectsStrip() {
  const projects = [
    {
      title: "COFFEE BY DI BELLA",
      category: "Hospitality",
      location: "Indore",
      src: "/images/projects/coffee-by-di-bella/p3_2_627x627.png",
      href: "/work/coffee-by-di-bella",
    },
    {
      title: "RESIDENCE AT OMAXE",
      category: "Residential",
      location: "Mathura",
      src: "/images/projects/residence-at-omaxe/p4_1_2048x1150.jpeg",
      href: "/work/residence-at-omaxe",
    },
    {
      title: "HOTEL PRIDE",
      category: "Hospitality",
      location: "Indore",
      src: "/images/projects/hotel-pride/p5_1_2048x1150.jpeg",
      href: "/work/hotel-pride",
    },
    {
      title: "TIFFANY BLUES",
      category: "Fine Dining",
      location: "Indore",
      src: "/images/projects/tiffany-blues/p6_1_2048x1150.jpeg",
      href: "/work/tiffany-blues",
    },
    {
      title: "AFTER HOURS",
      category: "Nightclub & Lounge",
      location: "Indore",
      src: "/images/projects/after-hours/p7_1_2048x1150.jpeg",
      href: "/work/after-hours",
    },
  ];

  return (
    <section id="work" className="w-full py-16 sm:py-20 bg-[#F6F3ED] text-[#27343A] select-none border-t border-[#27343A]/10">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Eyebrow Header */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#27343A]/10">
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-sans text-[#66757A]">
            <span>—</span>
            <span>FEATURED PROJECTS</span>
          </div>

          <Link
            href="/work"
            className="group inline-flex items-center space-x-1.5 text-xs font-sans text-[#27343A] hover:text-[#566D68] transition-colors"
          >
            <span>View All Projects</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* 5-Column Horizontal Strip matching Reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {projects.map((project, idx) => (
            <Link
              key={idx}
              href={project.href}
              className="group flex flex-col space-y-3 cursor-pointer"
            >
              {/* Image Frame with Subtle 3D Hover & Restrained Zoom */}
              <div className="relative w-full aspect-square overflow-hidden bg-[#ECE8DF] border border-[#27343A]/10 transition-all duration-500 group-hover:shadow-[0_12px_30px_rgba(39,52,58,0.08)]">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                />

                {/* Subtle Hover Badge */}
                <div className="absolute inset-0 bg-[#27343A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="text-[9px] uppercase tracking-[0.25em] font-sans bg-[#F6F3ED]/95 px-3 py-1.5 border border-[#27343A]/15 text-[#27343A] flex items-center space-x-1 shadow-sm">
                    <span>VIEW PROJECT</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>

              {/* Title & Metadata below */}
              <div className="space-y-1 transition-transform duration-300 group-hover:translate-x-1">
                <h3 className="font-serif text-sm sm:text-base font-normal tracking-wide text-[#27343A] line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-[11px] font-sans text-[#66757A]">
                  {project.category} • {project.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
