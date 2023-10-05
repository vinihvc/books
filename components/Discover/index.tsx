import Link from 'next/link'
import { BarChartSquare } from 'styled-icons/boxicons-regular'

import { BookProps } from '@/components/book'
import { Box } from '@/components/Box'
import Flex from '@/components/Flex'
import Image from '@/components/Image'
import { Circle, Rectangle, Triangle, Wave } from '@/components/Polygons'
import Text from '@/components/Text'
import * as S from './styles'

export type DiscoverProps = {
  /**
   * Book info
   */
  book: BookProps
  /**
   * Set wave style to background
   */
  index: number
}

const Discover = ({ book, index }: DiscoverProps) => {
  type randomWave = {
    [key: number]: React.ReactNode
  }

  type randomColor = {
    [key: number]: string
  }

  const randomWave: randomWave = {
    0: <Wave size="medium" bottom={-15} left={-25} />,
    1: <Wave size="medium" top={-30} left={-5} />,
    2: <Wave size="medium" bottom={-15} right={-25} />,
    3: <Wave size="medium" top={-30} right={-5} />,
  }

  const randomColor: randomColor = {
    0: 'darkBlue',
    1: 'purple',
    2: 'orange',
    3: 'primary',
  }

  return (
    <Link href={`/book/${book.id}`} passHref>
      <S.Wrapper>
        <Flex
          height={128}
          bg={randomColor[index]}
          borderRadius="base"
          justifyContent="space-between"
          alignItems="center"
          position="relative"
          overflow="hidden"
          px={20}
          py={15}
        >
          {randomWave[index]}

          <Rectangle right={82} bottom={28} rotate={10} />

          <Circle right={110} top={14} boxSize={18} bg="blue" outline />

          <Triangle right={70} top={1} boxSize={50} rotate={-35} bg="yellow" />

          <Box maxWidth="calc(100% - 100px)" zIndex={1}>
            <S.Title
              forwardedAs="h3"
              family="heading"
              weight="bold"
              color="white"
              letter="2px"
              isTruncated
            >
              {book?.title}
            </S.Title>

            <Text as="h4" color="white" size="xs" isTruncated>
              {String(book?.authors)}
            </Text>

            <Flex mt={30} color="white" alignItems="center">
              <BarChartSquare size={20} />

              <Text color="white" size="2xs" ml={3}>
                <Text as="strong" weight="bold" color="white">
                  120+
                </Text>

                <Text as="span" color="white">
                  {' '}
                  Read now
                </Text>
              </Text>
            </Flex>
          </Box>

          <Box zIndex={1}>
            <Image
              src={book?.image}
              alt={book?.title}
              width={72}
              height={111}
            />
          </Box>
        </Flex>
      </S.Wrapper>
    </Link>
  )
}

export default Discover
