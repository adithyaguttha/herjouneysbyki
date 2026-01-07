"use client";

import { Icon } from "@iconify/react";
import { CSSProperties } from "react";

interface IconifyDoodleProps {
  icon: string;
  size?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export default function IconifyDoodle({
  icon,
  size = 48,
  color = "var(--terracotta)",
  className = "",
  style,
}: IconifyDoodleProps) {
  return (
    <div
      className={`iconify-doodle absolute ${className}`}
      style={style}
    >
      <Icon
        icon={icon}
        width={size}
        height={size}
        color={color}
        style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
      />
    </div>
  );
}

// Pre-defined doodle configurations for each trip
export const tripDoodles: Record<string, { icon: string; color?: string }[]> = {
  coorg: [
    { icon: "game-icons:coffee-cup", color: "var(--warm-brown)" },
    { icon: "mdi:leaf", color: "var(--sage)" },
    { icon: "mdi:weather-fog", color: "var(--beige)" },
  ],
  bali: [
    { icon: "mdi:temple-buddhist", color: "var(--terracotta)" },
    { icon: "ph:waves-bold", color: "var(--sage)" },
    { icon: "mdi:white-balance-sunny", color: "var(--terracotta)" },
  ],
  maldives: [
    { icon: "mdi:palm-tree", color: "var(--sage)" },
    { icon: "mdi:fish", color: "var(--terracotta)" },
    { icon: "mdi:weather-sunset", color: "var(--terracotta)" },
  ],
  switzerland: [
    { icon: "tabler:mountain", color: "var(--charcoal)" },
    { icon: "mdi:snowflake", color: "var(--beige)" },
    { icon: "mdi:home-variant", color: "var(--warm-brown)" },
  ],
  intro: [
    { icon: "tabler:plane-departure", color: "var(--terracotta)" },
    { icon: "ph:compass-bold", color: "var(--warm-brown)" },
    { icon: "mdi:passport", color: "var(--terracotta)" },
  ],
};

// Doodle position presets
export const doodlePositions: CSSProperties[] = [
  { top: "-8%", right: "8%", transform: "rotate(15deg)" },
  { bottom: "25%", left: "-6%", transform: "rotate(-12deg)" },
  { top: "40%", right: "-8%", transform: "rotate(8deg)" },
  { bottom: "5%", right: "30%", transform: "rotate(-8deg)" },
];
