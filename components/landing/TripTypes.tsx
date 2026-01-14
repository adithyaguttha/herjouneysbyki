"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

const tripTypesData = [
  {
    name: "Adventure",
    icon: "mdi:hiking",
    tagline: "For the thrill seekers",
    color: "var(--terracotta)",
  },
  {
    name: "Relaxation",
    icon: "mdi:beach",
    tagline: "Unwind & recharge",
    color: "var(--sage)",
  },
  {
    name: "Culture",
    icon: "mdi:temple-buddhist",
    tagline: "Dive into traditions",
    color: "var(--terracotta)",
  },
  {
    name: "Food",
    icon: "mdi:food",
    tagline: "Taste the world",
    color: "var(--sage)",
  },
  {
    name: "Nature",
    icon: "mdi:pine-tree",
    tagline: "Connect with earth",
    color: "var(--terracotta)",
  },
  {
    name: "Wellness",
    icon: "mdi:spa",
    tagline: "Heal mind & body",
    color: "var(--sage)",
  },
];

export default function TripTypes() {
  return (
    <section className="py-16 md:py-24 bg-[var(--cream)] relative overflow-hidden">
      {/* Decorative doodle */}
      <div className="absolute top-12 left-8 text-[var(--beige)] opacity-40">
        <Icon icon="mdi:heart-outline" className="w-10 h-10 md:w-14 md:h-14" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-lg md:text-xl text-[var(--terracotta)] mb-2"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            What kind of adventure?
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Find Your Vibe
          </h2>
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-4" style={{ width: "max-content" }}>
            {tripTypesData.map((tripType) => (
              <TripTypeCard key={tripType.name} {...tripType} />
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {tripTypesData.map((tripType) => (
            <TripTypeCard key={tripType.name} {...tripType} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TripTypeCardProps {
  name: string;
  icon: string;
  tagline: string;
  color: string;
}

function TripTypeCard({ name, icon, tagline, color }: TripTypeCardProps) {
  return (
    <Link
      href={`/blog?tripType=${encodeURIComponent(name)}`}
      className="trip-type-card group block bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border-2 border-[var(--beige)] hover:border-[var(--terracotta)] min-w-[160px] md:min-w-0"
    >
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon
            icon={icon}
            className="w-8 h-8"
            style={{ color }}
          />
        </div>

        {/* Name */}
        <h3
          className="text-lg text-[var(--charcoal)] mb-1"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {name}
        </h3>

        {/* Tagline */}
        <p
          className="text-sm text-[var(--warm-brown)]"
          style={{ fontFamily: "var(--font-caveat)" }}
        >
          {tagline}
        </p>

        {/* Hover arrow */}
        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Icon
            icon="mdi:arrow-right"
            className="w-5 h-5 text-[var(--terracotta)]"
          />
        </div>
      </div>
    </Link>
  );
}
