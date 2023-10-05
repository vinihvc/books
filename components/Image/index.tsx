import { HTMLAttributes, useState } from 'react'
import BaseImage from 'next/legacy/image'
import { SpaceProps } from 'styled-system'

import theme from '@/styles/theme'
import * as S from './styles'

export type ImageProps = {
  /**
   * Image src
   */
  src?: string
  /**
   * If image link is broken render a fallback iamge
   */
  srcFallback?: string
  /**
   * Image description
   */
  alt?: string
  /**
   * Set width
   */
  width: number | `${number}`
  /**
   * Set width
   */
  height: number | `${number}`
  /**
   * Set border-radius
   * @default base
   */
  radius?: keyof typeof theme.radii
  /**
   * Set box-shadow to Image
   * @default base
   */
  shadow?: boolean
  /**
   * Set loading image lazy
   * @default true
   */
  layout?: 'responsive' | 'fixed'
} & SpaceProps &
  HTMLAttributes<HTMLImageElement>

const Image = ({
  src,
  srcFallback = '/img/no-cover.jpg',
  alt,
  width,
  height,
  radius = 'base',
  layout,
  ...props
}: ImageProps) => {
  const [validLink, setValidLink] = useState(true)

  return (
    <S.Wrapper radius={radius} width={width} height={height} {...props}>
      <BaseImage
        src={validLink && src ? src : srcFallback}
        onError={() => setValidLink(false)}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
      />
    </S.Wrapper>
  )
}

export default Image
