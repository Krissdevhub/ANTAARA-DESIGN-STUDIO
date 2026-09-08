import Image from "next/image";

export default function PhilosophySection() {
  return (
    <section className="relative w-full py-32 md:py-44 bg-[#EDEAE3] text-[#22201E] select-none border-t border-[#22201E]/8">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Eyebrow */}
        <div className="flex items-center justify-between border-b border-[#22201E]/12 pb-4 mb-20 sm:mb-24">
          <span className="text-[10px] uppercase tracking-[0.35em] font-sans text-[#6E6862]">
            08 — PHILOSOPHY
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-[#6E6862]">
            AUTHENTIC VOICE
          </span>
        </div>

        {/* Quiet, Restrained Quote (~56–72px, NOT 150px) */}
        <div className="max-w-4xl space-y-6 mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] text-[#22201E]">
            Every space has a story. <br />
            <span className="italic text-[#6E6862]">Every detail has a purpose.</span>
          </h2>
          <p className="max-w-xl text-sm text-[#6E6862] font-sans font-light leading-relaxed">
            Luxury comes from spatial restraint, tactile honesty, and craftsmanship that endures long after completion.
          </p>
        </div>

        {/* Beautiful Photograph + Client Testimonial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-[#22201E]/12">
          {/* Photograph (Col 1-7) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#22201E]/12 shadow-md bg-[#F7F5F0]">
              <Image
                src="/images/projects/vinod-dhar-residence/vinod_living.jpg"
                alt="2 BHK Residence at Bengali Square, Indore"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Authentic Testimonial Quote (Col 8-12) */}
          <div className="lg:col-span-5 space-y-6 lg:pl-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#3157D5] font-sans block">
              CLIENT TESTIMONIAL
            </span>

            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-[#22201E] font-light italic leading-snug">
              “Kirti Ji understood our vision and transformed our imagination into reality. Every space has been created with care, comfort and purpose.”
            </blockquote>

            <div className="text-[10px] uppercase tracking-[0.25em] font-sans text-[#6E6862] pt-2 border-t border-[#22201E]/10">
              — MR. VINOD DHAR, 2 BHK RESIDENCE AT BENGALI SQUARE, INDORE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
