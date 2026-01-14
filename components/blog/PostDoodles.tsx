"use client";

import { Icon } from "@iconify/react";

interface PostDoodlesProps {
  destination: string;
}

// Map destinations to their themed doodles
const destinationDoodles: Record<string, { left: string; right: string }> = {
  Bali: {
    left: "mdi:temple-buddhist",
    right: "mdi:flower-tulip",
  },
  Maldives: {
    left: "mdi:fish",
    right: "mdi:palm-tree",
  },
  Switzerland: {
    left: "mdi:mountain",
    right: "mdi:snowflake",
  },
  Coonoor: {
    left: "mdi:tea",
    right: "mdi:leaf",
  },
  Japan: {
    left: "mdi:flower",
    right: "mdi:torii-gate",
  },
  Greece: {
    left: "mdi:sail-boat",
    right: "mdi:weather-sunny",
  },
  default: {
    left: "mdi:compass-outline",
    right: "mdi:map-marker",
  },
};

export default function PostDoodles({ destination }: PostDoodlesProps) {
  const doodles = destinationDoodles[destination] || destinationDoodles.default;

  return (
    <>
      {/* Left doodle */}
      <div className="blog-doodle blog-doodle-left text-[var(--terracotta)]">
        <Icon icon={doodles.left} className="w-16 h-16 lg:w-24 lg:h-24" />
      </div>

      {/* Right doodle */}
      <div className="blog-doodle blog-doodle-right text-[var(--sage)]">
        <Icon icon={doodles.right} className="w-12 h-12 lg:w-20 lg:h-20" />
      </div>
    </>
  );
}
