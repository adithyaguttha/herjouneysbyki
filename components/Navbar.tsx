"use client";

import { forwardRef } from "react";

interface NavbarProps {
  className?: string;
  animated?: boolean;
}

const Navbar = forwardRef<HTMLElement, NavbarProps>(({ className = "", animated = false }, ref) => {
  return (
    <nav
      ref={ref}
      className={`navbar fixed z-50 top-0 left-0 right-0 w-full ${className}`}
      style={animated ? { transform: "translateY(-100%)" } : undefined}
    >
      {/* Navbar inner container - full width */}
      <div className="navbar-inner bg-[var(--cream)] shadow-lg overflow-hidden w-full">
        <div className="px-5 py-3 max-w-7xl mx-auto">
          <div className="flex items-center justify-between w-full">
            {/* Logo - Handwriting style */}
            <a
              href="/"
              className="text-xl md:text-2xl text-[var(--terracotta)] hover:text-[var(--terracotta-dark)] transition-colors whitespace-nowrap"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              herjourneysbyki
            </a>

            {/* Menu Links - hidden on mobile/tablet, shown on desktop */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="/"
                className="text-sm text-[var(--charcoal)] hover:text-[var(--terracotta)] transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Home
              </a>
              <a
                href="/blog"
                className="text-sm text-[var(--charcoal)] hover:text-[var(--terracotta)] transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Blog
              </a>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
