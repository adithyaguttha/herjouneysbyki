"use client";

import { CSSProperties } from "react";

interface DoodleProps {
  className?: string;
  style?: CSSProperties;
}

export default function MountainDoodle({ className = "", style }: DoodleProps) {
  return (
    <svg
      width="70"
      height="50"
      viewBox="0 0 70 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${className}`}
      style={style}
    >
      {/* Back mountain */}
      <path
        d="M15 45 L35 15 L55 45"
        stroke="var(--beige)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Front mountain */}
      <path
        d="M5 45 L25 20 L32 28 L40 18 L60 45"
        stroke="var(--terracotta)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Snow cap */}
      <path
        d="M22 24 L25 20 L28 24"
        stroke="var(--cream)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Sun/moon */}
      <circle cx="55" cy="12" r="5" fill="var(--terracotta)" opacity="0.3" />
    </svg>
  );
}
