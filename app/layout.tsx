import type { Metadata } from "next";
import { Playfair_Display, Cinzel, Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import SiteChrome from "@/components/SiteChrome";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://antaara-design-studio.vercel.app"
  ),
  title: "Antaara Design Studio | Interior Architecture & Design",
  description:
    "Antaara Design Studio is an interior architecture practice based in Indore, India. Founded by Kirti Jaiswal Rajpal. Shaping residential, hospitality, and commercial spaces with architectural intention and timeless materiality.",
  authors: [{ name: "Kirti Jaiswal Rajpal" }],
  openGraph: {
    title: "Antaara Design Studio | Interior Architecture",
    description:
      "Interiors with intention. Founded by Kirti Jaiswal Rajpal in Indore, India.",
    url: "https://antaaradesignstudio.com",
    siteName: "Antaara Design Studio",
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
    <html lang="en" className={`${playfair.variable} ${cinzel.variable} ${outfit.variable}`}>
      <body className="bg-[#180606] text-[#f7f6ef] antialiased selection:bg-[#dca82b] selection:text-[#180606]">
        <CustomCursor />
        <SmoothScroll>
          <SiteChrome>{children}</SiteChrome>
        </SmoothScroll>
      </body>
    </html>
  );
}
