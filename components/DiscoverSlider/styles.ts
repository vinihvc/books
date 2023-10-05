import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { space } from 'styled-system'

export const Wrapper = styled.div`
  position: relative;
  ${space};

  ${({ theme }) => css`
    .slick-track,
    .slick-list {
      display: flex;
      align-items: center;
    }

    .slick-slide > div {
      margin-right: ${theme.space.xs};
      flex: 1 0 auto;
      height: 100%;
    }

    .slick-list {
      margin-right: -${theme.space.md};
    }

    ${media.lessThan('medium')`
      .slick-current {
        & > div > a > div {
          height: 139px;
        }
      }
    `}
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 23rem;
    background: ${theme.colors.gray};
    position: relative;
  `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    padding: ${theme.space.sm};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.white};
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontSizes.md};
    margin-bottom: ${theme.space.sm};

    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.fontWeights.bold};
    }
  `}
`
