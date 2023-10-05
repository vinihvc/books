import generateSeo from '@/helpers/generate-seo'
import { NextSeo } from 'next-seo'

import { BackButton } from '@/components/back-button'
import { BookProps } from '@/components/book'
import { Box } from '@/components/Box'
import Container from '@/components/Container'
import { DetailBackground } from '@/components/DetailBackground'
import Flex from '@/components/Flex'
import FloatingActionButton from '@/components/FloatingActionButton'
import Image from '@/components/Image'
import { Circle, Wave } from '@/components/Polygons'
import Text from '@/components/Text'
import * as S from './styles'

export type BookTemplateProps = {
  book: BookProps
}

const BookTemplate = ({ book }: BookTemplateProps) => {
  return (
    <>
      <NextSeo {...generateSeo(book)} />

      <DetailBackground>
        <Flex justifyContent="center">
          <Box position="absolute" top="55px" left="33px">
            <BackButton />
          </Box>

          <Flex
            position="absolute"
            bottom={-31}
            boxShadow="0px 23px 26px -24px #00000050"
          >
            <Circle boxSize={15} top={36} left={-62} bg="primary" />

            <Circle boxSize={63} top={31} left={-36} bg="darkBlue" />

            <Circle boxSize={24} top={1} left={138} bg="blue" outline />

            <Wave size="small" bottom={44} left={122} />

            <Box zIndex={100}>
              <Image
                src={book.image}
                alt={`${book.title} cover`}
                width={151}
                height={234}
              />
            </Box>
          </Flex>
        </Flex>
      </DetailBackground>

      <Container my={67}>
        <Text as="h1" size="lg">
          <Text as="span" weight="bold">
            {book.title}
          </Text>

          {book.subtitle && <Text as="span">: {book.subtitle}</Text>}
        </Text>

        <Text color="primary" size="sm" weight="medium" mt={7}>
          {book.authors && book.authors.join(', ')}
        </Text>

        {book.description && (
          <S.Description
            dangerouslySetInnerHTML={{ __html: book.description }}
            mt={10}
          />
        )}

        <FloatingActionButton book={book} />
      </Container>
    </>
  )
}

export default BookTemplate
