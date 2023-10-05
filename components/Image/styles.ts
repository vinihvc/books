import styled, { css } from 'styled-components'

import { space } from 'styled-system'

import { ImageProps } from './'

const wrapperModifiers = {
  shadow: () => css`
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.05);
  `
}

type wrapperProps = Pick<ImageProps, 'radius' | 'width' | 'height' | 'shadow'>

export const Wrapper = styled.div<wrapperProps>`
  ${({ theme, radius, width, height, shadow }) => css`
    display: flex;
    border-radius: ${theme.radii[radius!]};
    overflow: auto;
    width: ${typeof width === 'string' ? width : `${width}px`};
    height: ${typeof height === 'string' ? height : `${height}px`};
    ${space}

    ${shadow && wrapperModifiers.shadow()}
  `}
`
