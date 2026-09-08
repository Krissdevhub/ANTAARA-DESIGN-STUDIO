"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<"default" | "explore" | "view" | "nav">("default");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest("a[href*='/work/'], [data-cursor='view']");
      const navEl = target.closest("nav, button, a, [role='button'], input, select, textarea");

      if (projectEl) {
        setCursorType("view");
      } else if (navEl) {
        setCursorType("nav");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-transform duration-75 ease-out hidden lg:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {cursorType === "default" && (
        <div className="w-2.5 h-2.5 rounded-full bg-[#dca82b] shadow-[0_0_12px_rgba(220,168,43,0.6)] transition-all duration-200" />
      )}

      {cursorType === "nav" && (
        <div className="w-7 h-7 rounded-full border border-[#dca82b] bg-[#dca82b]/15 scale-110 shadow-[0_0_15px_rgba(220,168,43,0.3)] transition-all duration-200" />
      )}

      {cursorType === "view" && (
        <div className="px-3 py-1 rounded-full bg-[#dca82b] text-[#180606] text-[9px] font-semibold uppercase tracking-[0.2em] font-sans shadow-xl flex items-center gap-1 whitespace-nowrap animate-fade-in scale-110">
          <span>VIEW</span>
          <span>→</span>
        </div>
      )}
    </div>
  );
}
