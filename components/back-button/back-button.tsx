import { useRouter } from 'next/dist/client/router'
import { ArrowBack } from 'styled-icons/material-rounded'

import * as S from './styles'

export const BackButton = () => {
  const { back } = useRouter()

  return (
    <S.Wrapper onClick={back} p={10}>
      <ArrowBack size={20} />
    </S.Wrapper>
  )
}
