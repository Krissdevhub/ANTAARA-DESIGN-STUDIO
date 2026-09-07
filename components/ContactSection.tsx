"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project_type: "Residential",
    location: "Indore",
    budget: "₹50 Lakhs - ₹1 Crore",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          project_type: "Residential",
          location: "Indore",
          budget: "₹50 Lakhs - ₹1 Crore",
          message: "",
        });
      } else {
        setErrorMessage(data.error || "Unable to submit inquiry. Please try again.");
      }
    } catch (err: any) {
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-inquiry" className="bg-[#11110F] text-[#F5F1EB] py-28 md:py-36 px-6 md:px-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#B69A6A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Dramatic Editorial Closing Statement */}
          <div className="lg:col-span-5 space-y-8">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#B69A6A] font-sans">
              10 — INITIATION
            </span>

            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-[1.04] text-[#EDE7DF]">
              LET’S CREATE <br />
              SOMETHING <br />
              <span className="italic font-normal text-[#B69A6A]">TIMELESS.</span>
            </h2>

            <p className="text-sm md:text-base text-[#8A7D73] font-light leading-relaxed max-w-md">
              Have a space in mind? Tell us about your lifestyle, spatial aspirations,
              and timeline. Every collaboration begins with a considered listening
              session.
            </p>

            <div className="border-t border-[#22201E] pt-8 space-y-4 text-xs text-[#8A7D73]">
              <div>
                <p className="uppercase tracking-widest text-[#EDE7DF] font-sans">
                  DIRECT CONSULTATION
                </p>
                <p className="text-base text-[#EDE7DF] font-serif pt-1">
                  Kirti Jaiswal Rajpal
                </p>
                <p className="font-sans text-[11px] text-[#B69A6A]">
                  Founder & Principal Designer
                </p>
              </div>

              <div className="pt-2">
                <p className="uppercase tracking-widest text-[#8A7D73]">STUDIO LOCATION</p>
                <p className="text-[#EDE7DF] font-sans">Indore, Madhya Pradesh, India</p>
              </div>

              <div className="pt-2">
                <p className="uppercase tracking-widest text-[#8A7D73]">INQUIRIES</p>
                <p className="text-[#EDE7DF] font-mono text-[11px]">
                  contact@antaaradesignstudio.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Form */}
          <div className="lg:col-span-7 bg-[#22201E]/40 border border-[#22201E] p-8 sm:p-12 rounded-sm backdrop-blur-sm shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#B69A6A]/15 border border-[#B69A6A] flex items-center justify-center mx-auto text-[#B69A6A]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#EDE7DF]">
                  Inquiry Received
                </h3>
                <p className="text-sm text-[#8A7D73] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Antaara Design Studio. Kirti Jaiswal Rajpal
                  and our senior design associates will review your project brief and
                  contact you within 24 to 48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-[0.25em] text-[#B69A6A] border-b border-[#B69A6A] pb-1 pt-4 hover:text-[#EDE7DF] transition-colors"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-[#EDE7DF] font-light">
                    Start a Conversation
                  </h3>
                  <p className="text-xs text-[#8A7D73] uppercase tracking-wider">
                    Please share your project details below.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-4 bg-red-950/40 border border-red-800 text-red-300 text-xs flex items-center space-x-2 rounded">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#8A7D73]">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Mr. / Ms. Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] text-[#EDE7DF] px-4 py-3 text-xs outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#8A7D73]">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] text-[#EDE7DF] px-4 py-3 text-xs outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#8A7D73]">
                      TELEPHONE / WHATSAPP *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] text-[#EDE7DF] px-4 py-3 text-xs outline-none transition-colors"
                    />
                  </div>

                  {/* Project Typology */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#8A7D73]">
                      PROJECT TYPOLOGY
                    </label>
                    <select
                      value={formData.project_type}
                      onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                      className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] text-[#EDE7DF] px-4 py-3 text-xs outline-none transition-colors"
                    >
                      <option value="Residential">Residential Villa / Apartment</option>
                      <option value="Hospitality">Hospitality / Hotel / Dining / Lounge</option>
                      <option value="Commercial">Commercial Office / Headquarters</option>
                      <option value="Retail">Retail Atelier / Bridal / Salon</option>
                      <option value="Institutional">Institutional / Educational</option>
                      <option value="Turnkey">Full Turnkey Execution</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Location */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#8A7D73]">
                      PROJECT CITY / LOCATION
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vijay Nagar, Indore"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] text-[#EDE7DF] px-4 py-3 text-xs outline-none transition-colors"
                    />
                  </div>

                  {/* Estimated Budget Range */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#8A7D73]">
                      ANTICIPATED BUDGET
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] text-[#EDE7DF] px-4 py-3 text-xs outline-none transition-colors"
                    >
                      <option value="₹25 Lakhs - ₹50 Lakhs">₹25 Lakhs - ₹50 Lakhs</option>
                      <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                      <option value="₹1 Crore - ₹2.5 Crores">₹1 Crore - ₹2.5 Crores</option>
                      <option value="₹2.5 Crores+">₹2.5 Crores +</option>
                      <option value="To be discussed">To be discussed</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-[#8A7D73]">
                    TELL US ABOUT THE SPACE
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe square footage, architecture style preference, target possession date, etc."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] text-[#EDE7DF] px-4 py-3 text-xs outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#B69A6A] hover:bg-[#D5C2A0] text-[#11110F] text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 flex items-center justify-center space-x-3 rounded-full shadow-xl"
                  data-cursor-text="SUBMIT"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>TRANSMITTING INQUIRY...</span>
                    </>
                  ) : (
                    <>
                      <span>START A CONVERSATION</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
