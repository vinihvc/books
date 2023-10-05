import { USER } from '@/constants/user'

import { Book, BookProps } from '@/components/book'
import { Box } from '@/components/Box'
import Container from '@/components/Container'
import Divider from '@/components/Divider'
import Flex from '@/components/Flex'
import Grid from '@/components/Grid'
import Heading from '@/components/Heading'
import Image from '@/components/Image'
import { Circle, Triangle, Wave } from '@/components/Polygons'
import ProfileResume from '@/components/ProfileResume'
import Text from '@/components/Text'

export type ProfileTemplateProps = {
  reading: BookProps[]
  read: BookProps[]
}

const ProfileTemplate = ({ reading = [], read = [] }: ProfileTemplateProps) => {
  return (
    <Container pt={50}>
      <Flex justifyContent="center" textAlign="center">
        <Box position="relative">
          <Polygons />

          <Image
            src={`${USER.github}.png`}
            alt="Profile image"
            radius="full"
            width={150}
            height={150}
            style={{ margin: 'auto' }}
          />

          <Text family="heading" size="2xl" weight="semibold" mt={20}>
            {USER.name}
          </Text>
        </Box>
      </Flex>

      <ProfileResume
        read={read.length}
        reading={reading.length}
        want={10}
        pt={20}
      />

      <Divider bg="gray" my={20} />

      <Heading>Reading books</Heading>

      {reading.length ? (
        <Grid columns={{ base: 3, sm: 4, md: 5, lg: 9 }} gap={17} mt={20}>
          {reading?.map((book) => <Book key={book.id} {...book} />)}
        </Grid>
      ) : (
        <Text size="sm" mt={20}>
          You are not reading any book 😥
        </Text>
      )}

      <Heading mt={30}>Read books</Heading>

      <Grid columns={{ base: 3, sm: 4, md: 5, lg: 9 }} gap={17} mt={20}>
        {read?.map((book) => <Book key={book.id} {...book} />)}
      </Grid>
    </Container>
  )
}

const Polygons = () => (
  <>
    <Circle boxSize={35} bg="primary" left={-35} top={27} />

    <Wave size="small" right={-35} top={-33} />

    <Circle boxSize={10} bg="orange" right={-35} bottom={100} outline />

    <Triangle boxSize={10} bg="blue" left={0} top={100} />

    <Triangle right={70} bottom={50} boxSize={50} rotate={45} bg="link" />
  </>
)

export default ProfileTemplate
