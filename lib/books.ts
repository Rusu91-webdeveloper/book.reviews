import type { Book } from "./types"

export const booksData: Book[] = [
  {
    id: "1",
    title: "Born for the Future",
    author: "Casey Wrenly",
    slug: "born-for-the-future",
    coverImage: "/images/covers/born-for-the-future.png",
    genre: "Education & Parenting",
    publishDate: "2024-01-15",
    isbn: "978-1234567890",
    summary:
      "A comprehensive guide for parents looking to prepare their children for a technology-driven future. This book explores how AI, technology, and imagination can work together to unlock every child's potential. Casey Wrenly provides practical strategies and insights for empowering the next generation of innovators and creative thinkers.",
    myThoughts:
      "This is an incredibly timely and important book for modern parents. Wrenly does an excellent job of balancing the excitement of technological possibilities with practical, actionable advice. The book doesn't just talk about the future - it gives parents concrete tools to help their children thrive in it. What I particularly appreciated was the emphasis on imagination alongside technology, showing that creativity and innovation go hand in hand.",
    themes: ["Technology", "Education", "Parenting", "Innovation", "Future Skills"],
    rating: 5,
    featured: true,
  },
  {
    id: "2",
    title: "STEM Play for Neurodiverse Minds",
    author: "Casey Wrenly",
    slug: "stem-play-neurodiverse-minds",
    coverImage: "/images/covers/stem-play-neurodiverse.jpeg",
    genre: "Education & Special Needs",
    publishDate: "2024-03-20",
    isbn: "978-1234567891",
    summary:
      "An innovative approach to STEM education that celebrates neurodiversity and provides inclusive learning strategies. This book offers creative play-based activities and methodologies specifically designed to engage neurodiverse learners in science, technology, engineering, and mathematics. Perfect for educators, parents, and therapists working with children who learn differently.",
    myThoughts:
      "As someone passionate about inclusive education, this book really resonated with me. Wrenly has created something truly special here - a resource that doesn't just accommodate neurodiverse learners, but celebrates their unique strengths and perspectives. The play-based approach is brilliant, making STEM subjects accessible and enjoyable for all types of minds. The practical activities are well-designed and the theoretical foundation is solid.",
    themes: ["STEM Education", "Neurodiversity", "Inclusive Learning", "Play-Based Learning", "Special Education"],
    rating: 5,
    featured: true,
  },
]

export async function getAllBooks(): Promise<Book[]> {
  return booksData
}

export async function getBookBySlug(slug: string): Promise<Book | null> {
  const book = booksData.find((book) => book.slug === slug)
  return book || null
}

export async function getAllBookSlugs(): Promise<string[]> {
  return booksData.map((book) => book.slug)
}

export async function getFeaturedBooks(): Promise<Book[]> {
  return booksData.filter((book) => book.featured)
}

export async function getRelatedBooks(currentSlug: string, limit = 3): Promise<Book[]> {
  const currentBook = await getBookBySlug(currentSlug)
  if (!currentBook) return []

  const relatedBooks = booksData
    .filter((book) => book.slug !== currentSlug)
    .filter(
      (book) =>
        book.author === currentBook.author ||
        book.genre === currentBook.genre ||
        book.themes.some((theme) => currentBook.themes.includes(theme)),
    )
    .slice(0, limit)

  return relatedBooks
}
