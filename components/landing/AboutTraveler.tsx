"use client";

import Image from "next/image";
import Link from "next/link";
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
                className="bg-white p-3 md:p-4 shadow-lg max-w-xs md:max-w-sm"
                style={{ transform: "rotate(-2deg)" }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
                    alt="Ki - Travel Blogger"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 280px, 350px"
                  />
                </div>
                <p
                  className="text-center text-lg mt-3 text-[var(--warm-brown)]"
                  style={{ fontFamily: "var(--font-caveat)" }}
                >
                  That's me in Santorini!
                </p>
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
                I believe that travel isn't just about ticking destinations off a list –
                it's about the moments that take your breath away, the people who become
                unexpected friends, and the stories that stay with you forever.
              </p>
              <p>
                Through this journal, I share not just where I've been, but how each
                place has changed me. From the misty tea gardens of Coonoor to the
                underwater wonders of the Maldives, every journey has taught me something new.
              </p>
              <p>
                When I'm not exploring, you'll find me planning my next adventure,
                editing photos, or dreaming about where the road will take me next.
              </p>
            </div>

            {/* Signature */}
            <div className="mb-6">
              <p
                className="text-3xl text-[var(--charcoal)]"
                style={{ fontFamily: "var(--font-caveat)" }}
              >
                ~ Ki
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[var(--terracotta)] hover:text-[var(--terracotta-dark)] transition-colors group"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span>Read my full story</span>
              <Icon
                icon="mdi:arrow-right"
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
