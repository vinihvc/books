import { DefaultBreakpoints } from 'styled-media-query'

import * as S from './styles'

export type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
} & TChildrenProps

const MediaMatch = ({ children, ...props }: MediaMatchProps) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
)

export default MediaMatch
