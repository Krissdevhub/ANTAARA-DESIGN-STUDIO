"use client";

import { useState } from "react";
import { Check, Loader2, Lock, ShieldCheck, KeyRound, AlertCircle } from "lucide-react";

export default function SettingsManager({
  initialSettings,
}: {
  initialSettings: Record<string, any>;
}) {
  const [formData, setFormData] = useState(initialSettings);
  const [savingSettings, setSavingSettings] = useState(false);
  const [settingsSuccess, setSettingsSuccess] = useState(false);
  const [settingsError, setSettingsError] = useState("");

  // Password Change State
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updatingPassword, setUpdatingPassword] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleSettingsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingSettings(true);
    setSettingsSuccess(false);
    setSettingsError("");

    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSettingsSuccess(true);
        setTimeout(() => setSettingsSuccess(false), 4000);
      } else {
        setSettingsError(data.error || "Failed to update settings.");
      }
    } catch {
      setSettingsError("A network error occurred while saving settings.");
    } finally {
      setSavingSettings(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdatingPassword(true);
    setPasswordSuccess(false);
    setPasswordError("");

    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError("Please fill out all password fields.");
      setUpdatingPassword(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("New Password and Confirm Password do not match.");
      setUpdatingPassword(false);
      return;
    }

    if (newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters long.");
      setUpdatingPassword(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword, confirmPassword }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setPasswordSuccess(true);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setTimeout(() => setPasswordSuccess(false), 5000);
      } else {
        setPasswordError(data.error || "Failed to update password.");
      }
    } catch {
      setPasswordError("A network error occurred while updating password.");
    } finally {
      setUpdatingPassword(false);
    }
  };

  return (
    <div className="max-w-4xl space-y-12">
      {/* ──────────────────────────────────────────────────────────
          01. STUDIO IDENTITY SETTINGS
          ────────────────────────────────────────────────────────── */}
      <div className="space-y-6">
        <div className="border-b border-white/10 pb-4">
          <h1 className="font-serif text-3xl sm:text-4xl text-[#EDE7DF] font-light">
            Studio Identity & Configuration
          </h1>
          <p className="text-xs uppercase tracking-widest text-[#dca82b] mt-1 font-sans">
            EDIT PUBLIC BRAND CREDENTIALS & METADATA
          </p>
        </div>

        {settingsSuccess && (
          <div className="p-4 bg-emerald-950/50 border border-emerald-700/60 text-emerald-300 text-xs rounded-xl flex items-center space-x-2 animate-fade-in">
            <Check className="w-4 h-4 flex-shrink-0" />
            <span>Studio settings updated and saved successfully!</span>
          </div>
        )}

        {settingsError && (
          <div className="p-4 bg-red-950/50 border border-red-700/60 text-red-300 text-xs rounded-xl flex items-center space-x-2 animate-fade-in">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{settingsError}</span>
          </div>
        )}

        <form onSubmit={handleSettingsSubmit} className="space-y-6 bg-[#1a0606]/80 border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-[#c7bcb1] font-sans block">
                STUDIO BRAND NAME
              </label>
              <input
                type="text"
                value={formData.studioName || ""}
                onChange={(e) => setFormData({ ...formData, studioName: e.target.value })}
                className="w-full bg-[#120303] border border-white/15 focus:border-[#dca82b] px-4 py-2.5 text-xs text-[#EDE7DF] rounded-xl outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-[#c7bcb1] font-sans block">
                FOUNDER & PRINCIPAL
              </label>
              <input
                type="text"
                value={formData.founderName || ""}
                onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                className="w-full bg-[#120303] border border-white/15 focus:border-[#dca82b] px-4 py-2.5 text-xs text-[#EDE7DF] rounded-xl outline-none transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-wider text-[#c7bcb1] font-sans block">
              STUDIO TAGLINE
            </label>
            <input
              type="text"
              value={formData.tagline || ""}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full bg-[#120303] border border-white/15 focus:border-[#dca82b] px-4 py-2.5 text-xs text-[#EDE7DF] rounded-xl outline-none transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-wider text-[#c7bcb1] font-sans block">
              FOUNDER POSITIONING STATEMENT (CLIENT SPECIFICATION)
            </label>
            <textarea
              rows={3}
              value={formData.founderPositioning || ""}
              onChange={(e) => setFormData({ ...formData, founderPositioning: e.target.value })}
              className="w-full bg-[#120303] border border-white/15 focus:border-[#dca82b] px-4 py-2.5 text-xs text-[#EDE7DF] rounded-xl outline-none resize-none leading-relaxed transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-[#c7bcb1] font-sans block">
                PRIMARY EMAIL
              </label>
              <input
                type="email"
                value={formData.email || ""}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#120303] border border-white/15 focus:border-[#dca82b] px-4 py-2.5 text-xs text-[#EDE7DF] rounded-xl outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-[#c7bcb1] font-sans block">
                PHONE / WHATSAPP
              </label>
              <input
                type="text"
                value={formData.phone || ""}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#120303] border border-white/15 focus:border-[#dca82b] px-4 py-2.5 text-xs text-[#EDE7DF] rounded-xl outline-none transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-wider text-[#c7bcb1] font-sans block">
              PHYSICAL HEADQUARTERS
            </label>
            <input
              type="text"
              value={formData.location || ""}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full bg-[#120303] border border-white/15 focus:border-[#dca82b] px-4 py-2.5 text-xs text-[#EDE7DF] rounded-xl outline-none transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-wider text-[#c7bcb1] font-sans block">
              STUDIO ANNOUNCEMENT BANNER
            </label>
            <input
              type="text"
              value={formData.announcement || ""}
              onChange={(e) => setFormData({ ...formData, announcement: e.target.value })}
              className="w-full bg-[#120303] border border-white/15 focus:border-[#dca82b] px-4 py-2.5 text-xs text-[#EDE7DF] rounded-xl outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={savingSettings}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider px-6 py-3 bg-[#dca82b] hover:bg-[#edd277] text-[#140404] font-semibold rounded-xl transition-all shadow-lg shadow-[#dca82b]/20 cursor-pointer disabled:opacity-60"
          >
            {savingSettings ? (
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

      {/* ──────────────────────────────────────────────────────────
          02. ADMIN SECURITY & PASSWORD CHANGE (CLIENT REQUEST)
          ────────────────────────────────────────────────────────── */}
      <div className="space-y-6 pt-6 border-t border-white/10">
        <div>
          <div className="flex items-center space-x-2">
            <KeyRound className="w-5 h-5 text-[#dca82b]" />
            <h2 className="font-serif text-2xl sm:text-3xl text-[#EDE7DF] font-light">
              Admin Password & Security
            </h2>
          </div>
          <p className="text-xs uppercase tracking-widest text-[#c7bcb1] mt-1 font-sans">
            SECURE PORTAL ACCESS KEY MANAGEMENT
          </p>
        </div>

        {passwordSuccess && (
          <div className="p-4 bg-emerald-950/50 border border-emerald-700/60 text-emerald-300 text-xs rounded-xl flex items-center space-x-2 animate-fade-in">
            <Check className="w-4 h-4 flex-shrink-0" />
            <span>Admin password updated successfully! Please use your new password next time you sign in.</span>
          </div>
        )}

        {passwordError && (
          <div className="p-4 bg-red-950/50 border border-red-700/60 text-red-300 text-xs rounded-xl flex items-center space-x-2 animate-fade-in">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{passwordError}</span>
          </div>
        )}

        <form onSubmit={handlePasswordSubmit} className="space-y-6 bg-[#1a0606]/80 border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl">
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-wider text-[#c7bcb1] font-sans block font-medium">
              CURRENT PASSWORD *
            </label>
            <input
              type="password"
              required
              placeholder="Enter your current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full bg-[#120303] border border-white/15 focus:border-[#dca82b] px-4 py-2.5 text-xs text-[#EDE7DF] rounded-xl outline-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-[#c7bcb1] font-sans block font-medium">
                NEW PASSWORD * (MIN. 8 CHARS)
              </label>
              <input
                type="password"
                required
                minLength={8}
                placeholder="Enter new tough password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full bg-[#120303] border border-white/15 focus:border-[#dca82b] px-4 py-2.5 text-xs text-[#EDE7DF] rounded-xl outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-[#c7bcb1] font-sans block font-medium">
                CONFIRM NEW PASSWORD *
              </label>
              <input
                type="password"
                required
                minLength={8}
                placeholder="Re-enter new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-[#120303] border border-white/15 focus:border-[#dca82b] px-4 py-2.5 text-xs text-[#EDE7DF] rounded-xl outline-none transition-colors"
              />
            </div>
          </div>

          <div className="p-3 bg-[#120303] border border-white/10 rounded-xl text-[11px] text-[#c7bcb1] flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#dca82b] flex-shrink-0" />
            <span>Passwords are hashed server-side with PBKDF2/SHA-512 and salted. They are never transmitted or displayed in plaintext.</span>
          </div>

          <button
            type="submit"
            disabled={updatingPassword}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider px-6 py-3 bg-[#dca82b] hover:bg-[#edd277] text-[#140404] font-semibold rounded-xl transition-all shadow-lg shadow-[#dca82b]/20 cursor-pointer disabled:opacity-60"
          >
            {updatingPassword ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>UPDATING PASSWORD...</span>
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                <span>CHANGE ADMIN PASSWORD</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
