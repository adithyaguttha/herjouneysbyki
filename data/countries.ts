export interface Country {
  slug: string;
  name: string;
  heroImage: string;
  description: string;
  tagline: string;
  comingSoon?: boolean;
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
    slug: "chile",
    name: "Chile",
    heroImage: "https://images.unsplash.com/photo-1531219572328-a0171b4448a3?w=1920&q=80",
    tagline: "Patagonia & beyond",
    description: "From the Atacama Desert to the glaciers of Patagonia, Chile stretches across breathtaking landscapes that are still on our wishlist.",
    comingSoon: true,
  },
  {
    slug: "peru",
    name: "Peru",
    heroImage: "/images/countries/peru.jpeg",
    tagline: "Andes & Inca trails",
    description: "Machu Picchu, Sacred Valley, and the colourful streets of Cusco — Peru is on our travel list and we can't wait to explore it.",
    comingSoon: true,
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
