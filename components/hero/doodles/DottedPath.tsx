"use client";

import { CSSProperties } from "react";

interface DoodleProps {
  className?: string;
  style?: CSSProperties;
}

export default function DottedPath({ className = "", style }: DoodleProps) {
  return (
    <svg
      width="120"
      height="40"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${className}`}
      style={style}
    >
      {/* Curved dotted path */}
      <path
        d="M5 30 Q 30 10, 60 20 T 115 15"
        stroke="var(--terracotta)"
        strokeWidth="2"
        strokeDasharray="4 6"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      {/* Start point */}
      <circle cx="5" cy="30" r="3" fill="var(--terracotta)" opacity="0.5" />
      {/* End point / destination marker */}
      <circle cx="115" cy="15" r="4" fill="var(--terracotta)" />
      <circle cx="115" cy="15" r="2" fill="var(--cream)" />
    </svg>
  );
}
