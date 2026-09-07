"use client";

import { useState } from "react";
import { Lead } from "@/lib/db";
import { Search, Trash2, Mail, Phone, MapPin, DollarSign, Calendar } from "lucide-react";

export default function LeadsManager({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const filteredLeads = leads.filter((l) => {
    const matchesStatus = statusFilter === "All" || l.status === statusFilter;
    const matchesSearch =
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase()) ||
      l.phone.toLowerCase().includes(search.toLowerCase()) ||
      l.location.toLowerCase().includes(search.toLowerCase()) ||
      l.project_type.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleStatusChange = async (id: string, newStatus: Lead["status"]) => {
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setLeads(
          leads.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
        );
        if (selectedLead && selectedLead.id === id) {
          setSelectedLead({ ...selectedLead, status: newStatus });
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;

    try {
      const res = await fetch(`/api/leads/${id}`, { method: "DELETE" });
      if (res.ok) {
        setLeads(leads.filter((l) => l.id !== id));
        if (selectedLead && selectedLead.id === id) {
          setSelectedLead(null);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#22201E] pb-6">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#EDE7DF] font-light">
            Client Inquiries & Leads
          </h1>
          <p className="text-xs uppercase tracking-widest text-[#8A7D73] mt-1">
            ALL DIRECT CONSULTATION REQUESTS
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Status Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
          {["All", "New", "Contacted", "Qualified", "Closed"].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap ${
                statusFilter === st
                  ? "bg-[#B69A6A] text-[#11110F] font-medium"
                  : "bg-[#22201E]/50 text-[#8A7D73] hover:text-[#EDE7DF]"
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-[#8A7D73] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search inquiries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#22201E]/40 border border-[#22201E] focus:border-[#B69A6A] pl-9 pr-4 py-2 text-xs text-[#EDE7DF] rounded outline-none transition-colors"
          />
        </div>
      </div>

      {/* Main Grid: Leads List & Detail Pane */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Table of Inquiries */}
        <div className="lg:col-span-7 bg-[#22201E]/30 border border-[#22201E] rounded-sm overflow-hidden">
          {filteredLeads.length === 0 ? (
            <div className="py-16 text-center text-[#8A7D73] text-sm">
              No inquiries match current filters.
            </div>
          ) : (
            <div className="divide-y divide-[#22201E]">
              {filteredLeads.map((lead) => (
                <div
                  key={lead.id}
                  onClick={() => setSelectedLead(lead)}
                  className={`p-4 hover:bg-[#22201E]/60 transition-colors cursor-pointer space-y-2 ${
                    selectedLead?.id === lead.id ? "bg-[#22201E]/80 border-l-2 border-[#B69A6A]" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-[#EDE7DF] text-sm">{lead.name}</p>
                    <span
                      className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${
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
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#8A7D73]">
                    <span className="text-[#B69A6A] font-medium">{lead.project_type}</span>
                    <span>•</span>
                    <span>{lead.location}</span>
                    <span>•</span>
                    <span>{new Date(lead.created_at).toLocaleDateString()}</span>
                  </div>

                  {lead.message && (
                    <p className="text-xs text-[#8A7D73] line-clamp-1 italic">
                      “{lead.message}”
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Lead Detail Card */}
        <div className="lg:col-span-5 bg-[#22201E]/50 border border-[#22201E] p-6 rounded-sm space-y-6">
          {selectedLead ? (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-start justify-between border-b border-[#33302C] pb-4">
                <div>
                  <h3 className="font-serif text-2xl text-[#EDE7DF]">
                    {selectedLead.name}
                  </h3>
                  <p className="text-xs text-[#8A7D73] uppercase tracking-wider mt-0.5">
                    {selectedLead.project_type} Commission
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(selectedLead.id)}
                  className="p-1.5 text-[#8A7D73] hover:text-red-400 transition-colors"
                  title="Delete Lead"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Status Selector */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-[#8A7D73]">
                  UPDATE STATUS
                </label>
                <select
                  value={selectedLead.status}
                  onChange={(e) =>
                    handleStatusChange(selectedLead.id, e.target.value as any)
                  }
                  className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] text-xs text-[#EDE7DF] p-2.5 rounded outline-none"
                >
                  <option value="New">New (Unattended)</option>
                  <option value="Contacted">Contacted (In Discussion)</option>
                  <option value="Qualified">Qualified (Proposal Stage)</option>
                  <option value="Closed">Closed / Completed</option>
                </select>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center space-x-3 text-[#EDE7DF]">
                  <Mail className="w-4 h-4 text-[#B69A6A] flex-shrink-0" />
                  <a
                    href={`mailto:${selectedLead.email}`}
                    className="hover:text-[#B69A6A] font-mono text-[11px]"
                  >
                    {selectedLead.email}
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-[#EDE7DF]">
                  <Phone className="w-4 h-4 text-[#B69A6A] flex-shrink-0" />
                  <a
                    href={`tel:${selectedLead.phone}`}
                    className="hover:text-[#B69A6A] font-mono text-[11px]"
                  >
                    {selectedLead.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-[#EDE7DF]">
                  <MapPin className="w-4 h-4 text-[#B69A6A] flex-shrink-0" />
                  <span>{selectedLead.location}</span>
                </div>

                {selectedLead.budget && (
                  <div className="flex items-center space-x-3 text-[#EDE7DF]">
                    <DollarSign className="w-4 h-4 text-[#B69A6A] flex-shrink-0" />
                    <span>Budget: {selectedLead.budget}</span>
                  </div>
                )}

                <div className="flex items-center space-x-3 text-[#8A7D73]">
                  <Calendar className="w-4 h-4 text-[#8A7D73] flex-shrink-0" />
                  <span>
                    Received: {new Date(selectedLead.created_at).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Message */}
              {selectedLead.message && (
                <div className="space-y-2 border-t border-[#33302C] pt-4">
                  <p className="text-[10px] uppercase tracking-wider text-[#8A7D73]">
                    PROJECT BRIEF & INQUIRY NOTES
                  </p>
                  <p className="text-xs text-[#EDE7DF] bg-[#11110F] p-4 rounded border border-[#22201E] leading-relaxed whitespace-pre-line">
                    {selectedLead.message}
                  </p>
                </div>
              )}

              {/* Direct Actions */}
              <div className="pt-2 flex items-center space-x-3">
                <a
                  href={`mailto:${selectedLead.email}?subject=Antaara Design Studio — Consultation Inquiry`}
                  className="w-full text-center py-2.5 bg-[#B69A6A] hover:bg-[#D5C2A0] text-[#11110F] text-xs uppercase tracking-wider font-medium rounded transition-colors"
                >
                  Email Client
                </a>
                <a
                  href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  className="w-full text-center py-2.5 border border-[#33302C] hover:border-[#B69A6A] text-[#EDE7DF] hover:text-[#B69A6A] text-xs uppercase tracking-wider rounded transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <div className="py-20 text-center text-[#8A7D73] text-xs space-y-2">
              <p className="font-serif text-xl text-[#EDE7DF]">Select an Inquiry</p>
              <p>Click on any client inquiry on the left to inspect details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
