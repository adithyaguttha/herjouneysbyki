"use client";

import { Icon } from "@iconify/react";
import SearchBar from "./SearchBar";

interface BlogHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export default function BlogHeader({ searchQuery, onSearchChange }: BlogHeaderProps) {
  return (
    <header className="relative pt-20 md:pt-24 pb-8 md:pb-12">
      {/* Decorative doodles */}
      <div className="absolute top-8 left-8 md:left-16 text-[var(--beige)] opacity-60">
        <Icon icon="mdi:compass-outline" className="w-8 h-8 md:w-12 md:h-12" />
      </div>
      <div className="absolute top-12 right-8 md:right-16 text-[var(--sage)] opacity-50">
        <Icon icon="mdi:airplane" className="w-6 h-6 md:w-10 md:h-10 rotate-45" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Left side - Title and description */}
          <div className="text-center lg:text-left">
            {/* Tagline */}
            <p
              className="text-lg md:text-xl text-[var(--terracotta)] mb-2"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              Adventures await
            </p>

            {/* Title */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)] mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Travel Stories
            </h1>

            {/* Subtitle */}
            <p
              className="text-sm md:text-base text-[var(--warm-brown)]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Journeys and memories from around the world
            </p>
          </div>

          {/* Right side - Search */}
          <div className="w-full lg:w-auto lg:min-w-[300px]">
            <SearchBar value={searchQuery} onChange={onSearchChange} />
          </div>
        </div>
      </div>
    </header>
  );
}
