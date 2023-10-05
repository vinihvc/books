import { Box } from '@/components/Box'
import Container from '@/components/Container'
import { Wave } from '@/components/Polygons'

export const DetailBackground = ({ children }: TChildrenProps) => (
  <Box bg="lightYellow" borderBottomRightRadius="100px">
    <Container height={282} position="relative">
      <Wave size="large" top={0} style={{ right: 0 }} />

      {children}
    </Container>
  </Box>
)
