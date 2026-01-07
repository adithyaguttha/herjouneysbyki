"use client";

import { forwardRef } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

interface BottomNavProps {
  className?: string;
}

const BottomNav = forwardRef<HTMLElement, BottomNavProps>(
  ({ className = "" }, ref) => {
    const pathname = usePathname();

    const navItems = [
      { label: "Home", href: "/", icon: "mdi:home-outline", activeIcon: "mdi:home" },
      { label: "Blog", href: "/blog", icon: "mdi:book-open-outline", activeIcon: "mdi:book-open" },
      { label: "About", href: "/about", icon: "mdi:account-outline", activeIcon: "mdi:account" },
    ];

    const isActive = (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname.startsWith(href);
    };

    return (
      <nav
        ref={ref}
        className={`bottom-nav fixed bottom-0 left-0 right-0 z-50 lg:hidden ${className}`}
        style={{ transform: "translateY(100%)" }}
      >
        <div className="mx-4 mb-4 pb-[env(safe-area-inset-bottom)]">
          <div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg px-4 py-2">
            <div className="flex justify-around items-center">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`
                      relative flex flex-col items-center gap-1 px-5 py-2 rounded-full
                      transition-colors
                      ${active ? "text-white" : "text-[var(--charcoal)] hover:text-[var(--terracotta)]"}
                    `}
                  >
                    {active && (
                      <div className="absolute inset-0 bg-[var(--terracotta)] rounded-full -z-10" />
                    )}
                    <Icon
                      icon={active ? item.activeIcon : item.icon}
                      width={22}
                      height={22}
                    />
                    <span
                      className="text-xs font-medium"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    );
  }
);

BottomNav.displayName = "BottomNav";

export default BottomNav;
