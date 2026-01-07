"use client";

interface HeroSubtitleProps {
  children: string;
  className?: string;
}

export default function HeroSubtitle({ children, className = "" }: HeroSubtitleProps) {
  return (
    <p
      className={`
        text-xl md:text-2xl text-[var(--warm-brown)]
        leading-relaxed max-w-lg
        ${className}
      `}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {children}
    </p>
  );
}
