"use client";

import { Icon } from "@iconify/react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      // Show all pages if 5 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      // Show pages around current
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <nav
      className="flex items-center justify-center gap-2"
      aria-label="Pagination"
    >
      {/* Previous button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-full text-[var(--warm-brown)] hover:bg-[var(--cream-dark)] hover:text-[var(--terracotta)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[var(--warm-brown)] transition-all duration-200"
        aria-label="Previous page"
      >
        <Icon icon="mdi:chevron-left" className="w-5 h-5" />
      </button>

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, index) => (
          <span key={index}>
            {page === "..." ? (
              <span className="px-2 text-[var(--warm-brown)]">...</span>
            ) : (
              <button
                onClick={() => onPageChange(page as number)}
                className={`min-w-[40px] h-10 rounded-full text-sm font-medium transition-all duration-200 ${
                  currentPage === page
                    ? "bg-[var(--terracotta)] text-white shadow-md"
                    : "text-[var(--warm-brown)] hover:bg-[var(--cream-dark)] hover:text-[var(--terracotta)]"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </button>
            )}
          </span>
        ))}
      </div>

      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full text-[var(--warm-brown)] hover:bg-[var(--cream-dark)] hover:text-[var(--terracotta)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[var(--warm-brown)] transition-all duration-200"
        aria-label="Next page"
      >
        <Icon icon="mdi:chevron-right" className="w-5 h-5" />
      </button>
    </nav>
  );
}
