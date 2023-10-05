import Text, { TextProps } from '@/components/Text'

export type GreetingProps = {
  /**
   * User name
   */
  name?: string
} & TextProps

const Greeting = ({ name, ...props }: GreetingProps) => (
  <Text as="div" weight="medium" size="2xl" {...props}>
    <Text as="span">Hi, </Text>
    <Text as="span" color="primary" weight="semibold">
      {name} 👋
    </Text>
  </Text>
)

export default Greeting
