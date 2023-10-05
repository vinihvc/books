import styled, { css } from 'styled-components'

import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: #fdfcfc;
    border-radius: ${theme.radii.lg};
    padding: 0 ${theme.space.sm};
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.black};
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.sm};
    padding: ${theme.space.sm} 0;
    padding-left: ${theme.space.xs};
    background: transparent;
    font-weight: 500;
    border: 0;
    outline: 0;
  `}
`

export const Icon = styled.div`
  display: flex;
  color: #dcd8d8;

  & > svg {
    width: 1rem;
    height: 100%;
  }
`

export const Command = styled.div`
  ${({ theme }) => css`
    opacity: 0;
    transition: opacity 0.2s;

    ${Input}:focus + & {
      opacity: 0;
    }

    ${media.greaterThan('medium')`
      opacity: 1;
      color: ${theme.colors.gray};
      border: 1px solid ${theme.colors.gray};
      padding: 0 8px 2px 8px;
      margin-left: 5px;
      user-select: none;
      border-radius: ${theme.radii.md};
    `}
  `}
`
