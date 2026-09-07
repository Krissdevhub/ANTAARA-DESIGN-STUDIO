import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://antaara-design-studio.vercel.app"
  ),
  title: "Antaara Design Studio | Interior Design & Architecture",
  description:
    "Antaara Design Studio creates refined residential, commercial, hospitality and retail interiors with a focus on timeless aesthetics, functionality and thoughtful craftsmanship. Founded by Kirti Jaiswal Rajpal.",
  keywords: [
    "Antaara Design Studio",
    "Kirti Jaiswal Rajpal",
    "Luxury Interior Design Indore",
    "High-end Residential Interiors",
    "Hospitality Architecture",
    "Commercial Interiors",
    "Coffee by Di Bella Interior",
    "Hotel Pride Cottages Indore",
  ],
  authors: [{ name: "Kirti Jaiswal Rajpal" }],
  openGraph: {
    title: "Antaara Design Studio | Interior Design & Architecture",
    description:
      "Antaara Design Studio creates refined residential, commercial, hospitality and retail interiors with a focus on timeless aesthetics, functionality and thoughtful craftsmanship.",
    url: "https://antaaradesignstudio.com",
    siteName: "Antaara Design Studio",
    images: [
      {
        url: "/images/projects/coffee-by-di-bella/p3_3_1310x1201.png",
        width: 1200,
        height: 630,
        alt: "Antaara Design Studio — Spaces That Tell A Story",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jakarta.variable} ${cormorant.variable} ${cinzel.variable}`}
    >
      <body className="bg-[#F5F1EB] text-[#11110F] antialiased selection:bg-[#B69A6A] selection:text-[#11110F]">
        <Preloader />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen relative">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
