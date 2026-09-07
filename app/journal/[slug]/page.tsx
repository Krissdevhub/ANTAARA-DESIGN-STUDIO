import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/data/journal-articles";

interface JournalSlugProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: JournalSlugProps) {
  const { slug } = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Antaara Journal`,
    description: article.summary,
  };
}

export default async function JournalArticlePage({ params }: JournalSlugProps) {
  const { slug } = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="bg-[#F5F1EB] text-[#11110F] min-h-screen pt-32 pb-36">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-6">
        <Link
          href="/journal"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#8A7D73] hover:text-[#B69A6A] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO JOURNAL</span>
        </Link>

        <div className="flex items-center space-x-4 text-[11px] uppercase tracking-widest text-[#B69A6A] font-sans">
          <span>{article.category}</span>
          <span>•</span>
          <span className="text-[#8A7D73]">{article.date}</span>
          <span>•</span>
          <span className="text-[#8A7D73]">{article.readTime}</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#11110F] leading-tight">
          {article.title}
        </h1>

        {article.subtitle && (
          <p className="font-serif italic text-xl text-[#5E5148]">
            {article.subtitle}
          </p>
        )}

        <div className="h-[1px] w-20 bg-[#B69A6A] pt-1" />
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12">
        <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-[#EDE7DF] shadow-2xl border border-[#DCD0C5]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-8 text-base sm:text-lg text-[#22201E] font-light leading-relaxed whitespace-pre-line">
        {article.content}
      </div>

      {/* Author attribution */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 pt-16 mt-16 border-t border-[#DCD0C5] flex items-center justify-between">
        <div>
          <p className="font-serif text-xl text-[#11110F]">Kirti Jaiswal Rajpal</p>
          <p className="text-xs uppercase tracking-widest text-[#8A7D73]">
            Founder & Principal Designer, Antaara Design Studio
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] px-6 py-3 bg-[#11110F] text-[#F5F1EB] hover:bg-[#B69A6A] hover:text-[#11110F] transition-all rounded-full font-medium"
        >
          <span>WORK WITH US</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
