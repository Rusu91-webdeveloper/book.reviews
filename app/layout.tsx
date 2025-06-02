import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BookReviews - Thoughtful Book Reviews & Recommendations",
  description:
    "Discover amazing books through thoughtful reviews and recommendations. Find your next great read with our curated collection of book reviews.",
  keywords: "book reviews, book recommendations, literature, reading, books, authors, fiction, non-fiction",
  authors: [{ name: "BookReviews" }],
  openGraph: {
    title: "BookReviews - Thoughtful Book Reviews & Recommendations",
    description: "Discover amazing books through thoughtful reviews and recommendations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BookReviews - Thoughtful Book Reviews & Recommendations",
    description: "Discover amazing books through thoughtful reviews and recommendations.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
