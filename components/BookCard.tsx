import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import type { Book } from "@/lib/types"

interface BookCardProps {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/books/${book.slug}`}>
        <div className="relative h-64 w-full">
          <Image
            src={book.coverImage || "/placeholder.svg"}
            alt={`${book.title} cover`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/books/${book.slug}`}>
          <h3 className="font-bold text-lg mb-2 hover:text-blue-600 transition-colors line-clamp-2">{book.title}</h3>
        </Link>

        <p className="text-gray-600 mb-2">by {book.author}</p>

        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < book.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
          ))}
          <span className="ml-2 text-sm text-gray-600">({book.rating}/5)</span>
        </div>

        <p className="text-gray-700 text-sm mb-3 line-clamp-3">{book.summary}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {book.themes.slice(0, 3).map((theme) => (
            <span key={theme} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              {theme}
            </span>
          ))}
        </div>

        <Link
          href={`/books/${book.slug}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
        >
          Read Review
        </Link>
      </div>
    </div>
  )
}
