import * as S from './styles'

export type SpacerProps = TChildrenProps

const Spacer = ({ children }: SpacerProps) => <S.Wrapper>{children}</S.Wrapper>

export default Spacer
