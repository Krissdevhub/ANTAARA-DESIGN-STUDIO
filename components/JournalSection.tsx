import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function JournalSection() {
  const articles = [
    {
      num: "01",
      title: "THE ART OF LIGHT",
      date: "OCTOBER 2024",
      readTime: "4 MIN READ",
      excerpt: "Why the orientation of morning sunlight across fluted timber dictates spatial tranquility in high-density urban residences.",
      category: "ARCHITECTURAL ESSAY",
    },
    {
      num: "02",
      title: "DESIGNING FOR EVERYDAY LUXURY",
      date: "DECEMBER 2024",
      readTime: "5 MIN READ",
      excerpt: "How noble natural stones, recessed shadow gaps, and hidden storage bring effortless grace to family living.",
      category: "DESIGN ETHOS",
    },
    {
      num: "03",
      title: "WHERE CRAFTSMANSHIP MEETS EVERYDAY JOY",
      date: "FEBRUARY 2025",
      readTime: "6 MIN READ",
      excerpt: "Reflections on our collaboration with master artisans across central India to preserve handmade carpentry and brass reveals.",
      category: "MATERIAL CRAFT",
    },
  ];

  return (
    <section id="journal" className="relative w-full py-28 bg-[#F2EEE7] text-[#1B1A18] overflow-hidden border-t border-[#1B1A18]/10">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-16">
        <div className="flex items-center justify-between border-b border-[#1B1A18]/15 pb-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.35em] font-sans text-[#857B72]">
            STUDIO JOURNAL
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] font-sans text-[#857B72]">
            PERSPECTIVES & ESSAYS
          </span>
        </div>

        <div className="mb-12">
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-[#1B1A18]">
            CHRONICLES <span className="italic">& MUSINGS.</span>
          </h2>
        </div>

        {/* 3 Horizontal Editorial Entries */}
        <div className="border-t border-[#1B1A18]/15">
          {articles.map((art) => (
            <div
              key={art.num}
              className="py-8 sm:py-10 border-b border-[#1B1A18]/15 group cursor-pointer transition-colors hover:bg-[#EBE5DC]/40"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-2 text-xs font-sans text-[#857B72]">
                  <span>{art.num} // {art.category}</span>
                </div>

                <div className="md:col-span-6 space-y-2">
                  <h3 className="font-serif text-2xl sm:text-4xl font-light tracking-tight text-[#1B1A18] group-hover:text-[#A65F4F] transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#857B72] font-sans leading-relaxed max-w-xl">
                    {art.excerpt}
                  </p>
                </div>

                <div className="md:col-span-4 flex items-center justify-between md:justify-end space-x-8 text-xs font-sans text-[#857B72]">
                  <span>{art.date}</span>
                  <div className="w-8 h-8 rounded-full border border-[#1B1A18]/20 flex items-center justify-center group-hover:border-[#1B1A18] group-hover:bg-[#1B1A18] group-hover:text-[#F2EEE7] transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
