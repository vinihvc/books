import { FlexProps } from '@/components/Flex'
import * as S from './styles'

export type GridProps = {
  columns: {
    base: number
    sm: number
    md: number
    lg: number
  }
} & FlexProps

const Grid = ({ columns, children, ...props }: GridProps) => (
  <S.Wrapper columns={columns} {...props}>
    {children}
  </S.Wrapper>
)

export default Grid
