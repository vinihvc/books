import { PolygonsProps } from '..'

import * as S from './styles'

export type RectangleProps = {
  rotate?: number
} & PolygonsProps

const Rectangle = ({ rotate = 0, ...props }: RectangleProps) => (
  <S.Wrapper rotate={rotate} {...props} />
)

export default Rectangle
