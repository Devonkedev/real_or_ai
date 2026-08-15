import type { MetadataRoute } from "next";

const siteUrl = "https://real-or-ai-india.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/play`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/about`, changeFrequency: "yearly", priority: 0.5 },
  ];
}
