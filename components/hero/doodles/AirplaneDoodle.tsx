"use client";

import { CSSProperties } from "react";

interface DoodleProps {
  className?: string;
  style?: CSSProperties;
}

export default function AirplaneDoodle({ className = "", style }: DoodleProps) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${className}`}
      style={style}
    >
      {/* Simple hand-drawn style airplane */}
      <path
        d="M15 35 L28 30 L38 12 L42 15 L34 32 L52 27 L54 32 L36 40 L32 52 L28 50 L30 38 L15 42 Z"
        className="doodle-accent"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Dotted trail */}
      <path
        d="M8 48 Q 11 44, 14 40"
        stroke="var(--terracotta)"
        strokeWidth="1"
        strokeDasharray="2 3"
        fill="none"
        opacity="0.6"
      />
      <circle cx="5" cy="52" r="1.5" fill="var(--terracotta)" opacity="0.4" />
    </svg>
  );
}
