import { USER } from '@/constants/user'

import { BookProps } from '@/components/book'
import Container from '@/components/Container'
import CurrentBook from '@/components/CurrentBook'
import DiscoverSlider from '@/components/DiscoverSlider'
import Greeting from '@/components/Greeting'
import Heading from '@/components/Heading'
import SearchInput from '@/components/SearchInput'
import VideoReview from '@/components/VideoReview'

export type HomeTemplateProps = {
  discover: BookProps[]
  reading: BookProps[]
}

const HomeTemplate = ({ discover = [], reading = [] }: HomeTemplateProps) => {
  return (
    <Container pt={50}>
      <SearchInput />

      <Greeting name={USER.name} mt={30} />

      <Heading rightText="More" link="/libraries" mt={30}>
        Discover new book
      </Heading>

      <DiscoverSlider books={discover} mt={15} />

      <Heading rightText="All" link="/profile" mt={30}>
        Currently Reading
      </Heading>

      <CurrentBook books={reading} mt={13} />

      <Heading rightText="All Video" link="/libraries" mt={26}>
        Reviews of The Days
      </Heading>

      <VideoReview videoId="vBzBgewl4ac" mt={15} />
    </Container>
  )
}

export default HomeTemplate
