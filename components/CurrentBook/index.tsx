import Link from 'next/link'
import { JournalBookmarkFill } from 'styled-icons/bootstrap'

import { BookProps } from '@/components/book'
import { Box } from '@/components/Box'
import Flex, { FlexProps } from '@/components/Flex'
import Image from '@/components/Image'
import { Circle, Rectangle, Wave } from '@/components/Polygons'
import Text from '@/components/Text'
import * as S from './styles'

export type CurrentBookProps = {
  /**
   * Prop description
   */
  books: BookProps[]
} & FlexProps

const CurrentBook = ({ books, ...prop }: CurrentBookProps) => {
  const [book] = books

  return (
    <Link style={{ width: '100%' }} href={`/book/${book.id}`}>
      <S.Wrapper
        maxWidth={500}
        height={136}
        bg="transparent"
        borderRadius="base"
        alignItems="center"
        position="relative"
        overflow="auto"
        width="100%"
        my={20}
        {...prop}
      >
        <Flex position="absolute" zIndex={1}>
          <Image
            src={book?.image}
            width={91}
            height={136}
            alt={book?.title}
            ml={20}
            shadow
          />
        </Flex>

        <S.Card
          height={100}
          bg="lightGreen"
          pl={120}
          alignItems="center"
          flex="1"
          position="relative"
          overflow="hidden"
          boxShadow="0px 3px 16px rgba(121, 141, 67, 0.115084)"
        >
          <Polygons />

          <Box>
            <Text
              as="h3"
              family="heading"
              size="lg"
              weight="bold"
              letter="2px"
              color="#2a2b26"
            >
              {book?.title}
            </Text>

            <Text as="h4" size="2xs" color="#74776d" weight="medium" mt={5}>
              by {String(book?.authors)}
            </Text>

            <Flex alignItems="center" mt={15}>
              <Box as={JournalBookmarkFill} size={10} color="black" />

              <Text as="div" color="#2a2b26" size="2xs" ml={5}>
                <Text as="span" color="currentColor" weight="medium">
                  Chapter
                  <Text as="span" color="primary" weight="bold">
                    {` ${2} `}
                  </Text>
                  From 9
                </Text>
              </Text>
            </Flex>
          </Box>
        </S.Card>
      </S.Wrapper>
    </Link>
  )
}

const Polygons = () => (
  <>
    <Circle boxSize={116} bg="#e9efd2" top={-39} left={-27} />

    <Circle boxSize={18} bg="blue" top={-5} left={223} outline />

    <Wave size="small" top={-13} style={{ right: -19, zIndex: 10 }} />

    <Circle boxSize={116} bg="#ecf2d7" bottom={-36} right={-49} />

    <Rectangle bottom={33} right={-20} rotate={13} />
  </>
)

export default CurrentBook
