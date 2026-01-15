"use client";

import Image from "next/image";

interface PostHeroProps {
  image: string;
  title: string;
  destination: string;
  date: string;
  readingTime: string;
  highlightWord?: string;
}

export default function PostHero({
  image,
  title,
  destination,
  date,
  readingTime,
  highlightWord,
}: PostHeroProps) {
  // Function to render title with highlighted word
  const renderTitle = () => {
    if (!highlightWord) {
      return title;
    }

    const regex = new RegExp(`(${highlightWord})`, "gi");
    const parts = title.split(regex);

    return parts.map((part, index) => {
      if (part.toLowerCase() === highlightWord.toLowerCase()) {
        return (
          <span key={index} className="pencil-circle">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <header className="relative">
      {/* Full-screen Hero Image */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          {/* Destination */}
          <p
            className="text-white/90 text-lg md:text-xl mb-3 tracking-wide"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            {destination}
          </p>

          {/* Title */}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl text-white font-medium tracking-tight max-w-4xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {renderTitle()}
          </h1>

          {/* Decorative line */}
          <div className="mt-5 w-20 h-0.5 bg-white/50" />

          {/* Meta info */}
          <div
            className="mt-4 flex items-center justify-center gap-3 text-white/80"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            <span className="text-lg">
              {new Date(date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="text-white/50">|</span>
            <span className="text-lg">{readingTime}</span>
          </div>
        </div>
      </section>

    </header>
  );
}
