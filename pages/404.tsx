import Link from 'next/link'

import Container from '@/components/Container'
import Flex from '@/components/Flex'
import Image from '@/components/Image'
import Text from '@/components/Text'

const Page404 = () => {
  return (
    <Container>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 60px)"
        textAlign="center"
        flexDirection="column"
      >
        <Text family="heading" size="2xl" weight="bold">
          404
        </Text>

        <Text family="heading" size="2xl" mt={10}>
          Page Not found
        </Text>

        <Image
          src="/img/not-found.png"
          alt="Not found"
          width={186}
          height={230}
          my={20}
        />

        <Link href="/">
          <Text align="center" family="heading" size="xl" color="orange">
            Back to home
          </Text>
        </Link>
      </Flex>
    </Container>
  )
}

export default Page404
