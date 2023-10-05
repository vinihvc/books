import findColor from '@/helpers/find-color'
import styled, { css } from 'styled-components'

import { Box } from '@/components/Box'
import { TriangleProps } from '.'

export const Wrapper = styled(Box)<TriangleProps>`
  ${({ left, top, right, bottom, boxSize, bg, rotate }) => css`
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 ${boxSize / 2}px ${boxSize / 1.8}px ${boxSize / 2}px;
    border-color: transparent transparent ${findColor(bg)} transparent;
    z-index: 10;
    transform: rotate(${rotate}deg);
    background: transparent;

    ${left && `left: ${left}px`};
    ${top && `top: ${top}px`};
    ${right && `right: ${right}px`};
    ${bottom && `bottom: ${bottom}px`};
  `}
`
