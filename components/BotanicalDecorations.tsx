export function BotanicalBranch({ className = "w-48 h-48 text-[#CFA8A1]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 180 C50 150, 70 120, 110 80 C135 55, 160 35, 185 20"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.6"
      />
      {/* Leaf 1 */}
      <path
        d="M80 110 C85 95, 105 90, 115 105 C105 115, 90 120, 80 110 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Leaf 2 */}
      <path
        d="M110 80 C115 65, 135 60, 145 75 C135 85, 120 90, 110 80 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Leaf 3 */}
      <path
        d="M140 55 C150 42, 168 45, 172 58 C160 66, 148 65, 140 55 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Leaf 4 (Opposite) */}
      <path
        d="M95 95 C82 85, 80 68, 92 64 C102 74, 104 88, 95 95 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Leaf 5 (Opposite) */}
      <path
        d="M125 70 C112 60, 110 43, 122 39 C132 49, 134 63, 125 70 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Leaf tip */}
      <path
        d="M175 28 C185 18, 192 12, 185 20 C178 28, 172 35, 175 28 Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
    </svg>
  );
}

export function OrganicCurve({ className = "w-full h-32 text-[#E6D4CC]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 60 C300 120, 900 0, 1200 60"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        strokeOpacity="0.4"
      />
    </svg>
  );
}

export function DelicateFlourish({ className = "w-24 h-12 text-[#CFA8A1]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 20 Q30 5, 50 20 T90 20"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.5"
      />
      <circle cx="50" cy="20" r="2.5" fill="currentColor" fillOpacity="0.5" />
    </svg>
  );
}
