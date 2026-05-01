"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";

export default function AboutTraveler() {
  return (
    <section className="py-16 md:py-24 bg-[var(--cream-dark)] relative overflow-hidden">
      {/* Decorative doodles */}
      <div className="absolute top-16 right-8 md:right-24 text-[var(--beige)] opacity-40">
        <Icon icon="mdi:passport" className="w-12 h-12 md:w-16 md:h-16 rotate-12" />
      </div>
      <div className="absolute bottom-20 left-8 md:left-16 text-[var(--sage)] opacity-30">
        <Icon icon="mdi:airplane" className="w-10 h-10 md:w-14 md:h-14 -rotate-12" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Tape */}
              <div className="tape tape-center" style={{ top: "-12px" }}></div>

              {/* Polaroid frame */}
              <div
                className="bg-white p-3 md:p-4 shadow-lg w-80 md:w-96"
                style={{ transform: "rotate(-2deg)" }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/about/kavya.jpeg"
                    alt="Kavya Immaneni - Travel Blogger"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 320px, 384px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p
              className="text-2xl md:text-3xl text-[var(--terracotta)] mb-4"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              Hey, I'm Ki!
            </p>
            <h2
              className="text-3xl md:text-4xl text-[var(--charcoal)] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The Wanderer Behind the Stories
            </h2>
            <div
              className="space-y-4 text-[var(--warm-brown)] leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <p>
                I'm a traveler who believes in experiencing a place deeply—through its culture,
                its food, and its everyday rhythm. I'm not drawn to rushed itineraries or
                "cover it all in 14 days" trips. Instead, I prefer to slow down and explore
                each destination thoughtfully.
              </p>
              <p>
                I like discovering places on my own—often stepping away from the usual tourist
                trail to find something more authentic, more personal. At the same time, I value
                comfort and a touch of luxury, especially when it comes to where I stay. I choose
                my stays carefully, looking for spaces that enhance the overall experience of a
                destination.
              </p>
              <p>
                Through this blog, I hope to share that balance—the sweet spot between exploration
                and ease. My goal is to help you travel in a way that feels intentional, without
                the regret of missed opportunities or time wasted on things that don't truly add
                value.
              </p>
              <p>
                Everything I share here comes from my honest experiences, so you can see each
                place through my lens—and plan your journeys with clarity, confidence, and a
                sense of joy that stays long after the trip ends.
              </p>
            </div>

            {/* Signature */}
            <div>
              <p
                className="text-3xl text-[var(--charcoal)]"
                style={{ fontFamily: "var(--font-caveat)" }}
              >
                ~ Kavya Immaneni
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
