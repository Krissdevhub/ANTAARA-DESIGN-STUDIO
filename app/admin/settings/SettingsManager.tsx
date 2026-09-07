"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";

export default function SettingsManager({
  initialSettings,
}: {
  initialSettings: Record<string, any>;
}) {
  const [formData, setFormData] = useState(initialSettings);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-3xl space-y-8">
      <div className="border-b border-[#22201E] pb-6">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#EDE7DF] font-light">
          Studio Identity & Contact Settings
        </h1>
        <p className="text-xs uppercase tracking-widest text-[#8A7D73] mt-1">
          EDIT PUBLIC BRAND CREDENTIALS & METADATA
        </p>
      </div>

      {success && (
        <div className="p-4 bg-emerald-950/40 border border-emerald-800 text-emerald-300 text-xs rounded flex items-center space-x-2">
          <Check className="w-4 h-4" />
          <span>Studio settings updated successfully!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-wider text-[#8A7D73]">
              STUDIO BRAND NAME
            </label>
            <input
              type="text"
              value={formData.studioName || ""}
              onChange={(e) => setFormData({ ...formData, studioName: e.target.value })}
              className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] px-3.5 py-2.5 text-xs text-[#EDE7DF] rounded outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-wider text-[#8A7D73]">
              FOUNDER & PRINCIPAL
            </label>
            <input
              type="text"
              value={formData.founderName || ""}
              onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
              className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] px-3.5 py-2.5 text-xs text-[#EDE7DF] rounded outline-none"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] uppercase tracking-wider text-[#8A7D73]">
            STUDIO TAGLINE
          </label>
          <input
            type="text"
            value={formData.tagline || ""}
            onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
            className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] px-3.5 py-2.5 text-xs text-[#EDE7DF] rounded outline-none"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] uppercase tracking-wider text-[#8A7D73]">
            FOUNDER POSITIONING STATEMENT (PORTFOLIO TRUTH)
          </label>
          <textarea
            rows={3}
            value={formData.founderPositioning || ""}
            onChange={(e) => setFormData({ ...formData, founderPositioning: e.target.value })}
            className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] px-3.5 py-2.5 text-xs text-[#EDE7DF] rounded outline-none resize-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-wider text-[#8A7D73]">
              PRIMARY EMAIL
            </label>
            <input
              type="email"
              value={formData.email || ""}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] px-3.5 py-2.5 text-xs text-[#EDE7DF] rounded outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-wider text-[#8A7D73]">
              PHONE / WHATSAPP
            </label>
            <input
              type="text"
              value={formData.phone || ""}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] px-3.5 py-2.5 text-xs text-[#EDE7DF] rounded outline-none"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] uppercase tracking-wider text-[#8A7D73]">
            PHYSICAL HEADQUARTERS
          </label>
          <input
            type="text"
            value={formData.location || ""}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] px-3.5 py-2.5 text-xs text-[#EDE7DF] rounded outline-none"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] uppercase tracking-wider text-[#8A7D73]">
            STUDIO ANNOUNCEMENT BANNER
          </label>
          <input
            type="text"
            value={formData.announcement || ""}
            onChange={(e) => setFormData({ ...formData, announcement: e.target.value })}
            className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] px-3.5 py-2.5 text-xs text-[#EDE7DF] rounded outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider px-6 py-3 bg-[#B69A6A] hover:bg-[#D5C2A0] text-[#11110F] font-medium rounded transition-colors"
        >
          {saving ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>SAVING SETTINGS...</span>
            </>
          ) : (
            <>
              <Check className="w-4 h-4" />
              <span>SAVE STUDIO SETTINGS</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
