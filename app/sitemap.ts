import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.somostoros.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-08-25"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/noticias`,
      lastModified: new Date("2026-08-25"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/noticias/toros-de-alicante-grupo-liga-suprema-2k26`,
      lastModified: new Date("2026-08-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/noticias/toros-de-alicante-conquistan-la-iii-copa`,
      lastModified: new Date("2026-07-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/palmares`,
      lastModified: new Date("2026-08-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}