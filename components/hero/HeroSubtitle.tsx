"use client";

interface HeroSubtitleProps {
  children: string;
  className?: string;
}

export default function HeroSubtitle({ children, className = "" }: HeroSubtitleProps) {
  // Check if custom text color is provided
  const hasCustomColor = className.includes("text-");

  return (
    <p
      className={`
        text-xl md:text-2xl
        leading-relaxed max-w-lg
        ${hasCustomColor ? "" : "text-[var(--warm-brown)]"}
        ${className}
      `}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {children}
    </p>
  );
}
