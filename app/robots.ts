import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://book-reviews-git-main-webira-rem-srls-projects.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/.env*"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
