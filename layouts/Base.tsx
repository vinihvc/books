import { useRouter } from 'next/router'

import { Box } from '@/components/Box'
import MediaMatch from '@/components/MediaMatch'
import Navbar from '@/components/Navbar'
import Navigation from '@/components/Navigation'

export type BaseTemplateProps = TChildrenProps

const BaseTemplate = ({ children }: BaseTemplateProps) => {
  const hidePage = ['/book']

  const { asPath } = useRouter()

  const hideNavigation = !hidePage.find((item) => asPath.includes(item))

  return (
    <>
      <MediaMatch greaterThan="medium">
        <Navbar />
      </MediaMatch>

      <Box as="main" bg="bgBody" minHeight="100%" pb={80}>
        {children}
      </Box>

      <MediaMatch lessThan="medium">
        {hideNavigation && <Navigation />}
      </MediaMatch>
    </>
  )
}

export default BaseTemplate
