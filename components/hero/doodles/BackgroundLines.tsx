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
