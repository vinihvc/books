import styled, { css } from 'styled-components'

import { Box } from '@/components/Box'

export const Wrapper = styled(Box)`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.xl};
    margin-left: auto;
    margin-right: auto;
    padding-left: ${theme.space.md};
    padding-right: ${theme.space.md};
  `}
`
