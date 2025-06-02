import { getBookBySlug, getAllBookSlugs } from "@/lib/books";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Star, Calendar, BookOpen, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedBooks from "@/components/RelatedBooks";
import SocialShare from "@/components/SocialShare";
import type { Metadata } from "next";
import Script from "next/script";

interface BookPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = await getAllBookSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const book = await getBookBySlug(params.slug);

  if (!book) {
    return {
      title: "Book Not Found",
    };
  }

  const title = `${book.title} by ${book.author} | Book Review`;
  const description = book.summary.substring(0, 155) + "...";
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/books/${params.slug}`;

  return {
    title,
    description,
    keywords: `${book.title}, ${book.author}, book review, ${
      book.genre
    }, ${book.themes.join(", ")}`,
    openGraph: {
      title,
      description,
      images: [
        {
          url: book.coverImage,
          width: 600,
          height: 900,
          alt: `${book.title} cover`,
        },
      ],
      type: "article",
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [book.coverImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const book = await getBookBySlug(params.slug);

  if (!book) {
    notFound();
  }

  const currentUrl = `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000"
  }/books/${params.slug}`;

  // JSON-LD Schema for Book
  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: {
      "@type": "Person",
      name: book.author,
    },
    image: book.coverImage,
    url: currentUrl,
    genre: book.genre,
    isbn: book.isbn,
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: book.rating.toString(),
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "BookReviews",
      },
      reviewBody: book.myThoughts,
    },
    // Adding more specific properties for better SEO
    bookFormat: "Hardcover",
    potentialAction: {
      "@type": "ReadAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: currentUrl,
      },
    },
    keywords: book.themes.join(", "),
  };

  // Convert the schema to a string
  const bookSchemaString = JSON.stringify(bookSchema);

  return (
    <div className="min-h-screen bg-gray-50">
      <Script
        id="book-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: bookSchemaString }}
        strategy="beforeInteractive"
      />

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Book Cover */}
              <div className="md:col-span-1">
                <div className="relative aspect-[3/4] w-full max-w-sm mx-auto">
                  <Image
                    src={book.coverImage || "/placeholder.svg"}
                    alt={`${book.title} cover`}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Book Info */}
              <div className="md:col-span-2">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {book.title}
                </h1>
                <p className="text-xl text-gray-700 mb-4">by {book.author}</p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        i < book.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-lg text-gray-600">
                    ({book.rating}/5)
                  </span>
                </div>

                {/* Book Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <BookOpen className="h-5 w-5 mr-2" />
                    <span>{book.genre}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>
                      Published:{" "}
                      {new Date(book.publishDate).toLocaleDateString()}
                    </span>
                  </div>
                  {book.isbn && (
                    <div className="flex items-center text-gray-600">
                      <Tag className="h-5 w-5 mr-2" />
                      <span>ISBN: {book.isbn}</span>
                    </div>
                  )}
                </div>

                {/* Themes */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Themes</h3>
                  <div className="flex flex-wrap gap-2">
                    {book.themes.map((theme) => (
                      <span
                        key={theme}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-8 pb-8">
            {/* Summary */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>{book.summary}</p>
              </div>
            </section>

            {/* My Thoughts */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                My Thoughts
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>{book.myThoughts}</p>
              </div>
            </section>

            {/* Social Share */}
            <SocialShare
              url={currentUrl}
              title={book.title}
            />
          </div>
        </article>

        {/* Related Books */}
        <RelatedBooks currentBookSlug={params.slug} />
      </main>

      <Footer />
    </div>
  );
}
