import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/data/journal-articles";

export const metadata = {
  title: "Journal & Perspectives | Antaara Design Studio",
  description:
    "Editorial reflections on architectural lighting, enduring materials, spatial planning, and residential luxury from Antaara Design Studio.",
};

export default function JournalPage() {
  return (
    <div className="bg-[#F5F1EB] text-[#11110F] min-h-screen pt-32 pb-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="border-b border-[#DCD0C5] pb-12 space-y-6">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#8A7D73] font-sans">
            EDITORIAL PERSPECTIVES
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-[#11110F] leading-[0.98]">
            THE STUDIO <br />
            <span className="italic font-normal text-[#B69A6A]">JOURNAL</span>
          </h1>
          <p className="max-w-2xl text-base text-[#5E5148] font-light leading-relaxed">
            Essays on spatial harmony, material longevity, lighting psychology, and
            architectural storytelling by Kirti Jaiswal Rajpal and the Antaara studio.
          </p>
        </div>

        {/* Featured First Article */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-16 border-b border-[#DCD0C5]">
          <div className="lg:col-span-7">
            <Link
              href={`/journal/${JOURNAL_ARTICLES[0].slug}`}
              className="block relative aspect-[16/10] overflow-hidden rounded-sm bg-[#EDE7DF] shadow-xl group"
              data-cursor-text="READ"
            >
              <Image
                src={JOURNAL_ARTICLES[0].image}
                alt={JOURNAL_ARTICLES[0].title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
            </Link>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center space-x-3 text-[11px] uppercase tracking-widest text-[#8A7D73]">
              <span className="text-[#B69A6A]">{JOURNAL_ARTICLES[0].category}</span>
              <span>•</span>
              <span>{JOURNAL_ARTICLES[0].date}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight hover:text-[#B69A6A] transition-colors">
              <Link href={`/journal/${JOURNAL_ARTICLES[0].slug}`}>
                {JOURNAL_ARTICLES[0].title}
              </Link>
            </h2>

            <p className="text-sm text-[#5E5148] font-light leading-relaxed">
              {JOURNAL_ARTICLES[0].summary}
            </p>

            <div className="pt-2">
              <Link
                href={`/journal/${JOURNAL_ARTICLES[0].slug}`}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#11110F] hover:text-[#B69A6A] font-medium"
              >
                <span>READ COMPLETE ESSAY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Remaining Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {JOURNAL_ARTICLES.slice(1).map((art) => (
            <article key={art.slug} className="group space-y-5">
              <Link
                href={`/journal/${art.slug}`}
                className="block relative aspect-[4/3] overflow-hidden rounded-sm bg-[#EDE7DF] shadow-md border border-[#DCD0C5]/60"
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
                  <span>{art.readTime}</span>
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
    </div>
  );
}
