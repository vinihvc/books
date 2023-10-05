import styled from 'styled-components'
import media from 'styled-media-query'

import Flex from '@/components/Flex'

export const Wrapper = styled(Flex)`
  height: 170px;

  ${media.greaterThan('medium')`
    height: 200px;
  `}
`

export const Image = styled.img`
  background-size: cover;
  object-fit: cover;
`

export const Link = styled.a`
  width: 100%;
`
