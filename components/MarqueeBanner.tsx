export default function MarqueeBanner() {
  const items = [
    "ANTAARA DESIGN STUDIO",
    "SPACES THAT TELL A STORY",
    "RESIDENTIAL SANCTUARIES",
    "HOSPITALITY DESTINATIONS",
    "COMMERCIAL HEADQUARTERS",
    "KIRTI JAISWAL RAJPAL",
    "INDORE • INDIA",
  ];

  return (
    <div className="w-full bg-[#11110F] text-[#EDE7DF] py-6 border-y border-[#22201E] overflow-hidden whitespace-nowrap select-none relative">
      <div className="flex animate-marquee space-x-12 items-center">
        {items.concat(items).concat(items).map((text, i) => (
          <div key={i} className="flex items-center space-x-8">
            <span className="font-serif text-lg sm:text-xl md:text-2xl font-light tracking-[0.2em] text-[#EDE7DF]/80 hover:text-[#B69A6A] transition-colors">
              {text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6A]" />
          </div>
        ))}
      </div>
    </div>
  );
}
