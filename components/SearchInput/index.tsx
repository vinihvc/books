import { FormEvent, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import useKeyFocus from '@/hooks/use-key-focus'
import { Search as SearchIcon } from 'styled-icons/bootstrap'

import Input, { InputProps } from '@/components/Input'
import * as S from './styles'

export type SearchInputProps = InputProps

const SearchInput = ({ ...props }: SearchInputProps) => {
  const [search, setSearch] = useState('')
  const $ref = useRef(null)

  useKeyFocus($ref, 'k')

  const { push, query } = useRouter()

  const handleSearch = (event: FormEvent) => {
    event.preventDefault()

    push({
      pathname: '/search',
      query: { q: search },
    })
  }

  useEffect(() => {
    setSearch((query?.q as string) || '')
  }, [query.q])

  return (
    <S.Wrapper onSubmit={handleSearch}>
      <Input
        ref={$ref}
        icon={<SearchIcon />}
        value={search}
        placeholder="Search book"
        onInputChange={setSearch}
        command="/"
        {...props}
      />
    </S.Wrapper>
  )
}

export default SearchInput
