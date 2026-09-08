import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Marcellus } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import SiteChrome from "@/components/SiteChrome";
import Preloader from "@/components/Preloader";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  variable: "--font-logo",
  weight: ["400"],
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
    <html lang="en" className={`${syne.variable} ${plusJakarta.variable} ${marcellus.variable}`}>
      <body className="bg-[#180606] text-[#f7f6ef] antialiased selection:bg-[#dca82b] selection:text-[#180606]">
        <Preloader />
        <CustomCursor />
        <SmoothScroll>
          <SiteChrome>{children}</SiteChrome>
        </SmoothScroll>
      </body>
    </html>
  );
}
