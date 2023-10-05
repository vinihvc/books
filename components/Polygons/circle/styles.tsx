import styled, { css, DefaultTheme } from 'styled-components'

import { Box } from '@/components/Box'
import { CircleProps } from '.'

const wrapperModifiers = {
  outline: (theme: DefaultTheme) => css`
    background: transparent;
    border: 2px solid ${theme.colors.blue};
  `,
}

export const Wrapper = styled(Box)<CircleProps>`
  ${({ theme, boxSize, left, top, right, bottom, outline, opacity }) => css`
    border-radius: ${theme.radii.full};
    width: ${boxSize}px;
    height: ${boxSize}px;
    position: absolute;
    opacity: ${opacity};

    ${left && `left: ${left}px`};
    ${top && `top: ${top}px`};
    ${right && `right: ${right}px`};
    ${bottom && `bottom: ${bottom}px`};
    ${outline && wrapperModifiers.outline(theme)}
  `}
`
