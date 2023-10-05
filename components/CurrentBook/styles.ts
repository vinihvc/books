import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import Flex from '@/components/Flex'
import Text from '@/components/Text'

export const Wrapper = styled(Flex)`
  ${(props, ...rest) => css`
    margin-left: -${props.theme.space.md};
    margin-right: ${props.theme.space.xl};

    ${media.greaterThan('medium')`
      margin-left: 0;
      margin-right: 0;
    `}

    ${{ ...rest }}
  `}
`

export const Card = styled(Flex)`
  ${({ theme }) => css`
    border-top-right-radius: ${theme.radii.base};
    border-bottom-right-radius: ${theme.radii.base};

    ${media.greaterThan('medium')`
      border-top-left-radius: ${theme.radii.base};
      border-bottom-left-radius: ${theme.radii.base};
    `}
  `}
`
