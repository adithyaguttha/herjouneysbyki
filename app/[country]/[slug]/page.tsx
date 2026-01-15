"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { getCountryBySlug, getAllCountrySlugs } from "@/data/countries";
import { getPostBySlug, getPostsByCountry, posts } from "@/data/posts";
import Navbar from "@/components/Navbar";
import ReadingProgress from "@/components/blog/ReadingProgress";
import PostHero from "@/components/blog/PostHero";
import PostDoodles from "@/components/blog/PostDoodles";
import TableOfContents from "@/components/blog/TableOfContents";
import AuthorCard from "@/components/blog/AuthorCard";
import RelatedPosts from "@/components/blog/RelatedPosts";

export default function CountryBlogPostPage() {
  const params = useParams();
  const countrySlug = params.country as string;
  const postSlug = params.slug as string;

  // Validate country slug
  const validCountrySlugs = getAllCountrySlugs();
  if (!validCountrySlugs.includes(countrySlug)) {
    return null;
  }

  const country = getCountryBySlug(countrySlug);
  const post = getPostBySlug(postSlug);

  // Validate post belongs to this country
  if (!post || post.country !== countrySlug) {
    return (
      <main className="min-h-screen bg-[var(--cream)] flex items-center justify-center">
        <div className="text-center px-4">
          <h1
            className="text-3xl text-[var(--charcoal)] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Story not found
          </h1>
          <p
            className="text-[var(--warm-brown)] mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            This adventure seems to have wandered off the map.
          </p>
          <Link
            href={country ? `/${countrySlug}` : "/"}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--terracotta)] text-white rounded-full hover:bg-[var(--terracotta-dark)] transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <Icon icon="mdi:arrow-left" className="w-5 h-5" />
            {country ? `Back to ${country.name}` : "Back to Home"}
          </Link>
        </div>
      </main>
    );
  }

  // Get recommended posts (excluding current post)
  // First try same country, then fill with other posts
  const sameCountryPosts = getPostsByCountry(countrySlug).filter((p) => p.slug !== postSlug);
  const otherPosts = posts.filter((p) => p.slug !== postSlug && p.country !== countrySlug);
  const recommendedPosts = [...sameCountryPosts, ...otherPosts].slice(0, 3);

  return (
    <main className="min-h-screen bg-[var(--cream)]">
      <Navbar />

      {/* Reading Progress Bar */}
      <ReadingProgress />

      {/* Floating Doodles */}
      <PostDoodles destination={post.destination} />

      {/* Hero Section */}
      <PostHero
        image={post.coverImage}
        title={post.title}
        destination={post.destination}
        date={post.date}
        readingTime={post.readingTime}
        highlightWord={post.highlightWord}
      />

      {/* Trip Types */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2">
          {post.tripTypes.map((type) => (
            <span
              key={type}
              className="px-4 py-1.5 bg-white text-[var(--warm-brown)] rounded-full text-sm shadow-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 pb-12">
        <div className="max-w-2xl mx-auto">
          {/* Table of Contents */}
          <TableOfContents content={post.content} />

          {/* Main content */}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Additional Images */}
          {post.images && post.images.length > 0 && (
            <div className="my-12 space-y-8">
              {post.images.map((image, index) => (
                <div key={index} className="post-image-frame">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image}
                      alt={`${post.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </article>

      {/* Footer Section */}
      <footer className="bg-[var(--cream-dark)] py-12">
        <div className="container mx-auto px-4">
          {/* Author Card */}
          <div className="mb-12">
            <AuthorCard />
          </div>

          {/* Recommended Reads */}
          {recommendedPosts.length > 0 && (
            <RelatedPosts posts={recommendedPosts} />
          )}
        </div>
      </footer>
    </main>
  );
}
