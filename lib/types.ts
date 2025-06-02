export interface Book {
  id: string
  title: string
  author: string
  slug: string
  coverImage: string
  genre: string
  publishDate: string
  isbn?: string
  summary: string
  myThoughts: string
  themes: string[]
  rating: number
  featured: boolean
}

export interface SearchResult {
  item: Book
  score: number
}
