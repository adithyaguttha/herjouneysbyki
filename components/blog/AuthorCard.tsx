"use client";

import Image from "next/image";

export default function AuthorCard() {
  return (
    <div className="author-card relative bg-white p-5 md:p-6 shadow-md max-w-md mx-auto">
      {/* Tape */}
      <div className="tape tape-center"></div>

      <div className="flex items-center gap-4">
        {/* Author image */}
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-3 border-[var(--cream)] shadow-sm flex-shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
            alt="Ki"
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>

        {/* Author info */}
        <div>
          <p
            className="text-sm text-[var(--warm-brown)] mb-1"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Written by
          </p>
          <p
            className="text-2xl text-[var(--charcoal)]"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            Ki
          </p>
          <p
            className="text-sm text-[var(--warm-brown)] mt-1"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Travel enthusiast & storyteller
          </p>
        </div>
      </div>

      {/* Bio */}
      <p
        className="mt-4 text-sm text-[var(--warm-brown)] leading-relaxed"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Exploring the world one journey at a time. I believe every place has a story
        waiting to be discovered and shared.
      </p>
    </div>
  );
}
