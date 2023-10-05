import { BoxProps } from '@/components/Box'
import * as S from './styles'

export type DividerProps = {
  /**
   * Divider color
   */
  bg?: string
} & BoxProps

const Divider = ({ children, ...props }: DividerProps) => (
  <S.Wrapper forwardedAs="hr" {...props}>
    {children}
  </S.Wrapper>
)

export default Divider
