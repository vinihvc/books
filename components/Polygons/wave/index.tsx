import { HTMLAttributes } from 'react'

import { PolygonsProps } from '..'
import * as S from './styles'

export type WaveProps = {
  size?: 'small' | 'medium' | 'large'
} & PolygonsProps &
  HTMLAttributes<HTMLImageElement>

const Wave = ({ size = 'small', ...props }: WaveProps) => {
  const sizes = {
    small: '/img/small-wave.png',
    medium: '/img/medium-wave.png',
    large: '/img/large-wave.png',
  }

  return <S.Wrapper src={sizes[size!]} alt="Wave" role="none" {...props} />
}

export default Wave
