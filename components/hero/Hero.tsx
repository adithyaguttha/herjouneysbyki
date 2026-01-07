"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import BackgroundLines from "./doodles/BackgroundLines";
import ScatteredTitle from "./ScatteredTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroImage from "./HeroImage";
import HeroScene from "./HeroScene";
import Navbar from "../Navbar";
import IconifyDoodle, { tripDoodles, doodlePositions } from "./doodles/IconifyDoodle";

// Trip data for the 4 destinations
const trips = [
  {
    id: 1,
    name: "Coorg",
    tagline: "Where coffee meets clouds",
    description: "Misty hills and aromatic coffee plantations await in the Scotland of India",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    doodleKey: "coorg",
  },
  {
    id: 2,
    name: "Bali",
    tagline: "Island of the Gods",
    description: "Ancient temples and emerald rice terraces in this Indonesian paradise",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    doodleKey: "bali",
  },
  {
    id: 3,
    name: "Maldives",
    tagline: "Paradise on Earth",
    description: "Crystal waters and overwater bungalows under endless blue skies",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    doodleKey: "maldives",
  },
  {
    id: 4,
    name: "Switzerland",
    tagline: "Where dreams touch the Alps",
    description: "Snow-capped peaks, pristine lakes, and fairytale villages await",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    doodleKey: "switzerland",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const scrollSetupRef = useRef(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [isHeroActive, setIsHeroActive] = useState(true);

  // Hook 1: Background lines animation + contextSafe for handleIntroComplete
  const { contextSafe } = useGSAP(
    () => {
      // Set initial states for elements (autoAlpha handles opacity + visibility)
      gsap.set(".intro-subtitle", { autoAlpha: 0, y: 30 });
      gsap.set(".intro-button", { autoAlpha: 0, y: 20 });
      gsap.set(".intro-image", { autoAlpha: 0, scale: 0.85, rotation: 10 });
      gsap.set(".intro-doodle", { autoAlpha: 0, scale: 0, rotation: -45 });
      gsap.set(".scroll-indicator", { autoAlpha: 0, y: 20 });
      gsap.set(".doodle-dot", { autoAlpha: 0, scale: 0 });

      // Background lines animation
      const bgTl = gsap.timeline({ delay: 0.1 });
      bgTl.fromTo(
        ".bg-line path",
        { strokeDashoffset: 1500 },
        {
          strokeDashoffset: 0,
          duration: 2,
          stagger: 0.2,
          ease: "power2.inOut",
        }
      );

      bgTl.to(
        ".doodle-dot",
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "back.out(1.7)",
        },
        "-=1"
      );
    },
    { scope: containerRef }
  );

  // Handle intro animation completion - wrapped with contextSafe
  const handleIntroComplete = contextSafe(() => {
    const tl = gsap.timeline({
      onComplete: () => setIntroComplete(true),
    });

    // Fade in subtitle
    tl.to(".intro-subtitle", {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    // Fade in button
    tl.to(
      ".intro-button",
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Image appears with rotation
    tl.to(
      ".intro-image",
      {
        autoAlpha: 1,
        scale: 1,
        rotation: 3,
        duration: 0.8,
        ease: "back.out(1.5)",
      },
      "-=0.3"
    );

    // Doodles pop in
    tl.to(
      ".intro-doodle",
      {
        autoAlpha: 1,
        scale: 1,
        rotation: 0,
        duration: 0.5,
        stagger: { each: 0.1, from: "random" },
        ease: "back.out(2)",
      },
      "-=0.4"
    );

    // Navbar slides down
    tl.to(
      navbarRef.current,
      {
        y: "0%",
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.2"
    );

    // Scroll indicator
    tl.to(
      ".scroll-indicator",
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
      },
      "-=0.3"
    );
  });

  // Hook 2: Pinned scroll setup - runs ONCE when introComplete becomes true
  useGSAP(
    () => {
      // Guard: Only run when intro is complete and scroll hasn't been set up
      if (!introComplete || scrollSetupRef.current) return;
      scrollSetupRef.current = true;

      // Floating doodles animation
      gsap.to(".intro-doodle, .trip-doodle", {
        y: "random(-10, 10)",
        x: "random(-5, 5)",
        rotation: "random(-5, 5)",
        duration: "random(2.5, 4)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.2, from: "random" },
      });

      // PINNED SCROLL for trip transitions
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onLeave: () => setIsHeroActive(false),
          onEnterBack: () => setIsHeroActive(true),
        },
      });

      // Hide scroll indicator
      scrollTl.to(".scroll-indicator", { opacity: 0, duration: 0.1 });

      // Hide intro content
      scrollTl.to(".intro-content", {
        opacity: 0,
        scale: 0.95,
        y: -30,
        duration: 1,
      });

      // Show first trip
      scrollTl.fromTo(
        ".trip-1",
        { opacity: 0, scale: 1.05, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1 },
        "-=0.5"
      );

      // Animate first trip text
      scrollTl.fromTo(
        ".trip-1-title .word-inner",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.5 },
        "-=0.7"
      );

      scrollTl.fromTo(
        ".trip-1-doodle",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, stagger: 0.1, ease: "back.out(2)", duration: 0.4 },
        "-=0.4"
      );

      // Trip transitions (1→2→3→4)
      trips.slice(1).forEach((trip, index) => {
        const currentTrip = index + 1;
        const nextTrip = index + 2;

        // Fade out current trip
        scrollTl.to(`.trip-${currentTrip}`, {
          opacity: 0,
          scale: 0.95,
          y: -30,
          duration: 1,
        });

        // Fade in next trip
        scrollTl.fromTo(
          `.trip-${nextTrip}`,
          { opacity: 0, scale: 1.05, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1 },
          "<"
        );

        // Animate trip title
        scrollTl.fromTo(
          `.trip-${nextTrip}-title .word-inner`,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.05, duration: 0.5 },
          "-=0.7"
        );

        // Animate trip doodles
        scrollTl.fromTo(
          `.trip-${nextTrip}-doodle`,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, stagger: 0.1, ease: "back.out(2)", duration: 0.4 },
          "-=0.4"
        );
      });
    },
    { scope: containerRef, dependencies: [introComplete] }
  );

  const introDoodles = tripDoodles.intro;

  return (
    <>
      <Navbar ref={navbarRef} isCompact={isHeroActive} />

      <section
        ref={containerRef}
        className="hero-section relative min-h-screen bg-[var(--cream)] pt-20"
      >
        {/* Background decorative lines */}
        <BackgroundLines className="absolute inset-0 w-full h-full pointer-events-none z-0" />

        {/* INTRO Section */}
        <div
          ref={introRef}
          className="intro-content absolute inset-0 flex items-center z-10"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left - Title */}
              <div className="col-span-1 lg:col-span-5 text-center lg:text-left order-2 lg:order-1">
                <ScatteredTitle
                  onAnimationComplete={handleIntroComplete}
                  className="mb-6"
                />

                <HeroSubtitle className="intro-subtitle mx-auto lg:mx-0 mb-8">
                  Stories from around the world, one journey at a time
                </HeroSubtitle>

                <button
                  className="intro-button px-8 py-3 bg-[var(--terracotta)] text-white rounded-full hover:bg-[var(--terracotta-dark)] transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Start Exploring
                </button>
              </div>

              {/* Right - Image */}
              <div className="col-span-1 lg:col-span-7 relative order-1 lg:order-2">
                <HeroImage
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
                  alt="Travel Wanderlust"
                  className="intro-image"
                />

                {/* Intro doodles */}
                <div className="absolute inset-0 pointer-events-none overflow-visible">
                  {introDoodles.map((doodle, idx) => (
                    <IconifyDoodle
                      key={`intro-${idx}`}
                      icon={doodle.icon}
                      color={doodle.color}
                      size={45 + idx * 5}
                      className="intro-doodle"
                      style={doodlePositions[idx % doodlePositions.length]}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRIP Scenes (absolute positioned, revealed on scroll) */}
        {trips.map((trip, index) => (
          <HeroScene
            key={trip.id}
            {...trip}
            isFirst={false}
            className={`trip-${trip.id} z-10`}
          />
        ))}

        {/* Scroll indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-center">
          <span
            className="text-lg text-[var(--warm-brown)] block mb-2"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            Scroll to explore
          </span>
          <div className="flex flex-col items-center">
            <div className="w-px h-8 bg-[var(--beige)]" />
            <svg
              className="scroll-indicator-arrow w-4 h-4 text-[var(--terracotta)] mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
