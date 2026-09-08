"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";

const projectTypes = [
  "Private Residence",
  "Hospitality & F&B",
  "Commercial Office",
  "Institutional / Retail",
];

const budgetRanges = [
  "Under ₹25 Lakhs",
  "₹25L — ₹75 Lakhs",
  "₹75L — ₹1.5 Crore",
  "₹1.5 Crore +",
];

export default function ContactExperience() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Private Residence",
    location: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          project_type: form.type,
          location: form.location,
          budget: form.budget,
          message: form.message,
        }),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-[#180606] text-[#f7f6ef] min-h-screen pt-36 pb-36 px-6 sm:px-10 md:px-16 select-none">
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Header */}
        <div className="border-b border-white/10 pb-10 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#dca82b]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#dca82b] font-sans font-medium">
              Initiate a Commission · Indore Studio
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#f7f6ef] tracking-tight">
            Let’s create your <span className="italic text-[#dca82b]">next sanctuary.</span>
          </h1>

          <p className="text-xs sm:text-sm font-sans text-[#d3c8bd] max-w-xl leading-relaxed font-light">
            Bring us the site, the architectural brief, or simply the feeling you wish to evoke. Our principal design team will take it forward.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Studio Direct Lines */}
          <div className="lg:col-span-5 space-y-8 p-8 sm:p-10 rounded-2xl bg-[#200808] border border-white/10 shadow-2xl">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#dca82b] font-sans font-medium">
                Direct Coordinates
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#f7f6ef]">
                Talk with our Studio.
              </h2>
            </div>

            <div className="space-y-4 text-xs font-sans">
              <a
                href="tel:+919243051598"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#180606] border border-white/10 hover:border-[#dca82b]/50 transition-colors text-[#f7f6ef]"
              >
                <Phone size={16} className="text-[#dca82b] shrink-0" />
                <span>+91 92430 51598</span>
              </a>

              <a
                href="mailto:antaaradesignstudio@gmail.com"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#180606] border border-white/10 hover:border-[#dca82b]/50 transition-colors text-[#f7f6ef]"
              >
                <Mail size={16} className="text-[#dca82b] shrink-0" />
                <span className="truncate">antaaradesignstudio@gmail.com</span>
              </a>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#180606] border border-white/10 text-[#d3c8bd]">
                <MapPin size={16} className="text-[#dca82b] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-[#f7f6ef] font-medium">Antaara Design Studio</p>
                  <p>Indore, Madhya Pradesh, India</p>
                  <p className="text-[10px] text-[#a89f91]">Projects across Indore, Kolkata, Mathura & Satna</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#2a0c0c]/60 border-l-2 border-[#dca82b] space-y-1">
              <p className="text-[10px] uppercase tracking-wider text-[#dca82b] font-medium font-sans">
                Consultation Note
              </p>
              <p className="text-xs text-[#d3c8bd] font-sans leading-relaxed">
                Our principal designer reviews every submission personally. We respond to all qualified briefs within two business days.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-2xl bg-[#200808] border border-white/10 shadow-2xl">
            {status === "success" ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#dca82b]/20 border border-[#dca82b] flex items-center justify-center mx-auto text-[#dca82b]">
                  <Check size={28} />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#dca82b] font-sans font-semibold">
                    Inquiry Received
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#f7f6ef]">
                    Thank you, <span className="italic text-[#dca82b]">{form.name}.</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans max-w-md mx-auto leading-relaxed">
                    Your brief has been delivered to Kirti Jaiswal Rajpal and the studio team. We will contact you shortly to schedule an initial consultation.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-wider text-[#d3c8bd] hover:text-[#f7f6ef] hover:border-[#dca82b]"
                >
                  Submit Another Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#dca82b] font-medium font-sans">
                    Project Brief Form
                  </span>
                  <span className="text-[10px] text-white/40 font-sans">* Required</span>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-[0.16em] text-[#d3c8bd] font-sans block">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-[#180606] border border-white/15 focus:border-[#dca82b] rounded-xl px-4 py-3 text-xs text-[#f7f6ef] placeholder-white/30 outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.16em] text-[#d3c8bd] font-sans block">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full bg-[#180606] border border-white/15 focus:border-[#dca82b] rounded-xl px-4 py-3 text-xs text-[#f7f6ef] placeholder-white/30 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.16em] text-[#d3c8bd] font-sans block">
                      Phone / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91"
                      className="w-full bg-[#180606] border border-white/15 focus:border-[#dca82b] rounded-xl px-4 py-3 text-xs text-[#f7f6ef] placeholder-white/30 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.16em] text-[#d3c8bd] font-sans block">
                    Typology
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setForm({ ...form, type })}
                        className={`px-3 py-2.5 rounded-xl border text-[10px] uppercase tracking-wider font-sans transition-all text-center ${
                          form.type === type
                            ? "bg-[#dca82b] text-[#180606] font-semibold border-[#dca82b]"
                            : "border-white/15 text-[#d3c8bd] hover:border-[#dca82b] bg-[#180606]"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.16em] text-[#d3c8bd] font-sans block">
                      Project Location / City
                    </label>
                    <input
                      type="text"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      placeholder="e.g. Indore, MP"
                      className="w-full bg-[#180606] border border-white/15 focus:border-[#dca82b] rounded-xl px-4 py-3 text-xs text-[#f7f6ef] placeholder-white/30 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.16em] text-[#d3c8bd] font-sans block">
                      Indicative Budget
                    </label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full bg-[#180606] border border-white/15 focus:border-[#dca82b] rounded-xl px-4 py-3 text-xs text-[#f7f6ef] outline-none transition-colors"
                    >
                      <option value="">Select Range</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-[0.16em] text-[#d3c8bd] font-sans block">
                    Scope & Vision Details
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your space, timeline, carpet area, and aesthetic aspirations..."
                    className="w-full bg-[#180606] border border-white/15 focus:border-[#dca82b] rounded-xl px-4 py-3 text-xs text-[#f7f6ef] placeholder-white/30 outline-none transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-400 font-sans">
                    Unable to submit brief at this moment. Please email antaaradesignstudio@gmail.com or call +91 92430 51598 directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 rounded-full bg-[#dca82b] text-[#180606] font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#edd277] transition-all shadow-xl shadow-[#dca82b]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{status === "submitting" ? "Transmitting Brief..." : "Submit Architectural Brief"}</span>
                  <ArrowUpRight size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
