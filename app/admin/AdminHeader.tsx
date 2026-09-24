"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ArrowLeft,
  LayoutDashboard,
  FolderKanban,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import Image from "next/image";

export default function AdminHeader() {
  const pathname = usePathname();
  const router = useRouter();

  // If on login page, don't show navigation bar
  const isLoginPage = pathname === "/admin/login";

  const handleLogout = async () => {
    try {
      await fetch("/api/auth", { method: "DELETE" });
      localStorage.removeItem("antaara_admin_session");
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error("Logout failed:", err);
      router.push("/admin/login");
    }
  };

  if (isLoginPage) {
    return (
      <header className="border-b border-white/10 bg-[#140404]/90 backdrop-blur sticky top-0 z-30 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs text-[#c7bcb1] hover:text-[#dca82b] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO PUBLIC WEBSITE</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-serif text-sm tracking-widest text-[#f7f6ef]">
              ANTAARA STUDIO PORTAL
            </span>
          </div>
        </div>
      </header>
    );
  }

  const navLinks = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/projects", label: "Projects", icon: FolderKanban },
    { href: "/admin/leads", label: "Inquiries", icon: Users },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ];

  return (
    <header className="border-b border-white/10 bg-[#140404]/95 backdrop-blur-xl sticky top-0 z-30 px-6 md:px-12 py-3.5 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5">
          <Link
            href="/"
            className="inline-flex items-center space-x-1.5 text-[11px] text-[#c7bcb1] hover:text-[#dca82b] transition-colors"
            title="Go to main site"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WEBSITE</span>
          </Link>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-2.5">
            <div className="relative w-6 h-6">
              <Image
                src="/images/brand/logo.png"
                alt="Antaara"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-serif text-base tracking-wider text-[#f7f6ef]">
              ANTAARA STUDIO PORTAL
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-3 text-xs uppercase tracking-wider font-sans">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive =
              link.href === "/admin"
                ? pathname === "/admin"
                : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? "bg-[#dca82b]/15 text-[#dca82b] border border-[#dca82b]/30 font-medium"
                    : "text-[#c7bcb1] hover:text-[#f7f6ef] hover:bg-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{link.label}</span>
              </Link>
            );
          })}

          <span className="text-white/20 pl-1">|</span>

          <button
            onClick={handleLogout}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-950/30 transition-all cursor-pointer"
            title="Log out of admin session"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="text-[11px]">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
