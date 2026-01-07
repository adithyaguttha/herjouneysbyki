"use client";

import { CSSProperties } from "react";

interface DoodleProps {
  className?: string;
  style?: CSSProperties;
}

export default function WavesDoodle({ className = "", style }: DoodleProps) {
  return (
    <svg
      width="80"
      height="40"
      viewBox="0 0 80 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${className}`}
      style={style}
    >
      {/* Layered waves */}
      <path
        d="M5 25 Q 15 18, 25 25 T 45 25 T 65 25 T 75 25"
        stroke="var(--terracotta)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M10 32 Q 20 26, 30 32 T 50 32 T 70 32"
        stroke="var(--terracotta)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M0 18 Q 10 12, 20 18 T 40 18 T 60 18 T 80 18"
        stroke="var(--sage)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
