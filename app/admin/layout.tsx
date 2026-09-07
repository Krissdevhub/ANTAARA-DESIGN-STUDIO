import Link from "next/link";
import { ArrowLeft, LayoutDashboard, FolderKanban, Users, Settings } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#11110F] text-[#EDE7DF] min-h-screen pt-24 pb-20">
      {/* Top Admin Sub-bar */}
      <header className="border-b border-[#22201E] bg-[#11110F]/90 backdrop-blur sticky top-0 z-30 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="inline-flex items-center space-x-1.5 text-xs text-[#8A7D73] hover:text-[#B69A6A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN TO WEBSITE</span>
            </Link>
            <span className="text-[#33302C]">|</span>
            <span className="font-serif text-lg tracking-wider text-[#F5F1EB]">
              ANTAARA STUDIO PORTAL
            </span>
          </div>

          <nav className="flex items-center space-x-6 text-xs uppercase tracking-wider font-sans">
            <Link
              href="/admin"
              className="inline-flex items-center space-x-1.5 text-[#8A7D73] hover:text-[#B69A6A] transition-colors"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/admin/projects"
              className="inline-flex items-center space-x-1.5 text-[#8A7D73] hover:text-[#B69A6A] transition-colors"
            >
              <FolderKanban className="w-3.5 h-3.5" />
              <span>Projects</span>
            </Link>
            <Link
              href="/admin/leads"
              className="inline-flex items-center space-x-1.5 text-[#8A7D73] hover:text-[#B69A6A] transition-colors"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Inquiries</span>
            </Link>
            <Link
              href="/admin/settings"
              className="inline-flex items-center space-x-1.5 text-[#8A7D73] hover:text-[#B69A6A] transition-colors"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Settings</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-8">{children}</main>
    </div>
  );
}
