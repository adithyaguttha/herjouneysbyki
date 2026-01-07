"use client";

import { CSSProperties } from "react";

interface DoodleProps {
  className?: string;
  style?: CSSProperties;
}

export default function SunDoodle({ className = "", style }: DoodleProps) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${className}`}
      style={style}
    >
      {/* Sun center */}
      <circle
        cx="25"
        cy="25"
        r="10"
        fill="var(--terracotta)"
        opacity="0.3"
      />
      <circle
        cx="25"
        cy="25"
        r="10"
        stroke="var(--terracotta)"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Sun rays */}
      <line x1="25" y1="5" x2="25" y2="12" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="25" y1="38" x2="25" y2="45" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="5" y1="25" x2="12" y2="25" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="38" y1="25" x2="45" y2="25" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Diagonal rays */}
      <line x1="10" y1="10" x2="15" y2="15" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <line x1="35" y1="35" x2="40" y2="40" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <line x1="40" y1="10" x2="35" y2="15" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <line x1="15" y1="35" x2="10" y2="40" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}
