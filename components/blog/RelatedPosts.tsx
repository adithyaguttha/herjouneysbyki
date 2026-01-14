"use client";

import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/posts";

interface RelatedPostsProps {
  posts: BlogPost[];
  countrySlug?: string; // Optional: override the country slug in URL
}

export default function RelatedPosts({ posts, countrySlug }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-8">
        <p
          className="text-lg text-[var(--terracotta)] mb-2"
          style={{ fontFamily: "var(--font-caveat)" }}
        >
          Keep exploring
        </p>
        <h2
          className="text-2xl md:text-3xl text-[var(--charcoal)]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Recommended Reads
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {posts.slice(0, 3).map((post) => {
          const href = `/${countrySlug || post.country}/${post.slug}`;

          return (
            <Link key={post.slug} href={href} className="block group">
              <article className="bg-white p-3 rounded-lg shadow-md transition-all duration-300 ease-out group-hover:shadow-lg group-hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden rounded">
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
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
