import { useBook } from '@/context/use-book'
import { shareLink } from '@/helpers/share'
import { BookOpen } from 'styled-icons/boxicons-regular'
import { ShareIos } from 'styled-icons/fluentui-system-filled'
import { Headphones } from 'styled-icons/icomoon'

import { BookProps } from '@/components/book'
import Text from '@/components/Text'
import * as S from './styles'

type FloatingActionButton = {
  book: BookProps
}

const FloatingActionButton = ({ book }: FloatingActionButton) => {
  const { reading, addToReading, removeFromReading } = useBook()

  const isSavedBook = !!reading?.find((item) => item.id === book.id)

  const handleSave = () => {
    isSavedBook ? removeFromReading(book) : addToReading(book)
  }

  return (
    <S.Wrapper
      height={60}
      justifyContent="space-between"
      alignItems="center"
      borderRadius="sm"
    >
      <S.Item
        justifyContent="center"
        alignItems="center"
        isActive={isSavedBook}
        onClick={handleSave}
      >
        <BookOpen size={20} />

        <Text size="xs" weight="medium" ml={10}>
          {isSavedBook ? 'Reading' : 'Read'}
        </Text>
      </S.Item>

      <S.Separator />

      <S.Item justifyContent="center" alignItems="center">
        <Headphones size={20} />

        <Text size="xs" weight="medium" ml={10}>
          Listen
        </Text>
      </S.Item>

      <S.Separator />

      <S.Item justifyContent="center" alignItems="center" onClick={shareLink}>
        <ShareIos size={20} />

        <Text size="xs" weight="medium" ml={10}>
          Share
        </Text>
      </S.Item>
    </S.Wrapper>
  )
}

export default FloatingActionButton
