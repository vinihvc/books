import { useBook } from '@/context/use-book'
import { bookMapper } from '@/helpers/mappers'
import { BookResponseProps } from '@/hooks/use-fetch-books'
import ProfileTemplate, { ProfileTemplateProps } from '@/layouts/Profile'
import api from '@/services/api'

/**
 * Real world -> get external API
 */
export const getStaticProps = async () => {
  const readData = [
    '5VD2SwmX7dAC',
    'zDsqDwAAQBAJ',
    '2LeZDwAAQBAJ',
    '3niiEQjRbocC',
    'I5pBDwAAQBAJ',
    'jRgfEAAAQBAJ',
  ]

  const readRequests = readData.map((id) =>
    api.get<BookResponseProps>(`/volumes/${id}`),
  )

  const read = await Promise.all(readRequests)

  return {
    props: {
      read: read.map((book) => bookMapper(book.data)),
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}

const ProfilePage = ({ read }: ProfileTemplateProps) => {
  const { reading } = useBook()

  return <ProfileTemplate reading={reading} read={read} />
}

export default ProfilePage
