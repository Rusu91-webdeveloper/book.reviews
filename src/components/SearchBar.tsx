"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { getAllBooks } from "@/lib/books"
import type { Book } from "@/lib/types"
import Link from "next/link"
import Image from "next/image"

export default function SearchBar() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Book[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    getAllBooks().then(setBooks)
  }, [])

  useEffect(() => {
    if (query.length > 2) {
      const filtered = books.filter(
        (book) =>
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase()) ||
          book.themes.some((theme) => theme.toLowerCase().includes(query.toLowerCase())),
      )
      setResults(filtered)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query, books])

  const handleResultClick = () => {
    setQuery("")
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.map((book) => (
            <Link
              key={book.id}
              href={`/books/${book.slug}`}
              onClick={handleResultClick}
              className="flex items-center p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
            >
              <Image
                src={book.coverImage || "/placeholder.svg"}
                alt={book.title}
                width={40}
                height={60}
                className="rounded object-cover"
              />
              <div className="ml-3">
                <h4 className="font-medium text-gray-900">{book.title}</h4>
                <p className="text-sm text-gray-600">by {book.author}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
