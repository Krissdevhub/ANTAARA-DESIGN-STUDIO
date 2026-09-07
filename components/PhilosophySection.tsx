import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PhilosophySection() {
  return (
    <section className="bg-[#181614] text-[#FAF7F2] py-32 md:py-40 px-6 md:px-12 border-b border-[#2A2521] relative overflow-hidden">
      {/* Subtle architectural ambient background with warm glow */}
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/images/projects/hotel-pride-cottages/p7_1_1536x1024.jpeg"
          alt="Antaara Design Philosophy"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-[#181614]/85 to-[#181614]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B69A6A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-10">
        <span className="text-[11px] uppercase tracking-[0.35em] text-[#B69A6A] font-sans">
          06 — PHILOSOPHY
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#F5F1EB] leading-[1.08]">
          EVERY SPACE <br />
          <span className="italic font-normal text-[#B69A6A]">HAS A STORY.</span>
        </h2>

        <div className="h-[1px] w-24 bg-[#B69A6A] mx-auto" />

        <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#EDE7DF] font-light leading-relaxed max-w-3xl mx-auto italic">
          “At Antaara Design Studio, every project is a story, every space is an emotion, and every detail reflects timeless craftsmanship.”
        </p>

        <p className="text-xs uppercase tracking-[0.3em] text-[#8A7D73] font-sans">
          KIRTI JAISWAL RAJPAL • FOUNDER
        </p>

        <div className="pt-6">
          <Link
            href="/about"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#F5F1EB] hover:text-[#B69A6A] border-b border-[#B69A6A] pb-1 transition-colors font-medium"
            data-cursor-text="DISCOVER"
          >
            <span>DISCOVER OUR DESIGN PRINCIPLES</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
