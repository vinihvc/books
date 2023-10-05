import { Box } from '@/components/Box'
import Flex, { FlexProps } from '@/components/Flex'
import Text from '@/components/Text'

export type ProfileResumeProps = {
  /**
   * Total books read
   */
  read?: number
  /**
   * Total reading books
   */
  reading?: number
  /**
   * Want to read
   */
  want?: number
} & FlexProps

const ProfileResume = ({
  read,
  reading,
  want,
  ...props
}: ProfileResumeProps) => (
  <Flex
    justifyContent="space-between"
    maxWidth="300px"
    margin="auto"
    {...props}
  >
    <Box textAlign="center">
      <Text weight="semibold">Read</Text>
      <Text size="xs">{read}</Text>
    </Box>

    <Box textAlign="center">
      <Text weight="semibold">Reading</Text>
      <Text size="xs">{reading}</Text>
    </Box>

    <Box textAlign="center">
      <Text weight="semibold">Want</Text>
      <Text size="xs">{want}</Text>
    </Box>
  </Flex>
)

export default ProfileResume
