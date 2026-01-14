"use client";

import { Suspense, useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";
import { posts, filterPosts, sortPosts } from "@/data/posts";
import Navbar from "@/components/Navbar";
import BlogHeader from "@/components/blog/BlogHeader";
import SearchBar from "@/components/blog/SearchBar";
import FilterBar from "@/components/blog/FilterBar";
import FeaturedCard from "@/components/blog/FeaturedCard";
import BlogCard from "@/components/blog/BlogCard";
import Pagination from "@/components/blog/Pagination";

const POSTS_PER_PAGE = 6;

function BlogContent() {
  const searchParams = useSearchParams();

  // Initialize from URL params
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedTripType, setSelectedTripType] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "oldest">("newest");
  const [currentPage, setCurrentPage] = useState(1);

  // Read URL params on mount
  useEffect(() => {
    const destination = searchParams.get("destination");
    const tripType = searchParams.get("tripType");

    if (destination) {
      setSelectedDestination(destination);
    }
    if (tripType) {
      setSelectedTripType(tripType);
    }
  }, [searchParams]);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let result = filterPosts(posts, {
      search: searchQuery,
      destination: selectedDestination,
      tripType: selectedTripType,
    });
    return sortPosts(result, sortBy);
  }, [searchQuery, selectedDestination, selectedTripType, sortBy]);

  // Get featured post (latest post from filtered results)
  const featuredPost = filteredPosts[0];

  // Get remaining posts for grid (exclude featured)
  const remainingPosts = filteredPosts.slice(1);

  // Pagination
  const totalPages = Math.ceil(remainingPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = remainingPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Reset to page 1 when filters change
  const handleFilterChange = (
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    return (value: string) => {
      setter(value);
      setCurrentPage(1);
    };
  };

  const handleSortChange = (value: "newest" | "oldest") => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto px-4 pb-16">
      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <SearchBar value={searchQuery} onChange={handleSearchChange} />
        </div>
        <FilterBar
          selectedDestination={selectedDestination}
          selectedTripType={selectedTripType}
          sortBy={sortBy}
          onDestinationChange={handleFilterChange(setSelectedDestination)}
          onTripTypeChange={handleFilterChange(setSelectedTripType)}
          onSortChange={handleSortChange}
        />
      </div>

      {/* No results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <p
            className="text-xl text-[var(--warm-brown)] mb-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            No stories found
          </p>
          <p
            className="text-[var(--warm-brown)]/70"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Try adjusting your search or filters
          </p>
        </div>
      )}

      {/* Featured Post */}
      {featuredPost && (
        <section className="mb-12">
          <FeaturedCard post={featuredPost} />
        </section>
      )}

      {/* Posts Grid */}
      {paginatedPosts.length > 0 && (
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {paginatedPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {/* Instagram CTA */}
      <section className="mt-16 py-12 bg-[var(--cream-dark)] -mx-4 px-4 rounded-2xl">
        <div className="text-center">
          <p
            className="text-lg text-[var(--terracotta)] mb-2"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            Follow along on
          </p>
          <h3
            className="text-2xl md:text-3xl text-[var(--charcoal)] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Instagram
          </h3>
          <p
            className="text-[var(--warm-brown)] mb-6 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            For more travel moments, behind-the-scenes, and daily wanderlust
          </p>
          <a
            href="https://www.instagram.com/herjourneysbyki/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--terracotta)] text-white rounded-full hover:bg-[var(--terracotta-dark)] transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <Icon icon="mdi:instagram" className="w-5 h-5" />
            @herjourneysbyki
          </a>
        </div>
      </section>
    </div>
  );
}

function BlogLoading() {
  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="animate-pulse">
        {/* Filters skeleton */}
        <div className="mb-8 space-y-4">
          <div className="h-12 bg-[var(--beige)]/50 rounded-xl" />
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 w-24 bg-[var(--beige)]/50 rounded-full" />
            ))}
          </div>
        </div>
        {/* Featured card skeleton */}
        <div className="h-64 bg-[var(--beige)]/50 rounded-lg mb-12" />
        {/* Grid skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-[var(--beige)]/50 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[var(--cream)]">
      <Navbar />

      {/* Header */}
      <BlogHeader />

      <Suspense fallback={<BlogLoading />}>
        <BlogContent />
      </Suspense>
    </main>
  );
}
