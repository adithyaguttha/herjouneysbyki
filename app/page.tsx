import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Next Section Placeholder */}
      <section className="next-section min-h-screen bg-[var(--cream-dark)] flex items-center justify-center">
        <div className="text-center px-6">
          <span
            className="text-xl text-[var(--terracotta)] block mb-4"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            Coming Soon
          </span>
          <h2
            className="text-4xl md:text-5xl text-[var(--charcoal)] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            More Adventures Await
          </h2>
          <p
            className="text-lg text-[var(--warm-brown)] max-w-md mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            This section is under construction. Stay tuned for travel stories,
            tips, and inspiration from around the world.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="w-2 h-2 rounded-full bg-[var(--terracotta)] animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-[var(--terracotta)] animate-pulse delay-100" />
            <div className="w-2 h-2 rounded-full bg-[var(--terracotta)] animate-pulse delay-200" />
          </div>
        </div>
      </section>
    </main>
  );
}
