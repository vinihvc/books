import findColor from '@/helpers/find-color'
import styled, { css } from 'styled-components'

import { SpinnerProps } from './'

export const Wrapper = styled.div<SpinnerProps>`
  ${({ theme, size, color }) => css`
    display: inline-block;
    border-color: ${findColor(color)};
    border-style: solid;
    border-radius: ${theme.radii.full};
    border-width: 2px;
    border-bottom-color: transparent;
    border-left-color: transparent;
    width: ${size}px;
    height: ${size}px;
    animation: spin 0.6s linear infinite;

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`
