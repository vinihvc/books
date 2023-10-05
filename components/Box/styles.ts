import findColor from '@/helpers/find-color'
import styled, { css } from 'styled-components'
import {
  border,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system'

import { BoxProps } from '.'

export const Wrapper = styled.div<BoxProps>`
  ${({ bg, color }) => css`
    background: ${findColor(bg)};
    color: ${findColor(color)};

    ${space};
    ${flexbox};
    ${layout};
    ${typography};
    ${border};
    ${position};
    ${shadow};
  `}
`
