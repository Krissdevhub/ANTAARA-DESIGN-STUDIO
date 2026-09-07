"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight, AlertCircle, Loader2 } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        // Save session locally as well
        localStorage.setItem("antaara_admin_session", "true");
        router.push("/admin");
      } else {
        setError(data.error || "Incorrect admin password.");
      }
    } catch (err: any) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md bg-[#22201E]/50 border border-[#22201E] p-8 sm:p-10 rounded-sm shadow-2xl backdrop-blur space-y-8">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#B69A6A]/15 border border-[#B69A6A] flex items-center justify-center mx-auto text-[#B69A6A]">
            <Lock className="w-5 h-5" />
          </div>
          <h1 className="font-serif text-3xl text-[#EDE7DF] font-light">
            Studio Portal
          </h1>
          <p className="text-xs uppercase tracking-widest text-[#8A7D73]">
            ANTAARA DESIGN STUDIO • INDORE
          </p>
        </div>

        {error && (
          <div className="p-3 bg-red-950/40 border border-red-800 text-red-300 text-xs flex items-center space-x-2 rounded">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-widest text-[#8A7D73]">
              ADMIN ACCESS KEY
            </label>
            <input
              type="password"
              required
              placeholder="Enter password (default: antaara2024)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] text-[#EDE7DF] px-4 py-3 text-xs outline-none rounded transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#B69A6A] hover:bg-[#D5C2A0] text-[#11110F] text-xs uppercase tracking-[0.25em] font-medium transition-all flex items-center justify-center space-x-2 rounded shadow-lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>VERIFYING...</span>
              </>
            ) : (
              <>
                <span>ENTER STUDIO PORTAL</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-[10px] text-[#8A7D73] uppercase tracking-widest">
          Authorized personnel only • Antaara Studio
        </p>
      </div>
    </div>
  );
}
