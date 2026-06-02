import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Page not found · Her Journeys by Ki",
  // Keep 404s out of search results.
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-svh bg-[var(--cream)]">
      <Navbar />
      <div className="flex items-center justify-center px-4 py-24 md:py-32">
        <div className="text-center max-w-md">
          <p
            className="text-6xl text-[var(--terracotta)] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            404
          </p>
          <h1
            className="text-3xl text-[var(--charcoal)] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            This page wandered off the map
          </h1>
          <p
            className="text-[var(--warm-brown)] mb-8"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            We couldn&apos;t find what you were looking for. Let&apos;s get you
            back on the trail.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--terracotta)] text-white rounded-full hover:bg-[var(--terracotta-dark)] transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
