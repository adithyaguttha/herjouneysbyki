"use client";

import { Icon } from "@iconify/react";
import type { Country } from "@/data/countries";

interface CountryAboutProps {
  country: Country;
  storyCount: number;
}

export default function CountryAbout({ country, storyCount }: CountryAboutProps) {
  return (
    <section className="py-12 md:py-16 bg-[var(--cream)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Story count badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
            <Icon icon="mdi:book-open-page-variant" className="w-5 h-5 text-[var(--terracotta)]" />
            <span
              className="text-sm text-[var(--warm-brown)]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {storyCount} {storyCount === 1 ? "story" : "stories"} from {country.name}
            </span>
          </div>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-[var(--warm-brown)] leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {country.description}
          </p>

          {/* Decorative element */}
          <div className="mt-8 flex justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--terracotta)]/30" />
            <span className="w-2 h-2 rounded-full bg-[var(--terracotta)]/50" />
            <span className="w-2 h-2 rounded-full bg-[var(--terracotta)]/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
