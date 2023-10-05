import { useMemo } from 'react'
import { bookMapper } from '@/helpers/mappers'
import api from '@/services/api'
import useSWRInfinite from 'swr/infinite'

import { BookProps } from '@/components/book'

export type BookResponseProps = {
  id?: string
  etag?: string
  volumeInfo?: {
    title?: string
    subtitle?: string
    authors?: string[]
    imageLinks?: {
      thumbnail?: string
    }
    description?: string
  }
  bg?: string
}

export function useFetchBooks(query: string) {
  const MAX_RESULT = 12

  const { data, error, size, setSize, isValidating } = useSWRInfinite<
    BookProps[]
  >(
    (index) =>
      `/volumes?q=${query}&maxResults=${MAX_RESULT}&startIndex=${
        index * MAX_RESULT
      }`,
    async (url) => {
      const { data } = await api.get(url)

      if (!data.totalItems) {
        return []
      }

      const formattedData = data.items.map((item: BookResponseProps) =>
        bookMapper(item),
      )

      return formattedData
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  const books = useMemo(() => {
    return data ? ([] as BookProps[]).concat(...data) : []
  }, [data])

  const isEmpty = data?.[0]?.length === 0

  const isEnd = isEmpty || (data && data[data.length - 1]?.length < MAX_RESULT)

  return {
    data: books,
    error,
    size,
    setSize,
    isLoading: isValidating,
    isEmpty,
    isEnd,
  }
}

export default useFetchBooks
