import { bookMapper } from '@/helpers/mappers'
import { BookResponseProps } from '@/hooks/use-fetch-books'
import HomeTemplate, { HomeTemplateProps } from '@/layouts/Home'
import api from '@/services/api'

/**
 * Real world -> get external API
 */
export const getStaticProps = async () => {
  const discoverData = [
    'dsz5AwAAQBAJ',
    'PqbDdQvjd8AC',
    'tvfyz-4JILwC',
    'tQ1C-rvAfJUC',
  ]

  const discoverRequests = discoverData.map((id) =>
    api.get<BookResponseProps>(`/volumes/${id}`),
  )

  const discover = await Promise.all(discoverRequests)

  const readingData = ['rISmCgAAQBAJ']

  const readingRequests = readingData.map((id) =>
    api.get<BookResponseProps>(`/volumes/${id}`),
  )

  const reading = await Promise.all(readingRequests)

  return {
    props: {
      discover: discover.map((book) => bookMapper(book.data)),
      reading: reading.map((book) => bookMapper(book.data)),
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}

const Home = ({ discover, reading }: HomeTemplateProps) => {
  return <HomeTemplate discover={discover} reading={reading} />
}

export default Home
