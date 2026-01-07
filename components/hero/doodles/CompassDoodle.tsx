"use client";

import { CSSProperties } from "react";

interface DoodleProps {
  className?: string;
  style?: CSSProperties;
}

export default function CompassDoodle({ className = "", style }: DoodleProps) {
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
      {/* Outer circle */}
      <circle
        cx="25"
        cy="25"
        r="20"
        className="doodle-accent"
        strokeWidth="1.5"
      />
      {/* Inner circle */}
      <circle
        cx="25"
        cy="25"
        r="3"
        fill="var(--terracotta)"
        opacity="0.6"
      />
      {/* Compass points */}
      <path
        d="M25 8 L27 22 L25 25 L23 22 Z"
        fill="var(--terracotta)"
        opacity="0.8"
      />
      <path
        d="M25 42 L27 28 L25 25 L23 28 Z"
        fill="var(--beige)"
      />
      <path
        d="M8 25 L22 23 L25 25 L22 27 Z"
        fill="var(--beige)"
      />
      <path
        d="M42 25 L28 23 L25 25 L28 27 Z"
        fill="var(--beige)"
      />
      {/* N indicator */}
      <text
        x="25"
        y="6"
        textAnchor="middle"
        fontSize="6"
        fill="var(--terracotta)"
        fontWeight="bold"
      >
        N
      </text>
    </svg>
  );
}
