"use client";

import Image from "next/image";
import type { Country } from "@/data/countries";

interface CountryHeroProps {
  country: Country;
}

export default function CountryHero({ country }: CountryHeroProps) {
  return (
    <section className="relative h-[75vh] min-h-[500px] max-h-[800px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={country.heroImage}
        alt={country.name}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Tagline */}
        <p
          className="text-white/90 text-lg md:text-xl mb-4 tracking-wide"
          style={{ fontFamily: "var(--font-caveat)" }}
        >
          {country.tagline}
        </p>

        {/* Country Name */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {country.name}
        </h1>

        {/* Decorative line */}
        <div className="mt-6 w-24 h-0.5 bg-white/50" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
