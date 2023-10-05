import styled, { css } from 'styled-components'

export const More = styled.button`
  ${({ theme }) => css`
    background: none;
    color: ${theme.colors.primary};
    padding: ${theme.space.xs} ${theme.space.md};
    border-radius: ${theme.radii.base};
    cursor: pointer;
    border: 0;
    transition: 0.2s;
  `}
`
