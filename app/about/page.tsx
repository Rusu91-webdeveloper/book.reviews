import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { BookOpen, Heart, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "About | BookReviews - Our Story & Mission",
  description:
    "Learn about BookReviews, our passion for literature, and our mission to help readers discover their next great book through thoughtful reviews.",
  keywords: "about book reviews, book blog, literature, reading community, book recommendations",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About BookReviews</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to our corner of the literary world, where every book tells a story and every review opens a
            conversation.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-6">
              BookReviews was born from a simple belief: that the right book at the right time can change everything. As
              passionate readers ourselves, we understand the joy of discovering a book that speaks to your soul,
              challenges your thinking, or simply provides the perfect escape.
            </p>

            <p className="text-gray-700 mb-6">
              What started as personal reading notes shared among friends has grown into a comprehensive platform for
              thoughtful book reviews and recommendations. We believe that every book deserves a fair and honest review,
              and every reader deserves to find their next great read.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              Our mission is simple: to help readers discover books that will enrich their lives. We do this by
              providing honest, detailed reviews that go beyond simple plot summaries to explore themes, writing style,
              and the overall reading experience.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Thoughtful Reviews</h3>
            <p className="text-gray-600">
              Every review is carefully crafted to provide meaningful insights into the book's content, style, and
              impact.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Honest Opinions</h3>
            <p className="text-gray-600">
              We believe in authentic, unbiased reviews that help you make informed reading decisions based on your
              preferences.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Community Focus</h3>
            <p className="text-gray-600">
              We're building a community of readers who share a love for literature and meaningful discussions about
              books.
            </p>
          </div>
        </div>

        {/* Personal Touch */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Reading Journey</h2>
          <p className="text-lg mb-6">
            Whether you're looking for your next page-turner, seeking literary analysis, or simply want to connect with
            fellow book lovers, you've found your home.
          </p>
          <p className="text-lg">Happy reading! 📚</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
