"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - would connect to email service
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[var(--cream-dark)] relative overflow-hidden">
      {/* Decorative airplane */}
      <div className="absolute top-8 right-4 md:right-16 text-[var(--terracotta)] opacity-30 animate-float">
        <Icon icon="mdi:airplane" className="w-8 h-8 md:w-12 md:h-12 rotate-45" />
      </div>
      <div className="absolute bottom-12 left-4 md:left-12 text-[var(--sage)] opacity-20">
        <Icon icon="mdi:mail-outline" className="w-10 h-10 md:w-14 md:h-14 -rotate-12" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Polaroid-style card */}
          <div
            className="bg-white p-6 md:p-10 shadow-lg relative"
            style={{ transform: "rotate(0.5deg)" }}
          >
            {/* Tape pieces */}
            <div className="tape tape-left"></div>
            <div className="tape tape-right"></div>

            <div className="text-center">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[var(--cream)] flex items-center justify-center mx-auto mb-6">
                <Icon
                  icon="mdi:mailbox-open-outline"
                  className="w-8 h-8 text-[var(--terracotta)]"
                />
              </div>

              {/* Heading */}
              <h2
                className="text-3xl md:text-4xl text-[var(--charcoal)] mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Join the Journey
              </h2>

              {/* Subtext */}
              <p
                className="text-lg md:text-xl text-[var(--warm-brown)] mb-8"
                style={{ fontFamily: "var(--font-caveat)" }}
              >
                Get new stories delivered straight to your inbox, like postcards from a friend
              </p>

              {isSubmitted ? (
                /* Success message */
                <div className="py-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--sage)]/20 flex items-center justify-center mx-auto mb-4">
                    <Icon icon="mdi:check" className="w-6 h-6 text-[var(--sage)]" />
                  </div>
                  <p
                    className="text-lg text-[var(--charcoal)]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Welcome to the journey!
                  </p>
                  <p
                    className="text-[var(--warm-brown)] mt-2"
                    style={{ fontFamily: "var(--font-caveat)" }}
                  >
                    Check your inbox for a little hello
                  </p>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-1 px-5 py-3 bg-[var(--cream)] border-2 border-[var(--beige)] rounded-full text-[var(--charcoal)] placeholder:text-[var(--warm-brown)]/50 focus:outline-none focus:border-[var(--terracotta)] transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[var(--terracotta)] text-white rounded-full hover:bg-[var(--terracotta-dark)] transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Subscribe
                    <Icon icon="mdi:send" className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* Privacy note */}
              {!isSubmitted && (
                <p
                  className="text-xs text-[var(--warm-brown)]/60 mt-4"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  No spam, just stories. Unsubscribe anytime.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
