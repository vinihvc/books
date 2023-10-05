import React, { HTMLAttributes } from 'react'
import {
  BorderProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system'

import theme from '@/styles/theme'
import * as S from './styles'

export type BoxProps = {
  /**
   * Set background
   */
  bg?: keyof typeof theme.colors | string
  /**
   * Set color
   */
  color?: keyof typeof theme.colors | string
  /**
   * Styled-component polymorphic prop
   */
  as?: React.ElementType
} & SpaceProps &
  TChildrenProps &
  LayoutProps &
  BorderProps &
  TypographyProps &
  PositionProps &
  ShadowProps &
  HTMLAttributes<HTMLDivElement>

export const Box = React.forwardRef(({ children, ...props }: BoxProps, ref) => (
  <S.Wrapper ref={ref} {...props}>
    {children}
  </S.Wrapper>
))

Box.displayName = 'Box'
