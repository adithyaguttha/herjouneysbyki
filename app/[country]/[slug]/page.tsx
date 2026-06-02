"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { getAllCountrySlugs } from "@/data/countries";
import { getPostBySlug, getPostsByCountry, posts } from "@/data/posts";
import Navbar from "@/components/Navbar";
import ReadingProgress from "@/components/blog/ReadingProgress";
import PostHero from "@/components/blog/PostHero";
import PostDoodles from "@/components/blog/PostDoodles";
import TableOfContents from "@/components/blog/TableOfContents";
import AuthorCard from "@/components/blog/AuthorCard";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { CommentsSection } from "@/components/blog/comments";

export default function CountryBlogPostPage() {
  const params = useParams();
  const countrySlug = params.country as string;
  const postSlug = params.slug as string;

  // Validate country slug, and that the post exists and belongs to this country.
  // Anything else => real 404 (not a blank 200 that Google would index).
  const validCountrySlugs = getAllCountrySlugs();
  const post = getPostBySlug(postSlug);
  if (!validCountrySlugs.includes(countrySlug) || !post || post.country !== countrySlug) {
    notFound();
  }

  // Get recommended posts (excluding current post)
  // First try same country, then fill with other posts
  const sameCountryPosts = getPostsByCountry(countrySlug).filter((p) => p.slug !== postSlug);
  const otherPosts = posts.filter((p) => p.slug !== postSlug && p.country !== countrySlug);
  const recommendedPosts = [...sameCountryPosts, ...otherPosts].slice(0, 3);

  return (
    <main className="min-h-svh bg-[var(--cream)]">
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

      {/* Comments */}
      <section className="container mx-auto px-4 py-12">
        <CommentsSection postSlug={post.slug} />
      </section>

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
