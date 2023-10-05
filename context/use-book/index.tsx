import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem, setStorageItem } from '@/helpers/storage'

import { BookProps } from '@/components/book'

export const READING_KEY = 'READING'

export type BookContextProps = {
  reading: BookProps[]
  addToReading: (book: BookProps) => void
  removeFromReading: (book: BookProps) => void
}

export const BookContext = createContext({} as BookContextProps)

export const BookProvider = ({ children }: TChildrenProps) => {
  const [reading, setReading] = useState<BookProps[]>([])

  useEffect(() => {
    const data = getStorageItem(READING_KEY)

    if (data) {
      setReading(data)
    }
  }, [])

  const saveReading = (books: BookProps[]) => {
    setReading(books)

    setStorageItem(READING_KEY, books as string[])
  }

  const addToReading = (book: BookProps) => {
    setReading([...reading, book])

    setStorageItem(READING_KEY, [...reading, book] as string[])
  }

  const removeFromReading = (book: BookProps) => {
    const newReadingBooks = reading.filter((item) => item.id !== book.id)

    saveReading(newReadingBooks)
  }

  return (
    <BookContext.Provider value={{ reading, addToReading, removeFromReading }}>
      {children}
    </BookContext.Provider>
  )
}

export const useBook = () => {
  return useContext(BookContext)
}
