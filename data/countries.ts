export interface Country {
  slug: string;
  name: string;
  heroImage: string;
  description: string;
  tagline: string;
}

export const countries: Country[] = [
  {
    slug: "india",
    name: "India",
    heroImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80",
    tagline: "Land of Endless Wonders",
    description: "From the misty peaks of the Himalayas to the sun-kissed beaches of Goa, India is a land of extraordinary contrasts. Ancient temples stand alongside bustling modern cities, while the aroma of spices fills vibrant markets. Every corner tells a story spanning thousands of years of history, spirituality, and culture.",
  },
  {
    slug: "thailand",
    name: "Thailand",
    heroImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1920&q=80",
    tagline: "The Land of Smiles",
    description: "Thailand captivates with its perfect blend of ancient traditions and modern charm. Golden temples glitter under tropical skies, night markets buzz with energy, and pristine islands offer paradise escapes. The warmth of Thai hospitality makes every traveler feel welcome in this enchanting kingdom.",
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    heroImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1920&q=80",
    tagline: "Where Nature Paints Perfection",
    description: "Switzerland is nature's masterpiece brought to life. Snow-capped peaks pierce crystal-clear skies, emerald valleys cradle pristine lakes, and charming villages dot the landscape like scenes from a fairy tale. Every season transforms this alpine wonderland into a new canvas of breathtaking beauty.",
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80",
    tagline: "Archipelago of Dreams",
    description: "Spanning over 17,000 islands, Indonesia is a tapestry of diverse cultures, landscapes, and experiences. From the spiritual heart of Bali to the untamed wilderness of Komodo, this archipelago offers everything from ancient temples and terraced rice fields to world-class diving and volcanic adventures.",
  },
];

// Helper function to get country by slug
export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((country) => country.slug === slug);
}

// Helper function to get all countries
export function getAllCountries(): Country[] {
  return countries;
}

// Helper function to get all country slugs (for static generation)
export function getAllCountrySlugs(): string[] {
  return countries.map((country) => country.slug);
}
