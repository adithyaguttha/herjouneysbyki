"use client";

import { CSSProperties } from "react";

interface DoodleProps {
  className?: string;
  style?: CSSProperties;
}

export default function MapPinDoodle({ className = "", style }: DoodleProps) {
  return (
    <svg
      width="40"
      height="55"
      viewBox="0 0 40 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${className}`}
      style={style}
    >
      {/* Pin shape */}
      <path
        d="M20 5 C10 5, 5 12, 5 20 C5 30, 20 48, 20 48 C20 48, 35 30, 35 20 C35 12, 30 5, 20 5 Z"
        stroke="var(--terracotta)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Inner circle */}
      <circle
        cx="20"
        cy="20"
        r="6"
        stroke="var(--terracotta)"
        strokeWidth="1.5"
        fill="var(--terracotta)"
        opacity="0.3"
      />
      {/* Center dot */}
      <circle cx="20" cy="20" r="2" fill="var(--terracotta)" />
    </svg>
  );
}
