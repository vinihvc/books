import theme from '@/styles/theme'
import { PolygonsProps } from '..'
import * as S from './styles'

export type CircleProps = {
  boxSize: number
  bg: keyof typeof theme.colors | string
  outline?: boolean
} & PolygonsProps

const Circle = ({ opacity = 1, ...props }: CircleProps) => (
  <S.Wrapper opacity={opacity} {...props} />
)

export default Circle
