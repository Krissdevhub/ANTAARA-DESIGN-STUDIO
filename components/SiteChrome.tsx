"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <main className="min-h-screen relative">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen relative">{children}</main>
      <Footer />
    </>
  );
}
