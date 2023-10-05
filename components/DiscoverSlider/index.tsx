import { SpaceProps } from 'styled-system'

import { BookProps } from '@/components/book'
import Discover from '@/components/Discover'
import Slider, { SliderSettings } from '@/components/Slider'
import * as S from './styles'

export type DiscoverSliderProps = {
  books?: BookProps[]
} & SpaceProps

const settings: SliderSettings = {
  arrows: false,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
  ],
}

const DiscoverSlider = ({ books, ...props }: DiscoverSliderProps) => (
  <S.Wrapper {...props}>
    <Slider settings={settings}>
      {books?.map((item, index) => (
        <Discover key={item.id} book={item} index={index} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default DiscoverSlider
