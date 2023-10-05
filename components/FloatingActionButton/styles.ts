import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import Flex from '@/components/Flex'

export const Wrapper = styled(Flex)`
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 53px;
  max-width: 400px;
  background: #fff;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);

  ${media.greaterThan('medium')`
      margin: 0 auto;
  `}
`

const itemModifiers = {
  isActive: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
  `,
}

type itemProps = {
  isActive?: boolean
}

export const Item = styled(Flex)<itemProps>`
  ${({ theme, isActive }) => css`
    width: 100%;
    text-decoration: none;
    color: #cfcbd2;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: ${theme.colors.black};
    }

    ${isActive && itemModifiers.isActive(theme)}
  `}
`

export const Separator = styled.div`
  width: 1px;
  height: 16px;
  background-color: rgba(151, 151, 151, 0.2);
`
