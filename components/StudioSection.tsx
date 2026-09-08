import Image from "next/image";

export default function StudioSection() {
  return (
    <section
      id="studio"
      className="relative w-full py-28 md:py-40 bg-[#EDEAE3] text-[#22201E] select-none overflow-hidden border-t border-[#22201E]/8"
    >
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-16">
        {/* Editorial Section Eyebrow */}
        <div className="flex items-center justify-between border-b border-[#22201E]/12 pb-4 mb-16 sm:mb-20">
          <span className="text-[10px] uppercase tracking-[0.35em] font-sans text-[#6E6862]">
            01 — THE STUDIO
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] font-sans text-[#6E6862]">
            INDORE • MADHYA PRADESH
          </span>
        </div>

        {/* Medium-sized Serif Statement (~48–64px, NOT huge, breathes beautifully) */}
        <div className="max-w-4xl space-y-6 mb-20 sm:mb-24">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.1] text-[#22201E]">
            A thoughtful approach to <br />
            how people live, gather <br />
            and <span className="italic text-[#6E6862]">experience space.</span>
          </h2>

          <p className="max-w-2xl text-sm sm:text-base text-[#6E6862] font-sans font-light leading-relaxed">
            Antaara Design Studio is an interior architecture practice based in Indore, dedicated to transforming residential, hospitality, commercial, and retail environments with functional planning, honest materiality, and timeless aesthetics.
          </p>
        </div>

        {/* Asymmetrical Editorial Photo Spread: Large primary image + smaller detail companion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Primary Interior Photograph (Col 1-8) */}
          <div className="lg:col-span-8">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#22201E]/12 shadow-lg bg-[#F7F5F0] group">
              <Image
                src="/images/projects/coffee-by-di-bella/p3_2_627x627.png"
                alt="Coffee by Di Bella Interior Atmosphere by Antaara"
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover object-center transition-transform duration-[1800ms] group-hover:scale-103"
              />
              <div className="absolute bottom-4 left-4 bg-[#F7F5F0]/95 backdrop-blur-sm px-3.5 py-1.5 border border-[#22201E]/10 text-[9px] uppercase tracking-[0.25em] font-sans text-[#22201E]">
                COFFEE BY DI BELLA • WARM HOSPITALITY DINING
              </div>
            </div>
            <div className="mt-2 text-[9px] uppercase tracking-widest text-[#6E6862] font-sans">
              ARCHITECTURAL LIGHTING & FLUTED TIMBER
            </div>
          </div>

          {/* Smaller Detail Photography & Narrative (Col 9-12) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#22201E]/12 shadow-md bg-[#F7F5F0] group">
              <Image
                src="/images/projects/bcm-planet-luxury-residence/bcm_kitchen.jpg"
                alt="Tactile Natural Stone & Fluted Joinery"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover object-center transition-transform duration-[1800ms] group-hover:scale-103"
              />
              <div className="absolute bottom-3 left-3 bg-[#F7F5F0]/95 px-3 py-1 border border-[#22201E]/10 text-[9px] uppercase tracking-[0.2em] font-sans text-[#22201E]">
                DETAIL // NATURAL STONE
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs text-[#6E6862] font-sans font-light leading-relaxed border-t border-[#22201E]/12">
              <p>
                Driven by a passion for excellence, we collaborate intimately with every client to translate personal rituals into tailored architecture.
              </p>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#22201E] font-medium pt-1">
                KIRTI JAISWAL RAJPAL • FOUNDER
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
