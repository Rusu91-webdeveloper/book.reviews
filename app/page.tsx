import { getFeaturedBooks } from "@/lib/books"
import BookCard from "@/components/BookCard"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { BookOpen, Star, Users } from "lucide-react"

export default async function HomePage() {
  const featuredBooks = await getFeaturedBooks()

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Your Next Great Read</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Thoughtful book reviews and recommendations to help you find books that inspire, educate, and entertain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <span>Curated Reviews</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6" />
              <span>Quality Ratings</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6" />
              <span>Community Driven</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Book Reviews</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our latest and most recommended books, carefully selected for their quality and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Trust Our Reviews?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every book review on our site is written with care and attention to detail. We believe in honest,
                thoughtful analysis that helps you make informed reading decisions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">In-depth analysis of themes and writing style</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Honest ratings and recommendations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Diverse genres and perspectives</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "Reading is a conversation. A good book review should help you decide if it's a conversation you want to
                join."
              </blockquote>
              <cite className="text-gray-600">— Our Philosophy</cite>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
