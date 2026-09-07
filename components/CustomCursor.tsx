"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const mouseX = useRef(-100);
  const mouseY = useRef(-100);
  const followerX = useRef(-100);
  const followerY = useRef(-100);

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia("(pointer: fine)");
    setIsPointerFine(media.matches);

    if (!media.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      setIsVisible(true);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check for interactive targets or cursor-text
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, input, select, textarea, [data-cursor]");
      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute("data-cursor-text");
        setCursorText(customText || "");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    let animationFrameId: number;
    const renderFollower = () => {
      // Lerp for smooth floating follow effect
      followerX.current += (mouseX.current - followerX.current) * 0.15;
      followerY.current += (mouseY.current - followerY.current) * 0.15;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX.current}px, ${followerY.current}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(renderFollower);
    };

    animationFrameId = requestAnimationFrame(renderFollower);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!mounted || !isPointerFine) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Tiny precise center dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#B69A6A] mix-blend-difference pointer-events-none z-10 transition-transform duration-75"
      />

      {/* Floating smooth follower ring / pill */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 rounded-full border border-[#B69A6A]/60 pointer-events-none transition-all duration-300 ease-out flex items-center justify-center ${
          cursorText
            ? "w-24 h-24 -ml-12 -mt-12 bg-[#11110F]/90 text-[#F5F1EB] border-[#B69A6A] shadow-2xl backdrop-blur-sm"
            : isHovered
            ? "w-12 h-12 -ml-6 -mt-6 bg-[#B69A6A]/15 border-[#B69A6A] scale-110"
            : "w-8 h-8 opacity-70"
        } ${isClicking ? "scale-90 opacity-90" : ""}`}
      >
        {cursorText && (
          <span className="text-[10px] uppercase font-sans tracking-[0.2em] font-medium text-center px-1 text-[#EDE7DF]">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
