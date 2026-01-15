"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import ScatteredTitle from "./ScatteredTitle";
import HeroSubtitle from "./HeroSubtitle";
import ImageCarousel from "./ImageCarousel";
import Navbar from "../Navbar";
import BottomNav from "../BottomNav";

// Carousel slides data - 5 beautiful travel images
const carouselSlides = [
  {
    id: 1,
    name: "Coonoor",
    tagline: "Where tea gardens kiss the clouds",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  },
  {
    id: 2,
    name: "Bali",
    tagline: "Island of the Gods",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80",
  },
  {
    id: 3,
    name: "Maldives",
    tagline: "Paradise on Earth",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=80",
  },
  {
    id: 4,
    name: "Switzerland",
    tagline: "Where dreams touch the Alps",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1920&q=80",
  },
  {
    id: 5,
    name: "Santorini",
    tagline: "Where the sea meets the sky",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1920&q=80",
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
      gsap.set(".intro-subtitle", { autoAlpha: 0, y: 30 });
      gsap.set(".intro-button", { autoAlpha: 0, y: 20 });
      gsap.set(".carousel-wrapper", { autoAlpha: 0 });
    },
    { scope: containerRef }
  );

  // Handle intro animation completion
  const handleIntroComplete = contextSafe(() => {
    const tl = gsap.timeline({
      onComplete: () => setIntroComplete(true),
    });

    // Fade in carousel background
    tl.to(".carousel-wrapper", {
      autoAlpha: 1,
      duration: 1,
      ease: "power2.out",
    });

    // Fade in subtitle
    tl.to(".intro-subtitle", {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.5");

    // Fade in button
    tl.to(".intro-button", {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.3");

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

              {/* Subtitle */}
              <HeroSubtitle className="intro-subtitle text-white/90 mb-4 lg:mb-8 mx-auto lg:mx-0">
                Stories from around the world, one journey at a time
              </HeroSubtitle>

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
