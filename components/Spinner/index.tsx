import ScreenReader from '@/components/ScreenReader'
import * as S from './styles'

export type SpinnerProps = {
  /**
   * Spinner size
   */
  size?: number
  /**
   * Spinner color
   */
  color?: string
}

const Spinner = ({ ...props }: SpinnerProps) => (
  <S.Wrapper {...props}>
    <ScreenReader>Loading...</ScreenReader>
  </S.Wrapper>
)

export default Spinner
