"use client";

import { Icon } from "@iconify/react";

export default function BlogHeader() {
  return (
    <header className="relative text-center pt-20 md:pt-24 pb-12 md:pb-16">
      {/* Decorative doodles */}
      <div className="absolute top-8 left-8 md:left-16 text-[var(--beige)] opacity-60">
        <Icon icon="mdi:compass-outline" className="w-8 h-8 md:w-12 md:h-12" />
      </div>
      <div className="absolute top-12 right-8 md:right-16 text-[var(--sage)] opacity-50">
        <Icon icon="mdi:airplane" className="w-6 h-6 md:w-10 md:h-10 rotate-45" />
      </div>
      <div className="absolute bottom-4 left-1/4 text-[var(--terracotta)] opacity-30">
        <Icon icon="mdi:map-marker" className="w-5 h-5 md:w-8 md:h-8" />
      </div>

      {/* Tagline */}
      <p
        className="text-lg md:text-xl text-[var(--terracotta)] mb-2"
        style={{ fontFamily: "var(--font-caveat)" }}
      >
        Adventures await
      </p>

      {/* Title */}
      <h1
        className="text-4xl md:text-5xl lg:text-6xl text-[var(--charcoal)] mb-4"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Travel Stories
      </h1>

      {/* Subtitle */}
      <p
        className="text-base md:text-lg text-[var(--warm-brown)] max-w-xl mx-auto"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Journeys, adventures, and memories from around the world
      </p>
    </header>
  );
}
