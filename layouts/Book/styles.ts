import styled from 'styled-components'

import { Box } from '@/components/Box'

export const Description = styled(Box)`
  color: rgba(49, 49, 49, 0.6);

  p,
  br {
    margin-bottom: 20px;
  }

  br {
    content: ' ';
    display: block;
  }

  b {
    font-weight: normal;
  }
`
