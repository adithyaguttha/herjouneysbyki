"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface CarouselSlide {
  id: number;
  name: string;
  tagline: string;
  image: string;
}

interface ImageCarouselProps {
  slides: CarouselSlide[];
  autoPlayInterval?: number;
  className?: string;
  isPlaying?: boolean;
}

export default function ImageCarousel({
  slides,
  autoPlayInterval = 5000,
  className = "",
  isPlaying = true,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-play functionality - only when isPlaying is true
  useEffect(() => {
    if (!isPlaying || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoPlayInterval, isPlaying]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ transitionDuration: "1500ms" }}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.name}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  );
}
