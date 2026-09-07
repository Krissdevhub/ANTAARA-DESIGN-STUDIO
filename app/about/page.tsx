import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProcessSection from "@/components/ProcessSection";

export const metadata = {
  title: "About the Studio & Founder | Antaara Design Studio",
  description:
    "Learn about Antaara Design Studio and founder Kirti Jaiswal Rajpal. An Indore-based interior design studio dedicated to thoughtful craftsmanship and timeless spaces.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#F5F1EB] text-[#11110F] min-h-screen pt-32 pb-36">
      {/* 1. About Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-20 border-b border-[#DCD0C5]">
        <div className="space-y-6">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#8A7D73] font-sans">
            THE ATELIER & PHILOSOPHY
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.98] text-[#11110F]">
            DESIGNING <br />
            <span className="italic font-normal text-[#B69A6A]">SPACES.</span> <br />
            SHAPING <br />
            EXPERIENCES.
          </h1>
        </div>
      </section>

      {/* 2. Studio Narrative & Essence */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8A7D73] font-sans">
              STUDIO ESSENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#11110F] leading-tight">
              A studio rooted in purpose, warmth, and enduring craft.
            </h2>
            <div className="h-[1px] w-16 bg-[#B69A6A] pt-1" />
          </div>

          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#22201E] font-light leading-relaxed">
            <p>
              Antaara Design Studio is a creative interior design firm based in
              Indore, dedicated to transforming spaces with innovative ideas,
              functional planning, and timeless aesthetics. We specialize in
              designing residential, commercial, hospitality, and retail interiors
              that perfectly balance style, comfort, and practicality.
            </p>
            <p className="text-sm sm:text-base text-[#5E5148]">
              Driven by a passion for excellence and attention to detail, our team
              works closely with every client to understand their vision and turn it
              into reality. From concept development to project execution, we ensure
              a seamless design journey with a strong focus on quality, creativity,
              and timely delivery.
            </p>
            <p className="text-sm sm:text-base text-[#5E5148]">
              At Antaara Design Studio, we believe every space tells a story. Our
              commitment to customer satisfaction, personalized solutions, and modern
              design principles has earned us the trust of clients across a wide
              range of projects.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Founder Spotlight (Kirti Jaiswal Rajpal) */}
      <section className="bg-[#11110F] text-[#F5F1EB] py-28 md:py-36 px-6 md:px-12 border-y border-[#22201E]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-[#22201E] shadow-2xl">
                <Image
                  src="/images/founder/kirti-jaiswal-rajpal-clean.jpg"
                  alt="Kirti Jaiswal Rajpal"
                  fill
                  priority
                  className="object-cover object-center transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#B69A6A]">
                      FOUNDER & PRINCIPAL
                    </span>
                    <p className="font-serif text-2xl text-[#EDE7DF]">
                      Kirti Jaiswal Rajpal
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#8A7D73]">INDORE</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] uppercase tracking-[0.35em] text-[#B69A6A] font-sans">
                THE WOMAN BEHIND THE SPACES
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight text-[#EDE7DF]">
                KIRTI JAISWAL <br />
                <span className="italic font-normal text-[#B69A6A]">RAJPAL</span>
              </h2>

              <p className="font-serif italic text-lg sm:text-xl text-[#B9ADA3]">
                “A space should never simply look impressive on day one. It must breathe with its inhabitants across every milestone of life.”
              </p>

              <div className="space-y-4 text-sm text-[#EDE7DF]/80 font-light leading-relaxed">
                <p>
                  As the founding visionary of Antaara Design Studio, Kirti Jaiswal
                  Rajpal has cultivated a reputation across Central India for creating
                  atmospheres of understated elegance and tailored proportion.
                </p>
                <p className="text-[#8A7D73]">
                  Her portfolio spans high-profile private commissions—including the
                  residence at Omaxe Mathura featuring artistic tributes to Dharmendra Ji
                  in collaboration with Hema Malini Ji, bespoke villas at BCM Planet and
                  Grand Exotica, and standout commercial destinations such as Hotel
                  Pride Cottages, After Hours Nightclub, and Coffee by Di Bella.
                </p>
              </div>

              <div className="pt-4 border-t border-[#22201E]">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#B69A6A]">
                  CORE VALUES: CREATIVITY • INTEGRITY • QUALITY CRAFTSMANSHIP • TIMELY EXECUTION
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Visually Impressive Sticky Process Section */}
      <ProcessSection />

      {/* 5. Closing CTA */}
      <section className="pt-24 px-6 md:px-12 max-w-7xl mx-auto text-center space-y-8">
        <h3 className="font-serif text-3xl sm:text-5xl font-light text-[#11110F]">
          Ready to begin your spatial journey?
        </h3>
        <p className="text-sm text-[#5E5148] max-w-md mx-auto font-light">
          We invite private homeowners, hospitality innovators, and commercial brands
          to schedule an introductory consultation.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] px-8 py-4 bg-[#11110F] text-[#F5F1EB] hover:bg-[#B69A6A] hover:text-[#11110F] transition-all rounded-full font-medium"
        >
          <span>START A CONVERSATION</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
