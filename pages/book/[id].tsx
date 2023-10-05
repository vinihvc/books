import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { bookMapper } from '@/helpers/mappers'
import BookTemplate, { BookTemplateProps } from '@/layouts/Book'
import api from '@/services/api'

/**
 * Real world -> get external API
 */
export const getStaticPaths = async () => {
  const allData = [
    'dsz5AwAAQBAJ',
    'PqbDdQvjd8AC',
    'tvfyz-4JILwC',
    'tQ1C-rvAfJUC',
    'rISmCgAAQBAJ',
  ]

  const paths = allData.map((id) => ({ params: { id } }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await api.get(`/volumes/${params?.id}`)

  return {
    props: {
      book: bookMapper(data),
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}

const BookPage = ({ book }: BookTemplateProps) => {
  const { isFallback } = useRouter()

  if (isFallback) return null

  return <BookTemplate book={book} />
}

export default BookPage
