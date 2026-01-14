"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { countries } from "@/data/countries";
import { getPostsByCountry } from "@/data/posts";

export default function DestinationsGrid() {
  return (
    <section className="py-16 md:py-24 bg-[var(--cream)] relative overflow-hidden">
      {/* Decorative doodles */}
      <div className="absolute top-8 left-8 md:left-12 text-[var(--sage)] opacity-30">
        <Icon icon="mdi:stamp" className="w-12 h-12 md:w-16 md:h-16 rotate-12" />
      </div>
      <div className="absolute bottom-12 right-8 md:right-12 text-[var(--terracotta)] opacity-20">
        <Icon icon="mdi:map-marker-path" className="w-14 h-14 md:w-20 md:h-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-lg md:text-xl text-[var(--terracotta)] mb-2"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            Places I've wandered
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Explore by Country
          </h2>
        </div>

        {/* Destinations Grid - 2x2 for 4 countries */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {countries.map((country, index) => {
            const storyCount = getPostsByCountry(country.slug).length;

            return (
              <Link
                key={country.slug}
                href={`/${country.slug}`}
                className="destination-card group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                style={{
                  transform: `rotate(${index % 2 === 0 ? "-1" : "1"}deg)`,
                }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src={country.heroImage}
                    alt={country.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 400px"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Story count badge */}
                  <span
                    className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur-sm text-[var(--charcoal)] text-xs rounded-full"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {storyCount} {storyCount === 1 ? "story" : "stories"}
                  </span>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3
                      className="text-xl md:text-2xl text-white mb-1"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {country.name}
                    </h3>
                    <p
                      className="text-white/80 text-sm"
                      style={{ fontFamily: "var(--font-caveat)" }}
                    >
                      {country.tagline}
                    </p>

                    {/* Hover arrow */}
                    <div className="flex items-center gap-1 mt-2 text-white/0 group-hover:text-white/90 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span
                        className="text-sm"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Explore
                      </span>
                      <Icon icon="mdi:arrow-right" className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
