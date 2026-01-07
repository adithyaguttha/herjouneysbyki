"use client";

import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
  size?: "default" | "small";
}

export default function HeroImage({
  src,
  alt,
  className = "",
  size = "default"
}: HeroImageProps) {
  const sizeClasses = size === "small"
    ? "max-w-xs md:max-w-sm"
    : "max-w-md";

  return (
    <div className={`polaroid-frame ${sizeClasses} mx-auto ${className}`}>
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={size === "small" ? "(max-width: 768px) 100vw, 320px" : "(max-width: 768px) 100vw, 400px"}
          priority
        />
      </div>
      <p
        className="text-center text-lg mt-2 text-[var(--warm-brown)]"
        style={{ fontFamily: "var(--font-caveat)" }}
      >
        {alt}
      </p>
    </div>
  );
}
