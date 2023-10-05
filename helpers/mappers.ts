import { BookResponseProps } from '@/hooks/use-fetch-books'

import { BookProps } from '@/components/book'

export const bookMapper = (book: BookResponseProps) => {
  return book
    ? {
        id: book.id || null,
        etag: book.etag || null,
        title: book.volumeInfo?.title || null,
        subtitle: book.volumeInfo?.subtitle || null,
        description: book.volumeInfo?.description || null,
        authors: book.volumeInfo?.authors || null,
        image: book.volumeInfo?.imageLinks?.thumbnail || null,
      }
    : ({} as BookProps)
}
