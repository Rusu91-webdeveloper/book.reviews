import { getRelatedBooks } from "@/lib/books"
import BookCard from "./BookCard"

interface RelatedBooksProps {
  currentBookSlug: string
}

export default async function RelatedBooks({ currentBookSlug }: RelatedBooksProps) {
  const relatedBooks = await getRelatedBooks(currentBookSlug, 3)

  if (relatedBooks.length === 0) {
    return null
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  )
}
