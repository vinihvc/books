import findColor from '@/helpers/find-color'
import styled, { css } from 'styled-components'
import { space } from 'styled-system'

import { TextProps } from './'

const wrapperModifiers = {
  truncate: () => css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:after,
    &:before {
      overflow-wrap: break-word;
    }
  `,
  align: (align: string) => css`
    text-align: ${align};
  `,
}

export const Wrapper = styled.p<TextProps>`
  ${({ theme, size, weight, family, color, align, letter, isTruncated }) => css`
    font-size: ${theme.fontSizes[size!]};
    font-weight: ${theme.fontWeights[weight!]};
    font-family: ${theme.fonts[family!]};
    color: ${findColor(color)};
    text-decoration: none;
    letter-spacing: ${letter};
    ${space};

    ${align && wrapperModifiers.align(align)};
    ${isTruncated && wrapperModifiers.truncate};
  `}
`
