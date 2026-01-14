"use client";

import { Icon } from "@iconify/react";

interface ShareButtonsProps {
  title: string;
  url?: string;
  variant?: "horizontal" | "vertical";
}

export default function ShareButtons({
  title,
  url,
  variant = "horizontal",
}: ShareButtonsProps) {
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");

  const shareLinks = [
    {
      name: "Twitter",
      icon: "mdi:twitter",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
      color: "hover:text-[#1DA1F2]",
    },
    {
      name: "Facebook",
      icon: "mdi:facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "hover:text-[#4267B2]",
    },
    {
      name: "Pinterest",
      icon: "mdi:pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(title)}`,
      color: "hover:text-[#E60023]",
    },
    {
      name: "Copy Link",
      icon: "mdi:link-variant",
      href: "#",
      color: "hover:text-[var(--terracotta)]",
      onClick: async () => {
        try {
          await navigator.clipboard.writeText(shareUrl);
          alert("Link copied to clipboard!");
        } catch {
          // Fallback for older browsers
          const textArea = document.createElement("textarea");
          textArea.value = shareUrl;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
          alert("Link copied to clipboard!");
        }
      },
    },
  ];

  const containerClasses =
    variant === "vertical"
      ? "flex flex-col gap-3"
      : "flex items-center gap-4";

  return (
    <div className={containerClasses}>
      <span
        className="text-sm text-[var(--warm-brown)] uppercase tracking-wider"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Share
      </span>
      <div className={variant === "vertical" ? "flex flex-col gap-2" : "flex gap-3"}>
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              if (link.onClick) {
                e.preventDefault();
                link.onClick();
              }
            }}
            target={link.onClick ? undefined : "_blank"}
            rel={link.onClick ? undefined : "noopener noreferrer"}
            className={`p-2 rounded-full bg-white shadow-sm text-[var(--warm-brown)] transition-all duration-200 hover:shadow-md ${link.color}`}
            aria-label={`Share on ${link.name}`}
          >
            <Icon icon={link.icon} className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}
