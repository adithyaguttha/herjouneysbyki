"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", icon: "mdi:instagram", href: "https://www.instagram.com/herjourneysbyki/" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ];

  return (
    <footer className="bg-[var(--charcoal)] text-[var(--cream)] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <h3
              className="text-2xl md:text-3xl mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Her Journeys
            </h3>
            <p
              className="text-lg text-[var(--cream)]/70"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              by Ki
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-8 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[var(--cream)]/80 hover:text-[var(--cream)] transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--cream)]/10 flex items-center justify-center text-[var(--cream)]/80 hover:bg-[var(--terracotta)] hover:text-white transition-all duration-300"
                aria-label={social.name}
              >
                <Icon icon={social.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-[var(--cream)]/20 mb-8" />

          {/* Tagline */}
          <p
            className="text-[var(--cream)]/60 text-center mb-4"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            Made with{" "}
            <Icon
              icon="mdi:heart"
              className="w-4 h-4 inline-block text-[var(--terracotta)]"
            />{" "}
            and wanderlust
          </p>

          {/* Copyright */}
          <p
            className="text-sm text-[var(--cream)]/40"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            © {currentYear} Her Journeys by Ki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
