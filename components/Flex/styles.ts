import styled, { css } from 'styled-components'
import { flexbox } from 'styled-system'

import { Box } from '@/components/Box'
import { FlexProps } from '.'

const wrapperModifiers = {
  gap: (gap: number) => css`
    gap: ${gap}px;
  `,
}

export const Wrapper = styled(Box)<FlexProps>`
  ${({ gap }) => css`
    display: flex;
    ${flexbox}

    ${gap && wrapperModifiers.gap(gap)};
  `}
`
