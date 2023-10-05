import { bookMapper } from '@/helpers/mappers'
import { BookResponseProps } from '@/hooks/use-fetch-books'
import LibrariesTemplate, { LibrariesTemplateProps } from '@/layouts/Libraries'
import api from '@/services/api'

export const getStaticProps = async () => {
  const popularData = [
    'jEBdAwAAQBAJ',
    'YN-UDQAAQBAJ',
    'vyfgDwAAQBAJ',
    'HhPUDwAAQBAJ',
    'I1wR6d_HO1AC',
    'GjgQCwAAQBAJ',
  ]

  const popularRequests = popularData.map((id) =>
    api.get<BookResponseProps>(`/volumes/${id}`),
  )

  const popular = await Promise.all(popularRequests)

  const latestData = [
    'bzltDwAAQBAJ',
    'rBdiDwAAQBAJ',
    'CdOiDwAAQBAJ',
    'FfX-AgAAQBAJ',
    'NYarDwAAQBAJ',
    'z9fkDwAAQBAJ',
  ]

  const latestRequests = latestData.map((id) =>
    api.get<BookResponseProps>(`/volumes/${id}`),
  )

  const latest = await Promise.all(latestRequests)

  return {
    props: {
      popular: popular.map((book) => bookMapper(book.data)),
      latest: latest.map((book) => bookMapper(book.data)),
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}

const LibrariesPage = ({ popular, latest }: LibrariesTemplateProps) => {
  const videos = ['vBzBgewl4ac', '11dYx_rW_Ks', 'Yk7bzZjOXaM']

  return <LibrariesTemplate popular={popular} latest={latest} videos={videos} />
}

export default LibrariesPage
