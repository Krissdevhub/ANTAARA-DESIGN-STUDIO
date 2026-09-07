import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata = {
  title: "Services & Capabilities | Antaara Design Studio",
  description:
    "Explore comprehensive interior architecture, residential villas, hospitality venues, commercial headquarters, and turnkey execution by Antaara Design Studio.",
};

export default function ServicesPage() {
  const serviceList = [
    {
      id: "residential",
      num: "01",
      title: "RESIDENTIAL DESIGN",
      headline: "Sanctuaries tailored to individual and multi-generational living.",
      description:
        "We create refined private residences, penthouses, and bespoke villas that harmoniously balance luxurious materiality with everyday family comfort. Every corner tells a personal story.",
      deliverables: [
        "Spatial layout & functional circulation planning",
        "Custom millwork, wardrobes & kitchen design",
        "Artisanal material palette (marble, timber, brass, lime plaster)",
        "Bespoke furniture design & upholstery curation",
        "Daylight-calibrated architectural lighting",
      ],
      image: "/images/studio/hero-cover.jpg",
    },
    {
      id: "hospitality",
      num: "02",
      title: "HOSPITALITY DESIGN",
      headline: "Experiential destinations that linger in memory.",
      description:
        "From boutique resort cottages to double-height specialty cafés, fine dining establishments, and high-energy nightlife lounges. We design spaces that drive guest wonder and patron loyalty.",
      deliverables: [
        "Concept branding & spatial mood curation",
        "Acoustic engineering & zoned soundscapes",
        "Custom bar, banquet & booth architectural detailing",
        "Atmospheric lighting transitions (day to midnight)",
        "Commercial kitchen coordination & back-of-house flow",
      ],
      image: "/images/studio/hotel-pride-hero.jpg",
    },
    {
      id: "commercial",
      num: "03",
      title: "COMMERCIAL & HEADQUARTERS",
      headline: "Workspaces and brand pavilions engineered for prestige.",
      description:
        "Elevating corporate culture, client experience, and brand reputation through intelligent spatial zoning, acoustic quietude, and refined executive detailing.",
      deliverables: [
        "Executive suites, boardrooms & conference theatres",
        "Automotive showroom & handover pavilion architecture",
        "Cosmetology academies & commercial beauty salons",
        "Ergonomic workstations with integrated technology",
        "Reception atriums with signature brand installations",
      ],
      image: "/images/pages/page_05.jpg",
    },
    {
      id: "turnkey",
      num: "04",
      title: "TURNKEY EXECUTION",
      headline: "End-to-end stewardship from blueprint to pristine handover.",
      description:
        "A stress-free single point of contact. We oversee vendor contracts, precision construction, material procurement, quality assurance inspections, and scheduled delivery.",
      deliverables: [
        "Dedicated project managers & on-site supervisors",
        "Transparent bill of quantities (BOQ) and timelines",
        "Direct trade relationships with premier manufacturers",
        "Rigorous quality control checkpoints at each phase",
        "White-glove deep cleaning and turnkey handover",
      ],
      image: "/images/studio/bridal-couture.jpg",
    },
  ];

  return (
    <div className="bg-[#F5F1EB] text-[#11110F] min-h-screen pt-32 pb-36">
      {/* Services Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-16 border-b border-[#DCD0C5]">
        <div className="space-y-6">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#8A7D73] font-sans">
            CAPABILITIES & EXPERTISE
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#11110F] leading-[0.98]">
            FROM CONCEPT <br />
            <span className="italic font-normal text-[#B69A6A]">TO COMPLETION</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-[#5E5148] font-light leading-relaxed">
            Antaara Design Studio provides a unified design and execution continuum.
            We blend rigorous architectural thinking with sensory interior detailing.
          </p>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto divide-y divide-[#DCD0C5]">
        {serviceList.map((svc) => (
          <div
            key={svc.id}
            id={svc.id}
            className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B69A6A]">
                DISCIPLINE {svc.num}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#11110F] leading-tight">
                {svc.title}
              </h2>

              <p className="font-serif italic text-lg text-[#5E5148]">
                “{svc.headline}”
              </p>

              <p className="text-sm sm:text-base text-[#22201E] font-light leading-relaxed">
                {svc.description}
              </p>

              <div className="pt-4 border-t border-[#DCD0C5] space-y-3">
                <p className="text-[10px] uppercase tracking-widest text-[#8A7D73]">
                  KEY DELIVERABLES
                </p>
                <ul className="space-y-2 text-xs text-[#22201E]">
                  {svc.deliverables.map((item) => (
                    <li key={item} className="flex items-start space-x-2.5">
                      <Check className="w-3.5 h-3.5 text-[#B69A6A] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#11110F] hover:text-[#B69A6A] font-medium transition-colors"
                >
                  <span>INQUIRE ABOUT {svc.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm shadow-xl bg-[#EDE7DF] border border-[#DCD0C5] group">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Closing Action */}
      <section className="pt-20 px-6 md:px-12 max-w-4xl mx-auto text-center space-y-6">
        <h3 className="font-serif text-3xl sm:text-4xl text-[#11110F] font-light">
          Have a bespoke project requirement?
        </h3>
        <p className="text-sm text-[#5E5148] font-light">
          We welcome custom commissions across India and collaborate closely with
          architects, developers, and private patrons.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] px-8 py-3.5 bg-[#11110F] text-[#F5F1EB] hover:bg-[#B69A6A] hover:text-[#11110F] transition-all rounded-full font-medium"
        >
          <span>DISCUSS YOUR COMMISSION</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
