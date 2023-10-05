import Link from 'next/link'
import { useRouter } from 'next/router'

import Container from '@/components/Container'
import Flex from '@/components/Flex'
import Logo from '@/components/Logo'
import Spacer from '@/components/Spacer'
import * as S from './styles'

const Navbar = () => {
  const { pathname } = useRouter()

  return (
    <Flex alignItems="center" height={60} zIndex={20}>
      <Container display="flex">
        <Link href="/">
          <Logo />
        </Link>

        <Spacer />

        <S.Items>
          <Link href="/libraries">
            <S.Item weight="medium" isActive={pathname === '/libraries'}>
              Libraries
            </S.Item>
          </Link>

          <Link href="/profile">
            <S.Item weight="medium" isActive={pathname === '/profile'}>
              Profile
            </S.Item>
          </Link>
        </S.Items>
      </Container>
    </Flex>
  )
}

export default Navbar
