"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import type { BlogPost } from "@/data/posts";

interface CountryBlogsProps {
  posts: BlogPost[];
  countrySlug: string;
}

export default function CountryBlogs({ posts, countrySlug }: CountryBlogsProps) {
  if (posts.length === 0) {
    return (
      <section className="py-12 md:py-16 bg-[var(--cream-dark)]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Icon icon="mdi:notebook-outline" className="w-16 h-16 mx-auto text-[var(--warm-brown)]/30 mb-4" />
          <p
            className="text-lg text-[var(--warm-brown)]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Stories coming soon...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-[var(--cream-dark)]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p
            className="text-lg md:text-xl text-[var(--terracotta)] mb-2"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            My adventures here
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl text-[var(--charcoal)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Stories & Experiences
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${countrySlug}/${post.slug}`}
              className="block group"
            >
              <article className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 ease-out group-hover:shadow-xl group-hover:-translate-y-1">
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
                <div className="p-5">
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

                  {/* Excerpt */}
                  <p
                    className="text-sm text-[var(--warm-brown)] line-clamp-2 mb-3"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Trip Types */}
                  <div className="flex flex-wrap gap-2">
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

                  {/* Read more */}
                  <div className="mt-4 flex items-center gap-1 text-[var(--terracotta)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span
                      className="text-sm"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Read story
                    </span>
                    <Icon icon="mdi:arrow-right" className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
