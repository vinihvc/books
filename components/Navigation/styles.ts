import Link from 'next/link'
import styled, { css, DefaultTheme } from 'styled-components'

import Flex from '@/components/Flex'

export const Wrapper = styled(Flex)`
  background: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`

type ItemProps = {
  isActive?: boolean
}

const itemModifiers = {
  active: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
  `,
}

export const Item = styled(Link)<ItemProps>`
  ${({ theme, isActive }) => css`
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: ${theme.colors.gray};

    ${isActive && itemModifiers.active(theme)}
  `}
`
