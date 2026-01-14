"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { getCountryBySlug, getAllCountrySlugs } from "@/data/countries";
import { getPostsByCountry, sortPosts } from "@/data/posts";
import { CountryHero, CountryAbout, CountryBlogs } from "@/components/country";
import Navbar from "@/components/Navbar";

export default function CountryPage() {
  const params = useParams();
  const countrySlug = params.country as string;

  // Check if this is a valid country slug
  const validSlugs = getAllCountrySlugs();
  if (!validSlugs.includes(countrySlug)) {
    // This might be a different route, let Next.js handle it
    return null;
  }

  const country = getCountryBySlug(countrySlug);
  const countryPosts = sortPosts(getPostsByCountry(countrySlug), "newest");

  if (!country) {
    return (
      <main className="min-h-screen bg-[var(--cream)] flex items-center justify-center">
        <div className="text-center px-4">
          <h1
            className="text-3xl text-[var(--charcoal)] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Country not found
          </h1>
          <p
            className="text-[var(--warm-brown)] mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            This destination seems to have wandered off the map.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--terracotta)] text-white rounded-full hover:bg-[var(--terracotta-dark)] transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <Icon icon="mdi:arrow-left" className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--cream)]">
      <Navbar />

      {/* Hero Section */}
      <CountryHero country={country} />

      {/* About Section */}
      <CountryAbout country={country} storyCount={countryPosts.length} />

      {/* Blog Posts */}
      <CountryBlogs posts={countryPosts} countrySlug={countrySlug} />
    </main>
  );
}
