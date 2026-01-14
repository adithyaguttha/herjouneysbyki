"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { posts, sortPosts } from "@/data/posts";
import type { BlogPost } from "@/data/posts";
import BlogCard from "@/components/blog/BlogCard";

export default function LatestStories() {
  // Get 3 latest posts
  const latestPosts = sortPosts(posts, "newest").slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-[var(--cream-dark)] relative overflow-hidden">
      {/* Decorative doodle */}
      <div className="absolute top-12 right-8 md:right-16 text-[var(--beige)] opacity-40">
        <Icon icon="mdi:compass-outline" className="w-16 h-16 md:w-24 md:h-24" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p
            className="text-lg md:text-xl text-[var(--terracotta)] mb-2"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            Fresh from the journal
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Latest Stories
          </h2>
        </div>

        {/* Mobile: Horizontal scroll with compact cards */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide mb-8">
          <div className="flex gap-4" style={{ width: "max-content" }}>
            {latestPosts.map((post) => (
              <CompactBlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--terracotta)] text-white rounded-full hover:bg-[var(--terracotta-dark)] transition-all duration-300 shadow-md hover:shadow-lg group"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            View All Stories
            <Icon
              icon="mdi:arrow-right"
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Compact card for mobile horizontal scroll
function CompactBlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/${post.country}/${post.slug}`} className="block group">
      <article className="bg-white p-2 shadow-md w-[240px] rounded-lg">
        {/* Image */}
        <div className="relative aspect-[3/2] overflow-hidden rounded">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="240px"
          />
          {/* Destination Tag */}
          <span
            className="absolute top-2 left-2 px-2 py-0.5 text-xs bg-white/90 backdrop-blur-sm text-[var(--terracotta)] rounded-full"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {post.destination}
          </span>
        </div>

        {/* Content */}
        <div className="pt-3 pb-1 px-1">
          <p
            className="text-xs text-[var(--warm-brown)] mb-1"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </p>
          <h3
            className="text-sm text-[var(--charcoal)] leading-tight line-clamp-2 group-hover:text-[var(--terracotta)] transition-colors"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {post.title}
          </h3>
        </div>
      </article>
    </Link>
  );
}
