"use client";

import { useState } from "react";
import { Sparkles, Send, CheckCircle2, MessageSquare, PhoneCall, ArrowRight } from "lucide-react";

export default function NewCommissionConcierge() {
  const [typology, setTypology] = useState("Private Luxury Residence");
  const [scale, setScale] = useState("3,000 – 6,000 Sq Ft");
  const [atmosphere, setAtmosphere] = useState("Warm Minimalist & Tactile Stone");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const typologies = [
    "Private Luxury Residence",
    "Hospitality / Dining / Café",
    "Executive Corporate Office",
    "Boutique Retail / Couture Atelier",
  ];

  const scales = [
    "Under 3,000 Sq Ft",
    "3,000 – 6,000 Sq Ft",
    "6,000 – 12,000 Sq Ft",
    "12,000+ Sq Ft Estate",
  ];

  const atmospheres = [
    "Warm Minimalist & Tactile Stone",
    "Modern Haute Elegance & Walnut",
    "Royal Grandeur & European Classical",
    "Moody Nocturnal & Ambient Velvet",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: email || "direct-brief@antaara.com",
          phone,
          project_type: `${typology} (${scale}, ${atmosphere})`,
          location: location || "Indore / Pan-India",
          message: message || `Client requested consultation for ${typology}, Scale: ${scale}, Desired Atmosphere: ${atmosphere}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Antaara Design Studio,\n\nI would like to commission an architectural consultation with Kirti Jaiswal Rajpal.\n\n• Typology: ${typology}\n• Scale: ${scale}\n• Atmosphere: ${atmosphere}\n• Name: ${name || "Client"}\n• Location: ${location || "India"}`
  );

  return (
    <section id="commission-concierge" className="relative w-full py-28 bg-[#08080A] text-[#FBFBFD] overflow-hidden border-t border-[#E6CA85]/15">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Monograph Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-[10px] uppercase font-mono tracking-[0.35em] text-[#E6CA85]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAP. VI — THE ARCHITECTURAL COMMISSION CONCIERGE</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-[#FBFBFD] tracking-tight">
            INITIATE A <span className="font-serif italic text-gold-shimmer">COMMISSION</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#9C9890] font-sans leading-relaxed">
            Antaara accepts a curated number of residential, commercial, and hospitality commissions annually to preserve exacting craftsmanship and spatial intimacy.
          </p>
        </div>

        {/* Concierge Form Container */}
        <div className="rounded-3xl glass-onyx border border-[#E6CA85]/30 p-8 md:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.9)]">
          {status === "success" ? (
            <div className="text-center py-16 space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#E6CA85]/20 border border-[#E6CA85] flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#E6CA85]" />
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl text-[#FBFBFD]">
                COMMISSION BRIEF RECEIVED
              </h3>
              <p className="max-w-md mx-auto text-xs sm:text-sm text-[#9C9890] font-sans">
                Thank you for entrusting your vision to Antaara Design Studio. Our atelier team will review your specifications and contact you within 24 hours.
              </p>
              <div className="pt-4">
                <a
                  href={`https://wa.me/919826000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#E6CA85] text-[#08080A] text-xs font-cinzel tracking-widest font-semibold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>CONTINUE ON WHATSAPP FOR IMMEDIATE DESK</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Step 1: Typology */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase text-[#E6CA85] tracking-widest block">
                  01 // SELECT PROJECT TYPOLOGY
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {typologies.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTypology(t)}
                      className={`p-4 rounded-xl text-left text-xs font-cinzel tracking-wider transition-all border ${
                        typology === t
                          ? "bg-[#16161D] border-[#E6CA85] text-[#FBFBFD] shadow-[0_0_20px_rgba(230,202,133,0.25)]"
                          : "bg-[#101014]/60 border-white/10 text-[#9C9890] hover:border-white/30"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Scale */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase text-[#E6CA85] tracking-widest block">
                  02 // ESTIMATED SPATIAL SCALE
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {scales.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setScale(s)}
                      className={`p-3.5 rounded-xl text-center text-xs font-mono tracking-wider transition-all border ${
                        scale === s
                          ? "bg-[#16161D] border-[#E6CA85] text-[#E6CA85] shadow-[0_0_20px_rgba(230,202,133,0.25)]"
                          : "bg-[#101014]/60 border-white/10 text-[#9C9890] hover:border-white/30"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Atmosphere */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase text-[#E6CA85] tracking-widest block">
                  03 // DESIRED ATMOSPHERIC MOOD
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {atmospheres.map((a) => (
                    <button
                      type="button"
                      key={a}
                      onClick={() => setAtmosphere(a)}
                      className={`p-4 rounded-xl text-left text-xs font-serif italic text-sm tracking-wide transition-all border ${
                        atmosphere === a
                          ? "bg-[#16161D] border-[#E6CA85] text-[#E6CA85] shadow-[0_0_20px_rgba(230,202,133,0.25)]"
                          : "bg-[#101014]/60 border-white/10 text-[#9C9890] hover:border-white/30"
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Client Coordinates & Inputs */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#E6CA85] tracking-widest block">
                  04 // YOUR DIRECT COORDINATES
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono text-[#9C9890] block mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Mr. Rajesh Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-[#101014] border border-white/10 text-xs text-[#FBFBFD] focus:border-[#E6CA85] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-[#9C9890] block mb-1">
                      PHONE / WHATSAPP NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98260 00000"
                      className="w-full px-4 py-3 rounded-xl bg-[#101014] border border-white/10 text-xs text-[#FBFBFD] focus:border-[#E6CA85] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-[#9C9890] block mb-1">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="client@private.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#101014] border border-white/10 text-xs text-[#FBFBFD] focus:border-[#E6CA85] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-[#9C9890] block mb-1">
                      PROJECT LOCATION / CITY
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Indore / Bhopal / Mathura"
                      className="w-full px-4 py-3 rounded-xl bg-[#101014] border border-white/10 text-xs text-[#FBFBFD] focus:border-[#E6CA85] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-[#9C9890] block mb-1">
                    SPECIFIC DESIGN ASPIRATIONS / NOTES
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about the property, family rituals, or signature requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#101014] border border-white/10 text-xs text-[#FBFBFD] focus:border-[#E6CA85] focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submission Action */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#E6CA85] to-[#D4AF37] text-[#08080A] font-cinzel text-xs uppercase tracking-[0.25em] font-semibold hover:shadow-[0_0_35px_rgba(230,202,133,0.5)] transition-all flex items-center justify-center space-x-2"
                >
                  <span>{status === "submitting" ? "TRANSMITTING BRIEF..." : "TRANSMIT COMMISSION BRIEF"}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/919826000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs font-mono tracking-widest text-[#E6CA85] hover:text-[#FBFBFD] transition-colors py-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>OR DIRECT WHATSAPP DESK →</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
