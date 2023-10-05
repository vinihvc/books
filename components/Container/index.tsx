import { BoxProps } from '@/components/Box'
import * as S from './styles'

const Container = ({ children, ...props }: BoxProps) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
)

export default Container
