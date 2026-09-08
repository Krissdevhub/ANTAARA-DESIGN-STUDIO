import Image from "next/image";

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="relative w-full py-28 md:py-40 bg-[#F7F5F0] text-[#22201E] select-none border-t border-[#22201E]/8"
    >
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-16">
        {/* Editorial Eyebrow */}
        <div className="flex items-center justify-between border-b border-[#22201E]/12 pb-4 mb-16 sm:mb-20">
          <span className="text-[10px] uppercase tracking-[0.35em] font-sans text-[#6E6862]">
            02 — LEADERSHIP & DIRECTION
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] font-sans text-[#6E6862]">
            FOUNDER MONOGRAPH
          </span>
        </div>

        {/* Quiet Luxury Two-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Tall Editorial Portrait as the Emotional Centre (Col 1-6) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full aspect-[3/4] max-h-[640px] max-w-[460px] overflow-hidden border border-[#22201E]/12 shadow-[0_20px_50px_rgba(34,32,30,0.06)] bg-[#EDEAE3] group">
              <Image
                src="/images/founder/kirti-portrait-seated.jpg"
                alt="Kirti Jaiswal Rajpal — Founder, Antaara Design Studio"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top transition-transform duration-[1800ms] group-hover:scale-102"
              />

              {/* Minimal caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#F7F5F0]/95 backdrop-blur-sm px-4 py-2 border border-[#22201E]/10 text-[9px] uppercase tracking-[0.25em] font-sans text-[#22201E] flex items-center justify-between">
                <span>KIRTI JAISWAL RAJPAL</span>
                <span>INDORE, INDIA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Restrained Typography & Concise Biography (Col 7-12) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.05] text-[#22201E]">
                KIRTI JAISWAL <br />
                <span className="italic text-[#6E6862]">RAJPAL</span>
              </h2>

              <span className="text-[10px] uppercase tracking-[0.35em] text-[#6E6862] font-sans block pt-1">
                FOUNDER / ANTAARA DESIGN STUDIO
              </span>
            </div>

            <div className="pt-2 border-t border-[#22201E]/12 space-y-5 max-w-lg">
              <blockquote className="font-serif text-xl sm:text-2xl text-[#22201E] font-light leading-snug italic">
                “Founder of Antaara Design Studio, specializing in elegant residential, commercial, and hospitality spaces.”
              </blockquote>

              <p className="text-sm text-[#6E6862] font-sans font-light leading-relaxed">
                Known for creative designs, quality craftsmanship, and timely execution, Kirti Jaiswal Rajpal is committed to transforming every space into a perfect blend of style and functionality. Driven by a passion for excellence, she works closely with every client to turn imagination into reality.
              </p>

              <div className="pt-4 border-t border-[#22201E]/10 flex items-center justify-between">
                <div>
                  <span className="font-serif italic text-lg sm:text-xl text-[#22201E] font-light block leading-snug">
                    THE WOMAN <br />
                    <span className="text-[#6E6862]">BEHIND THE SPACES</span>
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-[9px] uppercase tracking-[0.25em] font-sans text-[#6E6862]">
                  <span>RESIDENTIAL</span>
                  <span>•</span>
                  <span>HOSPITALITY</span>
                  <span>•</span>
                  <span>COMMERCIAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
