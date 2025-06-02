import { getFeaturedBooks } from "@/lib/books";
import BookCard from "@/components/BookCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Star, Users, Lightbulb } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
  const featuredBooks = await getFeaturedBooks();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Casey Wrenly's Book Collection
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover thoughtful reviews of Casey Wrenly's educational books on
            STEM, parenting, and neurodiverse learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <span>Education & Parenting</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6" />
              <span>STEM Education</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-6 w-6" />
              <span>Neurodiversity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Casey Wrenly's Featured Books
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore Casey Wrenly's impactful books on education, technology,
              and neurodiversity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Casey Wrenly
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Casey Wrenly is a renowned author specializing in educational
                resources for parents, teachers, and caregivers. With expertise
                in STEM education and neurodiversity, Wrenly's books provide
                valuable insights for supporting children's unique learning
                journeys.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Featured Works:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">1</span>
                  </div>
                  <span className="text-gray-700">
                    <strong>Born for the Future</strong> - Preparing children
                    for a technology-driven world
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <span className="text-gray-700">
                    <strong>STEM Play for Neurodiverse Minds</strong> -
                    Inclusive learning strategies for diverse needs
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/books/stem-play-neurodiverse-minds"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Explore Books
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Key Topics:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">
                    Neurodiversity in education
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">
                    STEM learning through play
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">
                    Technology and child development
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">
                    Inclusive educational strategies
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">
                    Parenting in the digital age
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
