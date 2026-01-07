"use client";

import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { Icon } from "@iconify/react";

interface ScatteredTitleProps {
  onAnimationComplete?: () => void;
  className?: string;
}

export default function ScatteredTitle({
  onAnimationComplete,
  className = "",
}: ScatteredTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const airplaneRef = useRef<HTMLDivElement>(null);
  const [letters, setLetters] = useState<{ char: string; id: number }[]>([]);

  // Split "Her Journeys" into individual characters
  useEffect(() => {
    const title = "Her Journeys";
    const chars = title.split("").map((char, index) => ({
      char,
      id: index,
    }));
    setLetters(chars);
  }, []);

  useGSAP(
    () => {
      if (letters.length === 0) return;

      const letterElements = containerRef.current?.querySelectorAll(".scattered-letter");
      if (!letterElements || letterElements.length === 0) return;

      // Set initial states
      // Letters scattered randomly
      letterElements.forEach((el) => {
        gsap.set(el, {
          x: gsap.utils.random(-400, 400),
          y: gsap.utils.random(-300, 300),
          rotation: gsap.utils.random(-45, 45),
          scale: gsap.utils.random(0.6, 1.4),
          opacity: 0,
        });
      });

      // Hide other elements initially
      gsap.set(".welcome-text", { opacity: 0, y: 20 });
      gsap.set(".signature", { clipPath: "inset(0 100% 0 0)", opacity: 1 });
      gsap.set(airplaneRef.current, { x: -100, y: 50, opacity: 0, rotation: -10 });

      // Main animation timeline
      const tl = gsap.timeline({
        delay: 0.3,
        onComplete: () => {
          onAnimationComplete?.();
        },
      });

      // 1. Fade in scattered letters with random timing
      tl.to(letterElements, {
        opacity: 0.5,
        duration: 0.6,
        stagger: {
          each: 0.02,
          from: "random",
        },
        ease: "power2.out",
      });

      // 2. Airplane enters
      tl.to(
        airplaneRef.current,
        {
          x: 50,
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // 3. Letters gather to center with elastic feel
      tl.to(
        letterElements,
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 1.2,
          stagger: {
            each: 0.03,
            from: "center",
          },
          ease: "elastic.out(1, 0.6)",
        },
        "gather"
      );

      // 4. Airplane flies across and exits
      tl.to(
        airplaneRef.current,
        {
          x: 600,
          y: -80,
          rotation: 20,
          duration: 1.5,
          ease: "power1.inOut",
        },
        "gather"
      );

      tl.to(
        airplaneRef.current,
        {
          opacity: 0,
          duration: 0.3,
        },
        "-=0.3"
      );

      // 5. Title container moves to left
      tl.to(
        ".title-wrapper",
        {
          x: 0,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "-=0.5"
      );

      // 6. "Welcome to" fades in above
      tl.to(
        ".welcome-text",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // 7. "by Ki" signature writes in
      tl.to(
        ".signature",
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.2"
      );
    },
    { scope: containerRef, dependencies: [letters] }
  );

  return (
    <div ref={containerRef} className={`scattered-title-container ${className}`}>
      {/* Airplane doodle */}
      <div
        ref={airplaneRef}
        className="airplane-doodle absolute top-1/2 left-0 -translate-y-1/2 z-20 pointer-events-none"
      >
        <Icon
          icon="tabler:plane-departure"
          width={50}
          height={50}
          color="var(--terracotta)"
        />
      </div>

      {/* Title wrapper - starts centered, moves left */}
      <div className="title-wrapper relative">
        {/* "Welcome to" - appears above title */}
        <span
          className="welcome-text block text-lg md:text-xl text-[var(--warm-brown)] mb-2"
          style={{ fontFamily: "var(--font-caveat)" }}
        >
          Welcome to
        </span>

        {/* Main title - "Her Journeys" */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[var(--charcoal)] whitespace-nowrap leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {letters.map((letter) => (
            <span
              key={letter.id}
              className={`scattered-letter inline-block ${
                letter.char === " " ? "w-3 md:w-4" : ""
              }`}
            >
              {letter.char === " " ? "\u00A0" : letter.char}
            </span>
          ))}
        </h1>

        {/* "by Ki" signature - handwriting style */}
        <span
          className="signature block text-2xl md:text-3xl text-[var(--terracotta)] mt-2 ml-auto w-fit"
          style={{ fontFamily: "var(--font-caveat)" }}
        >
          by Ki
        </span>
      </div>
    </div>
  );
}
