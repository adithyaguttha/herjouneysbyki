"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

interface Chapter {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [activeChapter, setActiveChapter] = useState<string>("");

  useEffect(() => {
    // Extract h2 headings from content
    const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
    const matches = [...content.matchAll(h2Regex)];

    const extractedChapters = matches.map((match, index) => {
      // Remove any HTML tags from the heading text
      const title = match[1].replace(/<[^>]*>/g, "").trim();
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return { id, title };
    });

    setChapters(extractedChapters);
  }, [content]);

  useEffect(() => {
    // Add IDs to h2 elements in the DOM
    const blogContent = document.querySelector(".blog-content");
    if (blogContent) {
      const h2Elements = blogContent.querySelectorAll("h2");
      h2Elements.forEach((h2, index) => {
        if (chapters[index]) {
          h2.id = chapters[index].id;
        }
      });
    }

    // Set up intersection observer for active chapter highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveChapter(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    chapters.forEach((chapter) => {
      const element = document.getElementById(chapter.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [chapters]);

  const scrollToChapter = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (chapters.length === 0) return null;

  return (
    <nav className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Icon icon="mdi:format-list-bulleted" className="w-5 h-5 text-[var(--terracotta)]" />
        <h3
          className="text-lg text-[var(--charcoal)] font-medium"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          In This Story
        </h3>
      </div>
      <ul className="space-y-2">
        {chapters.map((chapter, index) => (
          <li key={chapter.id}>
            <button
              onClick={() => scrollToChapter(chapter.id)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-start gap-3 group ${
                activeChapter === chapter.id
                  ? "bg-[var(--terracotta)]/10 text-[var(--terracotta)]"
                  : "hover:bg-[var(--cream-dark)] text-[var(--warm-brown)]"
              }`}
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span
                className={`text-sm mt-0.5 ${
                  activeChapter === chapter.id
                    ? "text-[var(--terracotta)]"
                    : "text-[var(--warm-brown)]/50"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-relaxed">{chapter.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
