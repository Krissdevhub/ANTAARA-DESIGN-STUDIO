import Link from "next/link";
import { getProjects, getLeads } from "@/lib/db";
import { FolderKanban, Users, Sparkles, Plus, ArrowUpRight } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const projects = await getProjects();
  const leads = await getLeads();

  const newLeadsCount = leads.filter((l) => l.status === "New").length;
  const featuredCount = projects.filter((p) => p.featured).length;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#22201E] pb-6">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#EDE7DF] font-light">
            Executive Studio Overview
          </h1>
          <p className="text-xs uppercase tracking-widest text-[#8A7D73] mt-1">
            ANTAARA DESIGN STUDIO PORTAL
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            href="/admin/projects"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider px-4 py-2.5 bg-[#B69A6A] text-[#11110F] font-medium rounded hover:bg-[#D5C2A0] transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Project</span>
          </Link>
          <Link
            href="/admin/leads"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider px-4 py-2.5 border border-[#33302C] text-[#EDE7DF] rounded hover:border-[#B69A6A] hover:text-[#B69A6A] transition-colors"
          >
            <Users className="w-3.5 h-3.5" />
            <span>Manage Inquiries</span>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Projects */}
        <div className="bg-[#22201E]/40 border border-[#22201E] p-6 rounded-sm space-y-3">
          <div className="flex items-center justify-between text-[#8A7D73]">
            <span className="text-[10px] uppercase tracking-widest">COMMISSIONS</span>
            <FolderKanban className="w-4 h-4 text-[#B69A6A]" />
          </div>
          <p className="font-serif text-4xl text-[#F5F1EB]">{projects.length}</p>
          <p className="text-xs text-[#8A7D73]">Published architectural projects</p>
        </div>

        {/* Featured Projects */}
        <div className="bg-[#22201E]/40 border border-[#22201E] p-6 rounded-sm space-y-3">
          <div className="flex items-center justify-between text-[#8A7D73]">
            <span className="text-[10px] uppercase tracking-widest">CURATED HIGHLIGHTS</span>
            <Sparkles className="w-4 h-4 text-[#B69A6A]" />
          </div>
          <p className="font-serif text-4xl text-[#F5F1EB]">{featuredCount}</p>
          <p className="text-xs text-[#8A7D73]">Featured on homepage</p>
        </div>

        {/* Total Leads */}
        <div className="bg-[#22201E]/40 border border-[#22201E] p-6 rounded-sm space-y-3">
          <div className="flex items-center justify-between text-[#8A7D73]">
            <span className="text-[10px] uppercase tracking-widest">INQUIRIES</span>
            <Users className="w-4 h-4 text-[#B69A6A]" />
          </div>
          <p className="font-serif text-4xl text-[#F5F1EB]">{leads.length}</p>
          <p className="text-xs text-[#8A7D73]">Total client contacts received</p>
        </div>

        {/* New Leads */}
        <div className="bg-[#22201E]/40 border border-[#22201E] p-6 rounded-sm space-y-3">
          <div className="flex items-center justify-between text-[#8A7D73]">
            <span className="text-[10px] uppercase tracking-widest">ACTION REQUIRED</span>
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          </div>
          <p className="font-serif text-4xl text-amber-300">{newLeadsCount}</p>
          <p className="text-xs text-[#8A7D73]">New unattended client leads</p>
        </div>
      </div>

      {/* Recent Inquiries Snapshot */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl text-[#EDE7DF] font-light">
            Recent Client Inquiries
          </h2>
          <Link
            href="/admin/leads"
            className="text-xs uppercase tracking-widest text-[#B69A6A] hover:underline"
          >
            VIEW ALL INQUIRIES →
          </Link>
        </div>

        <div className="bg-[#22201E]/30 border border-[#22201E] rounded-sm overflow-hidden">
          {leads.length === 0 ? (
            <div className="py-12 text-center text-[#8A7D73] text-sm">
              No inquiries submitted yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-[#22201E] text-[#8A7D73] uppercase tracking-wider bg-[#11110F]">
                  <tr>
                    <th className="py-3.5 px-4 font-medium">Client</th>
                    <th className="py-3.5 px-4 font-medium">Typology</th>
                    <th className="py-3.5 px-4 font-medium">Location</th>
                    <th className="py-3.5 px-4 font-medium">Budget</th>
                    <th className="py-3.5 px-4 font-medium">Status</th>
                    <th className="py-3.5 px-4 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#22201E]">
                  {leads.slice(0, 5).map((lead) => (
                    <tr key={lead.id} className="hover:bg-[#22201E]/40 transition-colors">
                      <td className="py-3.5 px-4">
                        <p className="font-medium text-[#EDE7DF]">{lead.name}</p>
                        <p className="text-[10px] text-[#8A7D73] font-mono">{lead.email}</p>
                      </td>
                      <td className="py-3.5 px-4 text-[#EDE7DF]">{lead.project_type}</td>
                      <td className="py-3.5 px-4 text-[#8A7D73]">{lead.location}</td>
                      <td className="py-3.5 px-4 text-[#8A7D73]">{lead.budget || "—"}</td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full ${
                            lead.status === "New"
                              ? "bg-amber-400/15 text-amber-300 border border-amber-400/30"
                              : lead.status === "Contacted"
                              ? "bg-blue-400/15 text-blue-300 border border-blue-400/30"
                              : lead.status === "Qualified"
                              ? "bg-emerald-400/15 text-emerald-300 border border-emerald-400/30"
                              : "bg-stone-700/20 text-stone-400"
                          }`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <Link
                          href="/admin/leads"
                          className="text-[#B69A6A] hover:underline"
                        >
                          Manage
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Projects Catalog Quick Link */}
      <div className="p-8 bg-gradient-to-r from-[#22201E]/60 via-[#22201E]/30 to-transparent border border-[#22201E] rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-serif text-2xl text-[#EDE7DF]">
            Architectural Project Catalog
          </h3>
          <p className="text-xs text-[#8A7D73]">
            Edit descriptions, update hero photography, change ordering or add new projects.
          </p>
        </div>
        <Link
          href="/admin/projects"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] px-6 py-3 bg-[#B69A6A] text-[#11110F] font-medium rounded hover:bg-[#D5C2A0] transition-colors"
        >
          <span>MANAGE ALL {projects.length} PROJECTS</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
