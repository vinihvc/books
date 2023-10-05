import styled, { css } from 'styled-components'

import { WaveProps } from '.'

export const Wrapper = styled.img<WaveProps>`
  ${({ left, top, right, bottom }) => css`
    position: absolute;

    ${left && `left: ${left}px`};
    ${top && `top: ${top}px`};
    ${right && `right: ${right}px`};
    ${bottom && `bottom: ${bottom}px`};
  `}
`
