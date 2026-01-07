"use client";

import Image from "next/image";
import HeroTitle from "./HeroTitle";
import HeroImage from "./HeroImage";
import HeroSubtitle from "./HeroSubtitle";
import IconifyDoodle, { tripDoodles, doodlePositions } from "./doodles/IconifyDoodle";

interface HeroSceneProps {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image: string;
  doodleKey: string;
  isFirst: boolean;
  className?: string;
}

export default function HeroScene({
  id,
  name,
  tagline,
  description,
  image,
  doodleKey,
  isFirst,
  className = "",
}: HeroSceneProps) {
  const doodles = tripDoodles[doodleKey] || tripDoodles.intro;

  return (
    <div
      className={`
        absolute inset-0 flex items-center justify-center px-4 md:px-8
        ${isFirst ? "opacity-100" : "opacity-0"}
        ${className}
      `}
    >
      {/* ===== MOBILE LAYOUT: Single polaroid card with text inside ===== */}
      <div className="lg:hidden flex justify-center w-full">
        <div className="polaroid-frame-mobile max-w-sm w-full relative">
          {/* Image inside polaroid */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 90vw"
            />
          </div>

          {/* Text content inside polaroid's white padding area */}
          <div className="p-4 text-center space-y-3">
            {/* Trip name */}
            <HeroTitle className={`trip-title trip-${id}-title !text-2xl`}>
              {name}
            </HeroTitle>

            {/* Tagline */}
            <p
              className={`trip-tagline trip-${id}-tagline text-lg text-[var(--terracotta)]`}
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              "{tagline}"
            </p>

            {/* Description */}
            <p
              className={`trip-subtitle trip-${id}-subtitle text-sm text-[var(--warm-brown)] leading-relaxed`}
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {description}
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                className="
                  px-6 py-2.5 bg-[var(--terracotta)] text-white text-sm
                  rounded-full hover:bg-[var(--terracotta-dark)]
                  transition-colors duration-300 font-medium
                "
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Explore {name}
              </button>
            </div>
          </div>

          {/* Doodles around mobile card */}
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            {doodles.slice(0, 2).map((doodle, idx) => (
              <IconifyDoodle
                key={`${doodleKey}-mobile-${idx}`}
                icon={doodle.icon}
                color={doodle.color}
                size={35}
                className={`trip-doodle trip-${id}-doodle`}
                style={idx === 0 ? { top: "-15px", right: "-15px" } : { bottom: "20%", left: "-20px" }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT: Original 2-column grid ===== */}
      <div className="hidden lg:grid container mx-auto grid-cols-12 gap-12 items-center max-w-7xl">
        {/* Left side - Text content */}
        <div className="col-span-5 text-left space-y-4">
          {/* Trip name */}
          <HeroTitle className={`trip-title trip-${id}-title`}>
            {name}
          </HeroTitle>

          {/* Tagline */}
          <p
            className={`trip-tagline trip-${id}-tagline text-xl md:text-2xl text-[var(--terracotta)]`}
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            "{tagline}"
          </p>

          {/* Description */}
          <HeroSubtitle className={`trip-subtitle trip-${id}-subtitle`}>
            {description}
          </HeroSubtitle>

          {/* CTA Button */}
          <div className="pt-4">
            <button
              className="
                px-8 py-3 bg-[var(--terracotta)] text-white
                rounded-full hover:bg-[var(--terracotta-dark)]
                transition-colors duration-300
                text-base font-medium
              "
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Explore {name}
            </button>
          </div>
        </div>

        {/* Right side - Image with doodles */}
        <div className="col-span-7 relative">
          <HeroImage
            src={image}
            alt={name}
            size="small"
            className={`trip-image-${id}`}
          />

          {/* Doodles positioned around image */}
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            {doodles.map((doodle, idx) => (
              <IconifyDoodle
                key={`${doodleKey}-${idx}`}
                icon={doodle.icon}
                color={doodle.color}
                size={40 + idx * 5}
                className={`trip-doodle trip-${id}-doodle`}
                style={doodlePositions[idx % doodlePositions.length]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
