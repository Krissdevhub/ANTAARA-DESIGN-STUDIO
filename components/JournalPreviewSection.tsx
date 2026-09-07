import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/data/journal-articles";

export default function JournalPreviewSection() {
  const articles = [
    {
      ...JOURNAL_ARTICLES[0],
      image: "/images/projects/coffee-by-di-bella/p3_3_1310x1201.png",
    },
    {
      ...JOURNAL_ARTICLES[1],
      image: "/images/projects/bcm-planet-luxury-residence/p6_3_1536x1024.jpeg",
    },
    {
      ...JOURNAL_ARTICLES[2],
      image: "/images/projects/vinod-dhar-residence/p12_4_1536x1024.jpeg",
    },
  ];

  return (
    <section className="bg-[#F5F1EB] text-[#11110F] py-28 md:py-36 px-6 md:px-12 border-b border-[#DCD0C5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 border-b border-[#DCD0C5]">
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#8A7D73] font-sans">
              09 — PERSPECTIVES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#11110F]">
              THE STUDIO <br />
              <span className="italic font-normal text-[#B69A6A]">JOURNAL</span>
            </h2>
          </div>

          <Link
            href="/journal"
            className="mt-6 sm:mt-0 inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#11110F] hover:text-[#B69A6A] font-medium transition-colors"
          >
            <span>VIEW ALL ESSAYS</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3-Column Editorial Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-16">
          {articles.map((art) => (
            <article key={art.slug} className="group space-y-5">
              <Link
                href={`/journal/${art.slug}`}
                className="block relative aspect-[4/3] overflow-hidden rounded-sm bg-[#EDE7DF] shadow-md border border-[#DCD0C5]"
                data-cursor-text="READ"
              >
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </Link>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#8A7D73] font-sans">
                  <span>{art.category}</span>
                  <span>{art.date}</span>
                </div>

                <h3 className="font-serif text-2xl font-light leading-snug group-hover:text-[#B69A6A] transition-colors">
                  <Link href={`/journal/${art.slug}`}>{art.title}</Link>
                </h3>

                <p className="text-xs text-[#5E5148] font-light leading-relaxed line-clamp-2">
                  {art.summary}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/journal/${art.slug}`}
                    className="inline-flex items-center space-x-1.5 text-[11px] uppercase tracking-widest text-[#11110F] group-hover:text-[#B69A6A] font-medium"
                  >
                    <span>READ ESSAY</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
