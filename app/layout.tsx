import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans, Marcellus } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import SiteChrome from "@/components/SiteChrome";
import Preloader from "@/components/Preloader";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
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
  title: "Antaara Design Studio | Interior Design & Turnkey Execution",
  description:
    "Antaara Design Studio is a premium interior design firm based in Indore, led by founder and celebrity interior designer Kirti Jaiswal Rajpal. With 15 years of experience and more than 50 completed projects across India, the studio creates bespoke residential, commercial, hospitality, healthcare and retail interiors through thoughtful space planning, refined material selection and seamless turnkey execution.",
  authors: [{ name: "Kirti Jaiswal Rajpal", url: "https://antaaradesignstudio.com" }],
  openGraph: {
    title: "Antaara Design Studio | Interior Design & Turnkey Execution",
    description:
      "Premium interior design firm led by celebrity interior designer Kirti Jaiswal Rajpal. 15 years of experience and 50+ completed projects across India.",
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
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${plusJakarta.variable} ${marcellus.variable}`}
    >
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
