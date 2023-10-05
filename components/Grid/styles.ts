import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import Flex from '@/components/Flex'
import { GridProps } from '.'

export const Wrapper = styled(Flex)<GridProps>`
  ${({ columns }) => css`
    display: grid;
    grid-template-columns: repeat(${columns.base}, minmax(0, 1fr));

    ${media.greaterThan('small')`
      grid-template-columns: repeat(${columns.sm}, minmax(0, 1fr));
    `}

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(${columns.md}, minmax(0, 1fr));
    `}

    ${media.greaterThan('large')`
      grid-template-columns: repeat(${columns.lg}, minmax(0, 1fr));
    `}
  `}
`
