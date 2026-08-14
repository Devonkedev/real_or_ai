import type { MetadataRoute } from "next";
import { artifacts } from "@/data/artifacts";

const siteUrl = "https://real-or-ai-india.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/play`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/archive`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/about`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const artifactRoutes: MetadataRoute.Sitemap = artifacts.map((artifact) => ({
    url: `${siteUrl}/archive/${artifact.id}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...artifactRoutes];
}
