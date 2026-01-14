"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { tripTypes, getAllDestinations } from "@/data/posts";

interface FilterBarProps {
  selectedDestination: string;
  selectedTripType: string;
  sortBy: "newest" | "oldest";
  onDestinationChange: (destination: string) => void;
  onTripTypeChange: (tripType: string) => void;
  onSortChange: (sort: "newest" | "oldest") => void;
}

export default function FilterBar({
  selectedDestination,
  selectedTripType,
  sortBy,
  onDestinationChange,
  onTripTypeChange,
  onSortChange,
}: FilterBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const destinations = getAllDestinations();

  return (
    <div className="w-full">
      {/* Mobile: Toggle button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="md:hidden w-full flex items-center justify-between px-4 py-3 bg-white border-2 border-[var(--beige)] rounded-xl mb-3"
      >
        <span
          className="text-[var(--charcoal)] flex items-center gap-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <Icon icon="mdi:filter-variant" className="w-5 h-5" />
          Filters & Sort
        </span>
        <Icon
          icon={isExpanded ? "mdi:chevron-up" : "mdi:chevron-down"}
          className="w-5 h-5 text-[var(--warm-brown)]"
        />
      </button>

      {/* Filter content */}
      <div
        className={`${
          isExpanded ? "block" : "hidden"
        } md:block space-y-4 md:space-y-0 md:flex md:flex-wrap md:items-center md:gap-4`}
      >
        {/* Destinations */}
        <div className="space-y-2">
          <label
            className="text-xs uppercase tracking-wider text-[var(--warm-brown)] md:hidden"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Destination
          </label>
          <div className="flex flex-wrap gap-2">
            <FilterPill
              label="All Destinations"
              isActive={selectedDestination === ""}
              onClick={() => onDestinationChange("")}
            />
            {destinations.map((dest) => (
              <FilterPill
                key={dest}
                label={dest}
                isActive={selectedDestination === dest}
                onClick={() => onDestinationChange(dest)}
              />
            ))}
          </div>
        </div>

        {/* Divider - desktop only */}
        <div className="hidden md:block w-px h-8 bg-[var(--beige)]" />

        {/* Trip Types */}
        <div className="space-y-2">
          <label
            className="text-xs uppercase tracking-wider text-[var(--warm-brown)] md:hidden"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Trip Type
          </label>
          <div className="flex flex-wrap gap-2">
            <FilterPill
              label="All Types"
              isActive={selectedTripType === ""}
              onClick={() => onTripTypeChange("")}
            />
            {tripTypes.map((type) => (
              <FilterPill
                key={type}
                label={type}
                isActive={selectedTripType === type}
                onClick={() => onTripTypeChange(type)}
              />
            ))}
          </div>
        </div>

        {/* Divider - desktop only */}
        <div className="hidden md:block w-px h-8 bg-[var(--beige)]" />

        {/* Sort */}
        <div className="space-y-2">
          <label
            className="text-xs uppercase tracking-wider text-[var(--warm-brown)] md:hidden"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Sort By
          </label>
          <div className="flex gap-2">
            <FilterPill
              label="Newest"
              isActive={sortBy === "newest"}
              onClick={() => onSortChange("newest")}
              icon="mdi:sort-calendar-descending"
            />
            <FilterPill
              label="Oldest"
              isActive={sortBy === "oldest"}
              onClick={() => onSortChange("oldest")}
              icon="mdi:sort-calendar-ascending"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface FilterPillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  icon?: string;
}

function FilterPill({ label, isActive, onClick, icon }: FilterPillProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
        isActive
          ? "bg-[var(--terracotta)] text-white shadow-sm"
          : "bg-white border border-[var(--beige)] text-[var(--warm-brown)] hover:border-[var(--terracotta)] hover:text-[var(--terracotta)]"
      }`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {icon && <Icon icon={icon} className="w-4 h-4" />}
      {label}
    </button>
  );
}
