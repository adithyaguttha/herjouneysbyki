"use client";

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
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl">
        {/* Left side - Text content */}
        <div className="col-span-1 lg:col-span-5 text-center lg:text-left order-2 lg:order-1 space-y-4">
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
          <HeroSubtitle className={`trip-subtitle trip-${id}-subtitle mx-auto lg:mx-0`}>
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
        <div className="col-span-1 lg:col-span-7 relative order-1 lg:order-2">
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
