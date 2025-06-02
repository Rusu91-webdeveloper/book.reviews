import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Privacy Policy | BookReviews",
  description: "BookReviews privacy policy - Learn how we collect, use, and protect your personal information.",
  robots: "noindex, nofollow",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              At BookReviews, we respect your privacy and are committed to protecting your personal data. This privacy
              policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Information You Provide</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Contact information when you email us</li>
              <li>Comments and feedback you provide</li>
              <li>Newsletter subscription information (if applicable)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Information Automatically Collected</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Website usage data through analytics</li>
              <li>IP address and browser information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To improve our website and user experience</li>
              <li>To analyze website traffic and usage patterns</li>
              <li>To send newsletters or updates (with your consent)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
            <p className="text-gray-700 mb-6">
              We use cookies to enhance your browsing experience and analyze website traffic. You can control cookie
              settings through your browser preferences. Some features of our website may not function properly if
              cookies are disabled.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">We may use third-party services such as:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Google Analytics for website analytics</li>
              <li>Social media platforms for sharing content</li>
              <li>Comment systems for user engagement</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
              100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this privacy policy or our data practices, please contact us at:
            </p>
            <p className="text-gray-700">Email: privacy@bookreviews.com</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new
              privacy policy on this page and updating the "Last updated" date.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
