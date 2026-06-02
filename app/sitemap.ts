import type { MetadataRoute } from "next";
import { getAllCountrySlugs } from "@/data/countries";
import { posts } from "@/data/posts";

const SITE_URL = "https://www.herjourneysbyki.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
  ];

  const countryRoutes: MetadataRoute.Sitemap = getAllCountrySlugs().map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/${post.country}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...countryRoutes, ...postRoutes];
}
