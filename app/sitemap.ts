import { getAllBookSlugs } from "@/lib/books"
import type { MetadataRoute } from "next"

const URL = process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const bookSlugs = await getAllBookSlugs()

  const books = bookSlugs.map((slug) => ({
    url: `${URL}/books/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const routes = [
    {
      url: URL,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${URL}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${URL}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${URL}/privacy-policy`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ]

  return [...routes, ...books]
}
