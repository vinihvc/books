import Link from 'next/link'
import { useRouter } from 'next/router'
import { BookAlt, HomeAlt, User } from 'styled-icons/boxicons-regular'

import Text from '@/components/Text'
import * as S from './styles'

const Navigation = () => {
  const { asPath } = useRouter()

  return (
    <S.Wrapper
      height={60}
      justifyContent="space-between"
      alignItems="center"
      bg="white"
    >
      <S.Item href="/" isActive={asPath === '/' || asPath.includes('/search')}>
        <HomeAlt size={30} />

        <Text size="2xs" mt={5} color="currentColor">
          Home
        </Text>
      </S.Item>

      <S.Item href="/libraries" isActive={asPath.includes('/libraries')}>
        <BookAlt size={30} />

        <Text size="2xs" mt={5} color="currentColor">
          Libraries
        </Text>
      </S.Item>

      <S.Item href="/profile" isActive={asPath.includes('/profile')}>
        <User size={30} />

        <Text size="2xs" mt={5} color="currentColor">
          Profile
        </Text>
      </S.Item>
    </S.Wrapper>
  )
}

export default Navigation
