"use client";

import { useEffect, useState } from "react";

interface HeroTitleProps {
  children: string;
  className?: string;
}

export default function HeroTitle({ children, className = "" }: HeroTitleProps) {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    setWords(children.split(" "));
  }, [children]);

  return (
    <h1
      className={`
        font-heading text-5xl md:text-6xl lg:text-7xl
        text-[var(--charcoal)] leading-tight
        ${className}
      `}
      style={{ fontFamily: "var(--font-playfair)" }}
    >
      {words.map((word, index) => (
        <span key={index} className="word-wrapper mr-4 last:mr-0">
          <span className="word-inner">{word}</span>
        </span>
      ))}
    </h1>
  );
}
