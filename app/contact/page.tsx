import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MessageCircle, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | BookReviews - Get in Touch",
  description:
    "Contact BookReviews for book recommendations, review requests, or general inquiries. We love hearing from fellow book enthusiasts!",
  keywords:
    "contact book reviews, book recommendations, review requests, book blog contact",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have a book recommendation,
            a review request, or just want to chat about literature.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
            <p className="text-gray-600 mb-4">
              Send us your thoughts, suggestions, or book recommendations.
            </p>
            <a
              href="mailto:webira.rem.srl@gmail.com"
              className="text-blue-600 hover:text-blue-700 font-medium">
              webira.rem.srl@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Book Requests
            </h3>
            <p className="text-gray-600 mb-4">
              Have a book you'd like us to review? Let us know!
            </p>
            <a
              href="mailto:webira.rem.srl@gmail.com"
              className="text-blue-600 hover:text-blue-700 font-medium">
              webira.rem.srl@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              General Inquiries
            </h3>
            <p className="text-gray-600 mb-4">
              Questions about our reviews or want to collaborate?
            </p>
            <a
              href="mailto:webira.rem.srl@gmail.com"
              className="text-blue-600 hover:text-blue-700 font-medium">
              webira.rem.srl@gmail.com
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do you choose which books to review?
              </h3>
              <p className="text-gray-700">
                We select books based on a variety of factors including reader
                recommendations, current literary trends, personal interest, and
                diversity of genres. We aim to review both popular titles and
                hidden gems.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I request a specific book review?
              </h3>
              <p className="text-gray-700">
                We love hearing from our readers about books they'd like us to
                review. While we can't guarantee we'll review every requested
                book, we do our best to accommodate reader interests.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you accept books from authors or publishers?
              </h3>
              <p className="text-gray-700">
                Yes, we're open to receiving review copies from authors and
                publishers. Please contact us at webira.rem.srl@gmail.com with
                details about your book. Note that receiving a review copy
                doesn't guarantee a review or a positive review.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long does it take to review a book?
              </h3>
              <p className="text-gray-700">
                Our review timeline varies depending on the book's length,
                complexity, and our current review queue. Generally, we aim to
                publish reviews within 2-4 weeks of finishing a book.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8 text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Let's Connect!</h2>
          <p className="text-lg mb-6">
            We're always excited to connect with fellow book lovers. Don't
            hesitate to reach out!
          </p>
          <a
            href="mailto:webira.rem.srl@gmail.com"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Send us an Email
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
