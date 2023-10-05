import { FlexboxProps } from 'styled-system'

import { BoxProps } from '@/components/Box'
import * as S from './styles'

export type FlexProps = {
  gap?: number
} & BoxProps &
  FlexboxProps

const Flex = ({ gap, children, ...props }: FlexProps) => (
  <S.Wrapper gap={gap} {...props}>
    {children}
  </S.Wrapper>
)

export default Flex
