import theme from '@/styles/theme'
import { PolygonsProps } from '..'
import * as S from './styles'

export type TriangleProps = {
  boxSize: number
  bg?: keyof typeof theme.colors | string
  rotate?: number
} & PolygonsProps

const Triangle = ({ ...props }: TriangleProps) => <S.Wrapper {...props} />

export default Triangle
