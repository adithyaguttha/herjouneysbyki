"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import ScatteredTitle from "./ScatteredTitle";
import ImageCarousel from "./ImageCarousel";
import Navbar from "../Navbar";
import BottomNav from "../BottomNav";

// Carousel slides data - 6 personal travel images
const carouselSlides = [
  {
    id: 1,
    name: "Wander",
    tagline: "Slow travel, warm memories",
    image: "/images/hero/IMG_2151.jpeg",
  },
  {
    id: 2,
    name: "Coonoor",
    tagline: "Where tea gardens kiss the clouds",
    image: "/images/hero/IMG_0314.jpeg",
  },
  {
    id: 3,
    name: "Chiang Mai",
    tagline: "Culture, markets & mountain calm",
    image: "/images/hero/IMG_1837.jpeg",
  },
  {
    id: 4,
    name: "Hallstatt",
    tagline: "Where dreams touch the Alps",
    image: "/images/hero/IMG_2967.jpeg",
  },
  {
    id: 5,
    name: "Discover",
    tagline: "Every corner tells a story",
    image: "/images/hero/IMG_4959.jpeg",
  },
  {
    id: 6,
    name: "Explore",
    tagline: "Journeys made for two",
    image: "/images/hero/IMG_5712.jpeg",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const bottomNavRef = useRef<HTMLElement>(null);
  const [introComplete, setIntroComplete] = useState(false);

  // Hook 1: Initial animation setup
  const { contextSafe } = useGSAP(
    () => {
      // Set initial states
      gsap.set(".intro-button", { autoAlpha: 0, y: 20 });
    },
    { scope: containerRef }
  );

  // Handle intro animation completion
  const handleIntroComplete = contextSafe(() => {
    const tl = gsap.timeline({
      onComplete: () => setIntroComplete(true),
    });

    // Fade in button
    tl.to(".intro-button", {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    // Navbar slides down
    tl.to(navbarRef.current, {
      y: "0%",
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.4");

    // Bottom nav slides up (mobile)
    tl.to(bottomNavRef.current, {
      y: "0%",
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.4");
  });

  return (
    <>
      <Navbar ref={navbarRef} animated />
      <BottomNav ref={bottomNavRef} />

      <section
        ref={containerRef}
        className="hero-section relative h-[70vh] lg:h-screen overflow-hidden"
      >
        {/* Carousel as Background */}
        <div className="carousel-wrapper absolute inset-0 z-0">
          <ImageCarousel
            slides={carouselSlides}
            autoPlayInterval={5000}
            isPlaying={introComplete}
          />
        </div>

        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content on top of carousel */}
        <div className="relative z-20 h-full flex items-center justify-center lg:justify-start">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl text-center lg:text-left">
              {/* Title */}
              <ScatteredTitle
                onAnimationComplete={handleIntroComplete}
                className="mb-4 lg:mb-6"
                lightMode
              />

              {/* CTA Button */}
              <button
                className="intro-button px-6 py-2.5 lg:px-8 lg:py-3 bg-[var(--terracotta)] text-white text-sm lg:text-base rounded-full hover:bg-[var(--terracotta-dark)] transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Start Exploring
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
