import Link from 'next/link'

import Flex from '@/components/Flex'
import Image from '@/components/Image'
import Text from '@/components/Text'

export type BookProps = {
  id?: string
  etag?: string
  title?: string
  subtitle?: string
  description?: string
  authors?: string[]
  image?: string
  bg?: string
}

export const Book = ({ ...book }: BookProps) => (
  <Link href={`/book/${book.id}`}>
    <Flex justifyContent="center">
      <Image
        src={book.image}
        alt={book.title}
        width={105}
        height={153}
        shadow
      />
    </Flex>

    <Text
      as="h3"
      color="#313131"
      weight="semibold"
      size="xs"
      mt={9}
      isTruncated
    >
      {book.title}
    </Text>

    <Text as="h4" color="#313131" weight="bold" size="2xs" isTruncated>
      {book.authors && `by ${book.authors.join(', ')}`}
    </Text>
  </Link>
)
