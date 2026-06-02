"use client";

import { useParams, notFound } from "next/navigation";
import { getCountryBySlug, getAllCountrySlugs } from "@/data/countries";
import { getPostsByCountry, sortPosts } from "@/data/posts";
import { CountryHero, CountryAbout, CountryBlogs } from "@/components/country";
import Navbar from "@/components/Navbar";

export default function CountryPage() {
  const params = useParams();
  const countrySlug = params.country as string;

  // Invalid country slug => real 404 (not a blank 200 that Google would index).
  const validSlugs = getAllCountrySlugs();
  const country = getCountryBySlug(countrySlug);
  if (!validSlugs.includes(countrySlug) || !country) {
    notFound();
  }

  const countryPosts = sortPosts(getPostsByCountry(countrySlug), "newest");

  return (
    <main className="min-h-svh bg-[var(--cream)]">
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
