import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import SiteChrome from "@/components/SiteChrome";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
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
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="bg-[#180606] text-[#f7f6ef] antialiased selection:bg-[#dca82b] selection:text-[#180606]">
        <CustomCursor />
        <SmoothScroll>
          <SiteChrome>{children}</SiteChrome>
        </SmoothScroll>
      </body>
    </html>
  );
}
