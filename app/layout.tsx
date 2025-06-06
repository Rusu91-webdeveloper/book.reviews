import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Using public URL constant to avoid repetition
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://book-reviews-git-main-webira-rem-srls-projects.vercel.app";

export const metadata: Metadata = {
  title:
    "Born for the Future & STEM Play for Neurodiverse Minds | Casey Wrenly Books",
  description:
    "Discover books by Casey Wrenly including Born for the Future and STEM Play for Neurodiverse Minds. Thoughtful reviews on education, parenting, and neurodiversity.",
  keywords:
    "Casey Wrenly, Born for the Future, STEM Play for Neurodiverse Minds, book reviews, neurodiversity, education, parenting, STEM education",
  authors: [{ name: "BookReviews" }],
  openGraph: {
    title:
      "Born for the Future & STEM Play for Neurodiverse Minds | Casey Wrenly Books",
    description:
      "Discover books by Casey Wrenly including Born for the Future and STEM Play for Neurodiverse Minds.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Born for the Future & STEM Play for Neurodiverse Minds | Casey Wrenly Books",
    description:
      "Discover books by Casey Wrenly including Born for the Future and STEM Play for Neurodiverse Minds.",
  },
  generator: "v0.dev",
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="JkHbcwY5aVBdfJtRNppMwTU011p1fHSxZ2iQoiJ6Z8M"
        />
        {/* Don't include a separate canonical link as it's already in metadata */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
