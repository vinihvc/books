import { HTMLAttributes } from 'react'
import { SpaceProps } from 'styled-system'

import theme from '@/styles/theme'
import * as S from './styles'

export type TextProps = {
  /**
   * Set font-size
   */
  size?: keyof typeof theme.fontSizes
  /**
   * Set font-weight
   */
  weight?: keyof typeof theme.fontWeights
  /**
   * Set font-family
   */
  family?: keyof typeof theme.fonts
  /**
   * Set text color
   */
  color?: keyof typeof theme.colors | string
  /**
   * Set letter-spacing
   */
  align?: 'left' | 'center' | 'right'
  /**
   * Set letter-spacing
   */
  letter?: string
  /**
   * Truncate a text
   */
  isTruncated?: boolean
  /**
   * Styled-component polymorphic prop
   */
  as?: React.ElementType
} & SpaceProps &
  TChildrenProps &
  HTMLAttributes<HTMLElement>

const Text = ({
  weight = 'normal',
  family = 'body',
  color = 'text',
  letter = 'normal',
  children,
  ...props
}: TextProps) => (
  <S.Wrapper
    weight={weight}
    color={color}
    family={family}
    letter={letter}
    {...props}
  >
    {children}
  </S.Wrapper>
)

export default Text
