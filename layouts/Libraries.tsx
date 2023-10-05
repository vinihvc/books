import { Book, BookProps } from '@/components/book'
import Container from '@/components/Container'
import Flex from '@/components/Flex'
import Grid from '@/components/Grid'
import Heading from '@/components/Heading'
import VideoReview from '@/components/VideoReview'

export type LibrariesTemplateProps = {
  popular: BookProps[]
  latest: BookProps[]
  videos?: string[]
}

const LibrariesTemplate = ({
  popular,
  latest,
  videos,
}: LibrariesTemplateProps) => {
  return (
    <Container pt={50}>
      <Heading>Popular</Heading>

      <Grid columns={{ base: 3, sm: 4, md: 5, lg: 9 }} gap={17} mt={20}>
        {popular?.map((book) => <Book key={book.id} {...book} />)}
      </Grid>

      <Heading mt={50}>Latest Releases</Heading>

      <Grid columns={{ base: 3, sm: 4, md: 5, lg: 9 }} gap={17} mt={20}>
        {latest?.map((book) => <Book key={book.id} {...book} />)}
      </Grid>

      <Heading mt={50} mb={20}>
        Reviews
      </Heading>

      <Flex gap={17}>
        {videos?.map((video) => <VideoReview key={video} videoId={video} />)}
      </Flex>
    </Container>
  )
}

export default LibrariesTemplate
