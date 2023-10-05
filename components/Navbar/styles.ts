import styled, { css, DefaultTheme } from 'styled-components'

import Flex from '@/components/Flex'
import Text from '@/components/Text'

export const Items = styled(Flex)`
  ${({ theme }) => css`
    > :not(:last-child){
      margin-right: ${theme.space.sm};
  `}
`

type itemProps = {
  isActive?: boolean
}

const itemModifiers = {
  isActive: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `,
}

export const Item = styled(Text)<itemProps>`
  ${({ theme, isActive }) => css`
    ${isActive && itemModifiers.isActive(theme)};
    transition: color 0.2s;

    &:hover {
      color: ${theme.colors.primary};
      border-bottom: 2px solid ${theme.colors.primary};
    }
  `}
`
