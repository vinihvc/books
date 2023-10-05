import Link from 'next/link'

import Flex from '@/components/Flex'
import Text, { TextProps } from '@/components/Text'

export type HeadingProps = {
  /**
   * Right text
   */
  rightText?: string
  /**
   * Link in right text
   */
  link?: string
} & TextProps

const Heading = ({ rightText, link, children, ...props }: HeadingProps) => (
  <Flex justifyContent="space-between" alignItems="center" {...props}>
    <Text as="h2" size="md" weight="medium">
      {children}
    </Text>

    {rightText && link && (
      <Link href={link}>
        <Text color="link" size="xs">
          {rightText}
        </Text>
      </Link>
    )}
  </Flex>
)

export default Heading
