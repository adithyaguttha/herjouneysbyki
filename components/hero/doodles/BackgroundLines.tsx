"use client";

interface BackgroundLinesProps {
  className?: string;
}

export default function BackgroundLines({ className = "" }: BackgroundLinesProps) {
  return (
    <svg
      className={`bg-line ${className}`}
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Organic curved lines - editorial/journal style */}
      <path
        d="M-50 200 Q 200 150, 400 250 T 800 200 T 1200 300 T 1500 250"
        className="doodle-line"
        strokeDasharray="1500"
        strokeDashoffset="1500"
      />
      <path
        d="M-100 450 Q 150 400, 350 500 T 750 450 T 1150 550 T 1550 500"
        className="doodle-line"
        strokeDasharray="1500"
        strokeDashoffset="1500"
      />
      <path
        d="M-50 700 Q 250 650, 450 750 T 850 700 T 1250 800 T 1600 750"
        className="doodle-line"
        strokeDasharray="1500"
        strokeDashoffset="1500"
      />

      {/* Small decorative dots */}
      <circle cx="200" cy="150" r="4" fill="var(--beige)" className="doodle-dot" />
      <circle cx="600" cy="350" r="3" fill="var(--beige)" className="doodle-dot" />
      <circle cx="1000" cy="250" r="5" fill="var(--beige)" className="doodle-dot" />
      <circle cx="1200" cy="550" r="4" fill="var(--beige)" className="doodle-dot" />
      <circle cx="400" cy="650" r="3" fill="var(--beige)" className="doodle-dot" />
      <circle cx="800" cy="800" r="4" fill="var(--terracotta)" className="doodle-dot" opacity="0.5" />
    </svg>
  );
}
