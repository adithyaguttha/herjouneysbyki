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
          {/* Signature */}
          <div className="text-center mb-8">
            <p
              className="text-3xl md:text-4xl text-[var(--cream)]"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              Her Journeys by Ki
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

          {/* Copyright & MadMVP */}
          <div className="text-center space-y-2">
            <p
              className="text-sm text-[var(--cream)]/40"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              © {currentYear} Her Journeys by Kavya Immaneni
            </p>
            <p
              className="text-sm text-[var(--cream)]/40"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Made with{" "}
              <a
                href="https://madmvp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--terracotta)] hover:text-[var(--terracotta-light)] transition-colors"
              >
                MadMVP
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
