"use client";

import { CSSProperties } from "react";

interface DoodleProps {
  className?: string;
  style?: CSSProperties;
}

export default function StampDoodle({ className = "", style }: DoodleProps) {
  return (
    <svg
      width="65"
      height="65"
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${className}`}
      style={style}
    >
      {/* Outer circle - passport stamp style */}
      <circle
        cx="32.5"
        cy="32.5"
        r="28"
        stroke="var(--terracotta)"
        strokeWidth="2"
        strokeDasharray="4 2"
        fill="none"
        opacity="0.7"
      />
      {/* Inner circle */}
      <circle
        cx="32.5"
        cy="32.5"
        r="20"
        stroke="var(--terracotta)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      {/* Star in center */}
      <path
        d="M32.5 22 L34.5 28 L41 28 L36 32 L38 38 L32.5 34 L27 38 L29 32 L24 28 L30.5 28 Z"
        fill="var(--terracotta)"
        opacity="0.6"
      />
      {/* Decorative text arc placeholder */}
      <path
        d="M15 45 Q 32.5 55, 50 45"
        stroke="var(--terracotta)"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}
