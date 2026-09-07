import Image from "next/image";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="bg-[#FAF7F2] text-[#1C1A18] py-28 md:py-36 px-6 md:px-12 border-b border-[#E3DDD4] relative overflow-hidden">
      {/* Subtle warm glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B69A6A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-between pb-8 border-b border-[#E3DDD4]">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B69A6A]" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#8A7D73] font-sans font-medium">
              08 — CLIENT TESTIMONIAL
            </span>
          </div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A7D73] font-sans hidden sm:inline">
            AUTHENTIC COMMISSIONS • INDORE
          </span>
        </div>

        <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Client Photo & Residence Preview */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-6 items-center">
            {/* Client portrait card */}
            <div className="relative w-full max-w-[320px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#E3DDD4] group">
              <Image
                src="/images/projects/vinod-dhar-residence/vinod_dhar_clients.jpg"
                alt="Mr. Vinod Dhar and Mrs. Asha Dhar"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-[11px]">
                <span className="font-serif italic text-sm text-[#FAF7F2]">Mr. & Mrs. Dhar</span>
                <span className="text-[9px] uppercase tracking-wider text-[#D5C2A0] font-sans bg-black/40 px-2 py-0.5 rounded">Bengali Sq, Indore</span>
              </div>
            </div>

            {/* Living room preview thumbnail */}
            <div className="relative w-full max-w-[320px] aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-[#E3DDD4] group hidden sm:block">
              <Image
                src="/images/projects/vinod-dhar-residence/vinod_living.jpg"
                alt="2 BHK Studio Apartment by Antaara Design Studio"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-3 text-white text-[10px] tracking-wider uppercase font-sans">
                Completed Studio Interior
              </div>
            </div>
          </div>

          {/* Testimonial Quote & Client Details */}
          <div className="lg:col-span-8 space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-[#E3DDD4] shadow-xl relative">
            <Quote className="w-12 h-12 text-[#B69A6A]/25 absolute top-6 right-8 pointer-events-none" />

            <div className="flex items-center space-x-1 text-[#B69A6A]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-xs uppercase tracking-widest text-[#8A7D73] font-sans ml-2">
                VERIFIED RESIDENTIAL COMMISSION
              </span>
            </div>

            <blockquote className="relative z-10">
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#1C1A18] leading-[1.25] tracking-tight">
                “Kirti Ji understood our vision and transformed our imagination into reality. Every space has been created with care, comfort and purpose.”
              </p>
            </blockquote>

            <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#F0ECE7] gap-4">
              <div>
                <p className="font-serif text-2xl text-[#1C1A18] font-light">
                  Mr. Vinod Dhar & Mrs. Asha Dhar
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-[#8A7D73] font-sans pt-0.5">
                  2 BHK Residence • Bengali Square, Indore
                </p>
              </div>

              <div className="flex items-center space-x-2 text-[#B69A6A] text-xs font-sans tracking-wider uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>Handed Over & Commissioned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
