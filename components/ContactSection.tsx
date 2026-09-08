"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residential",
    location: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const projectTypes = [
    "Residential",
    "Commercial",
    "Hospitality",
    "Retail",
    "Institutional",
    "Other",
  ];

  const budgetRanges = [
    "₹15L – ₹35L",
    "₹35L – ₹75L",
    "₹75L – ₹1.5 Cr",
    "₹1.5 Cr+",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          location: formData.location || "Indore / India",
          budget: formData.budget,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Lead submission error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 md:py-40 bg-[#F7F5F0] text-[#22201E] select-none border-t border-[#22201E]/8"
    >
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#22201E]/12 pb-4 mb-16 sm:mb-20">
          <span className="text-[10px] uppercase tracking-[0.35em] font-sans text-[#6E6862]">
            09 — COMMISSIONS
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-[#6E6862]">
            ACCEPTING SELECTIVE WORK
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Restrained Heading (~64–80px, NOT 150px) */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] text-[#22201E]">
              LET&apos;S CREATE <br />
              <span className="italic text-[#6E6862]">SOMETHING</span> <br />
              TIMELESS.
            </h2>

            <div className="space-y-3 max-w-md">
              <p className="font-serif text-xl sm:text-2xl text-[#22201E] font-light italic">
                Have a space in mind? Tell us about it.
              </p>
              <p className="text-xs sm:text-sm text-[#6E6862] font-sans font-light leading-relaxed">
                Antaara takes on a limited number of commissions annually to ensure hands-on architectural precision, material stewardship, and intimate founder collaboration.
              </p>
            </div>

            <div className="pt-6 border-t border-[#22201E]/10 space-y-2 text-[11px] uppercase tracking-widest font-sans text-[#6E6862]">
              <div className="text-[#22201E] font-medium">ANTAARA DESIGN STUDIO</div>
              <div>INDORE, MADHYA PRADESH, INDIA</div>
              <div>
                <a href="mailto:contact@antaaradesignstudio.com" className="hover:text-[#3157D5] transition-colors">
                  contact@antaaradesignstudio.com
                </a>
              </div>
              <div>
                <a href="tel:+919826000000" className="hover:text-[#3157D5] transition-colors">
                  +91 98260 00000
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Architectural Form */}
          <div className="lg:col-span-7">
            {status === "success" ? (
              <div className="p-10 border border-[#22201E]/12 bg-[#EDEAE3] space-y-5 animate-fadeIn">
                <div className="w-10 h-10 rounded-full border border-[#22201E] flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#22201E]" />
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#22201E]">
                  Thank you.
                </h3>
                <p className="font-serif text-xl font-light italic text-[#6E6862]">
                  Your enquiry has been received.
                </p>
                <p className="text-xs sm:text-sm text-[#6E6862] font-sans font-light leading-relaxed">
                  Our founder Kirti Jaiswal Rajpal and the studio team will review your project parameters and connect with you directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Project Type */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.25em] font-sans text-[#6E6862] block">
                    PROJECT TYPOLOGY *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {projectTypes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: t })}
                        className={`py-2 px-3 text-[10px] uppercase tracking-wider font-sans border text-left transition-colors ${
                          formData.projectType === t
                            ? "bg-[#22201E] text-[#F7F5F0] border-[#22201E]"
                            : "border-[#22201E]/15 text-[#6E6862] hover:border-[#22201E]/40"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.25em] font-sans text-[#6E6862] block">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Mr. Ruchir"
                      className="w-full bg-transparent border-b border-[#22201E]/20 py-2 text-sm text-[#22201E] placeholder-[#6E6862]/40 focus:border-[#22201E] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.25em] font-sans text-[#6E6862] block">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98260 00000"
                      className="w-full bg-transparent border-b border-[#22201E]/20 py-2 text-sm text-[#22201E] placeholder-[#6E6862]/40 focus:border-[#22201E] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.25em] font-sans text-[#6E6862] block">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@domain.com"
                      className="w-full bg-transparent border-b border-[#22201E]/20 py-2 text-sm text-[#22201E] placeholder-[#6E6862]/40 focus:border-[#22201E] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.25em] font-sans text-[#6E6862] block">
                      LOCATION / CITY
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Indore / Bhopal / Mathura"
                      className="w-full bg-transparent border-b border-[#22201E]/20 py-2 text-sm text-[#22201E] placeholder-[#6E6862]/40 focus:border-[#22201E] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.25em] font-sans text-[#6E6862] block">
                    BUDGET RANGE
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetRanges.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`py-2 px-2 text-[10px] uppercase tracking-wider font-sans border text-center transition-colors ${
                          formData.budget === b
                            ? "bg-[#22201E] text-[#F7F5F0] border-[#22201E]"
                            : "border-[#22201E]/15 text-[#6E6862] hover:border-[#22201E]/40"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-[0.25em] font-sans text-[#6E6862] block">
                    TELL US ABOUT THE SPACE
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your architectural vision, timelines, or dimensions..."
                    className="w-full bg-transparent border-b border-[#22201E]/20 py-2 text-sm text-[#22201E] placeholder-[#6E6862]/40 focus:border-[#22201E] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-sans text-[#22201E] border-b-2 border-[#22201E] pb-1 hover:text-[#3157D5] hover:border-[#3157D5] transition-all disabled:opacity-50"
                  >
                    <span>{status === "submitting" ? "TRANSMITTING..." : "START A PROJECT"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
