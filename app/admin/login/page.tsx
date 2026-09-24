"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, ArrowRight, AlertCircle, Loader2, ShieldCheck, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get("from") || "/admin";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        localStorage.setItem("antaara_admin_session", "true");
        router.push(returnTo);
        router.refresh();
      } else {
        setError(data.error || "Invalid Admin ID or Password.");
      }
    } catch {
      setError("An unexpected network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-12 px-4 sm:px-6">
      <div className="w-full max-w-md bg-[#180606]/95 border border-[#dca82b]/30 p-8 sm:p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl space-y-8 relative overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#dca82b]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="text-center space-y-3 relative z-10">
          <div className="relative w-14 h-14 mx-auto mb-2">
            <Image
              src="/images/brand/logo.png"
              alt="Antaara Emblem"
              fill
              priority
              className="object-contain drop-shadow-[0_0_15px_rgba(220,168,43,0.4)]"
            />
          </div>

          <h1 className="font-serif text-3xl text-[#f7f6ef] font-light tracking-wide">
            Studio Portal
          </h1>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#dca82b] font-sans font-medium">
            ANTAARA DESIGN STUDIO · EXECUTIVE ACCESS
          </p>
        </div>

        {error && (
          <div className="p-3.5 bg-red-950/70 border border-red-700/60 text-red-200 text-xs flex items-center space-x-2.5 rounded-xl animate-fade-in">
            <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5 relative z-10">
          <div className="space-y-1.5">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#c7bcb1] font-sans font-medium">
              ADMIN IDENTIFIER
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#dca82b]/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                autoComplete="username"
                placeholder="Enter Admin ID"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-[#120303] border border-white/15 focus:border-[#dca82b] text-[#f7f6ef] pl-10 pr-4 py-3 text-xs outline-none rounded-xl transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#c7bcb1] font-sans font-medium">
              ACCESS KEY / PASSWORD
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#dca82b]/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                autoComplete="current-password"
                placeholder="Enter Secure Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#120303] border border-white/15 focus:border-[#dca82b] text-[#f7f6ef] pl-10 pr-4 py-3 text-xs outline-none rounded-xl transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#dca82b] hover:bg-[#edd277] text-[#140404] text-xs uppercase tracking-[0.22em] font-semibold transition-all flex items-center justify-center space-x-2 rounded-xl shadow-lg shadow-[#dca82b]/25 cursor-pointer disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>AUTHENTICATING...</span>
              </>
            ) : (
              <>
                <span>ENTER STUDIO PORTAL</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-[#a89f91] font-sans">
          <span className="flex items-center gap-1.5 text-[#dca82b]">
            <ShieldCheck className="w-3.5 h-3.5" />
            End-to-End Encrypted
          </span>
          <Link href="/" className="hover:text-[#f7f6ef] transition-colors">
            Return to Website →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[75vh] flex items-center justify-center text-[#dca82b] text-xs font-mono tracking-widest">
          AUTHENTICATING CREDENTIALS...
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
