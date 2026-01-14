"use client";

import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/posts";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  // Use the new country-based URL structure
  const href = `/${post.country}/${post.slug}`;

  return (
    <Link href={href} className="block group">
      <article className="blog-card bg-white p-3 shadow-md transition-all duration-300 ease-out group-hover:shadow-lg group-hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Destination Tag */}
          <span
            className="absolute top-3 left-3 px-3 py-1 text-sm bg-white/90 backdrop-blur-sm text-[var(--terracotta)] rounded-full shadow-sm"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {post.destination}
          </span>
        </div>

        {/* Content */}
        <div className="pt-4 pb-2">
          {/* Date */}
          <p
            className="text-sm text-[var(--warm-brown)] mb-2"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          {/* Title */}
          <h3
            className="text-lg md:text-xl text-[var(--charcoal)] leading-tight mb-2 group-hover:text-[var(--terracotta)] transition-colors duration-300"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {post.title}
          </h3>

          {/* Excerpt - truncated */}
          <p
            className="text-sm text-[var(--warm-brown)] line-clamp-2"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {post.excerpt}
          </p>

          {/* Trip Types */}
          <div className="flex flex-wrap gap-2 mt-3">
            {post.tripTypes.slice(0, 2).map((type) => (
              <span
                key={type}
                className="text-xs px-2 py-1 bg-[var(--cream)] text-[var(--warm-brown)] rounded-full"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
