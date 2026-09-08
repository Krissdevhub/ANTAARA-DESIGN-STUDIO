"use client";

import { useEffect, useState } from "react";

export default function ArchitecturalPreloader() {
  const [complete, setComplete] = useState(false);
  const [expand, setExpand] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // 1. Line draws geometry & letters fade in: 0 - 900ms
    // 2. Line expands outward: 1000ms
    const expandTimer = setTimeout(() => {
      setExpand(true);
    }, 1100);

    // 3. Complete and unmount: 1500ms
    const completeTimer = setTimeout(() => {
      setComplete(true);
    }, 1450);

    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, 1850);

    return () => {
      clearTimeout(expandTimer);
      clearTimeout(completeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#F6F3ED] transition-opacity duration-700 pointer-events-none ${
        complete ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Architectural Geometry SVG */}
        <div
          className={`relative transition-transform duration-700 ease-out ${
            expand ? "scale-125 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <svg
            width="220"
            height="150"
            viewBox="0 0 220 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
          >
            {/* Outer architectural doorway frame */}
            <path
              d="M 20 140 L 20 20 Q 110 0 200 20 L 200 140"
              stroke="#27343A"
              strokeWidth="0.75"
              strokeDasharray="450"
              strokeDashoffset="450"
              className="animate-[draw_1s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            />
            {/* Interior spatial guideline */}
            <path
              d="M 50 140 L 50 45 L 170 45 L 170 140"
              stroke="#566D68"
              strokeWidth="0.5"
              strokeDasharray="300"
              strokeDashoffset="300"
              className="animate-[draw_1s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]"
            />
            {/* Horizontal baseline */}
            <line
              x1="0"
              y1="140"
              x2="220"
              y2="140"
              stroke="#27343A"
              strokeWidth="0.75"
              strokeDasharray="220"
              strokeDashoffset="220"
              className="animate-[draw_0.8s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards]"
            />
          </svg>

          {/* ANTAARA Wordmark Reveal inside Geometry */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pb-2 pointer-events-none">
            <div className="flex items-center space-x-[0.35em] overflow-hidden">
              {["A", "N", "T", "A", "A", "R", "A"].map((letter, i) => (
                <span
                  key={i}
                  className="font-serif text-lg tracking-[0.25em] text-[#27343A] font-light opacity-0 animate-[fadeLetter_0.5s_ease-out_forwards]"
                  style={{ animationDelay: `${400 + i * 80}ms` }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <span
              className="text-[8px] uppercase tracking-[0.35em] text-[#66757A] font-sans mt-1.5 opacity-0 animate-[fadeLetter_0.6s_ease-out_forwards]"
              style={{ animationDelay: "950ms" }}
            >
              DESIGN STUDIO
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes fadeLetter {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
