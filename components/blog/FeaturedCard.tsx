"use client";

import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/posts";

interface FeaturedCardProps {
  post: BlogPost;
}

export default function FeaturedCard({ post }: FeaturedCardProps) {
  return (
    <Link href={`/${post.country}/${post.slug}`} className="block group">
      <article className="featured-card relative bg-white p-4 md:p-5 shadow-lg transition-all duration-300 ease-out group-hover:shadow-xl">
        {/* Tape pieces */}
        <div className="tape tape-left"></div>
        <div className="tape tape-right"></div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Image Container */}
          <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-[4/5] overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />

            {/* Featured Badge */}
            <span
              className="absolute top-3 left-3 px-3 py-1 text-xs uppercase tracking-wider bg-[var(--terracotta)] text-white rounded-full shadow-md"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Latest Story
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center w-full md:w-1/2 py-2 md:py-4">
            {/* Destination & Date */}
            <div className="flex items-center gap-3 mb-3">
              <span
                className="px-3 py-1 text-sm bg-[var(--cream)] text-[var(--terracotta)] rounded-full"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {post.destination}
              </span>
              <span
                className="text-sm text-[var(--warm-brown)]"
                style={{ fontFamily: "var(--font-caveat)" }}
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            {/* Title */}
            <h2
              className="text-2xl md:text-3xl lg:text-4xl text-[var(--charcoal)] leading-tight mb-4 group-hover:text-[var(--terracotta)] transition-colors duration-300"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {post.title}
            </h2>

            {/* Excerpt */}
            <p
              className="text-base md:text-lg text-[var(--warm-brown)] line-clamp-3 mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {post.excerpt}
            </p>

            {/* Trip Types */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tripTypes.map((type) => (
                <span
                  key={type}
                  className="text-xs px-3 py-1 bg-[var(--cream-dark)] text-[var(--warm-brown)] rounded-full"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {type}
                </span>
              ))}
            </div>

            {/* Read More */}
            <div className="flex items-center gap-2 text-[var(--terracotta)] group-hover:gap-3 transition-all duration-300">
              <span
                className="text-sm font-medium"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Read the story
              </span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>

            {/* Reading Time - subtle */}
            <p
              className="text-xs text-[var(--warm-brown)] mt-4 opacity-70"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              {post.readingTime}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
