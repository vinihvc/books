import styled, { css } from 'styled-components'

import { Box } from '@/components/Box'
import { RectangleProps } from '.'

export const Wrapper = styled(Box)<RectangleProps>`
  ${({ theme, left, top, right, bottom, rotate }) => css`
    width: 46px;
    height: 4px;
    position: absolute;
    background: ${theme.colors.primary};
    transform: rotate(${rotate}deg);
    z-index: 10;

    ${left && `left: ${left}px`};
    ${top && `top: ${top}px`};
    ${right && `right: ${right}px`};
    ${bottom && `bottom: ${bottom}px`};
  `}
`
