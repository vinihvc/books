import { useRouter } from 'next/router'
import useFetchBooks from '@/hooks/use-fetch-books'
import { ChevronDown } from 'styled-icons/boxicons-regular'

import { Book } from '@/components/book'
import Container from '@/components/Container'
import Flex from '@/components/Flex'
import Grid from '@/components/Grid'
import SearchInput from '@/components/SearchInput'
import Spinner from '@/components/Spinner'
import Text from '@/components/Text'
import * as S from './styles'

const SearchTemplate = () => {
  const { query } = useRouter()

  const { data, size, isLoading, isEmpty, isEnd, setSize } = useFetchBooks(
    (query.q as string) || '',
  )

  return (
    <Container pt={50}>
      <SearchInput />

      {isEmpty ? (
        <Text size="2xl" my={60} align="center">
          No books found. 🤔
        </Text>
      ) : (
        <>
          <Grid columns={{ base: 3, sm: 4, md: 6, lg: 8 }} gap={17} mt={40}>
            {data?.map((book) => <Book key={book.etag} {...book} />)}
          </Grid>

          <Flex justifyContent="center" py={20}>
            {isLoading ? (
              <Text as="div" size="sm" weight="semibold">
                <Spinner size={20} />
              </Text>
            ) : (
              !isEnd &&
              query.q && (
                <S.More type="button" onClick={() => setSize(size + 1)}>
                  <Text as="div" size="sm" weight="semibold">
                    Load more
                  </Text>

                  <ChevronDown size={20} />
                </S.More>
              )
            )}
          </Flex>
        </>
      )}
    </Container>
  )
}

export default SearchTemplate
