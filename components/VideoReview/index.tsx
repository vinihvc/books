import { SpaceProps } from 'styled-system'

import { Circle } from '@/components/Polygons'
import * as S from './styles'

export type VideoReviewProps = {
  /**
   * Youtube video ID
   */
  videoId: string
} & SpaceProps

const VideoReview = ({ videoId, ...prop }: VideoReviewProps) => {
  return (
    <S.Link
      href={`http://youtu.be/${videoId}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      <S.Wrapper
        // Just for desktop vesrion
        maxWidth={500}
        bg="secondary"
        borderRadius="base"
        overflow="hidden"
        position="relative"
        {...prop}
      >
        <Circle boxSize={175} bg="#fff" top={-18} left={-5} opacity={0.08} />

        <Circle boxSize={116} bg="#fff" top={21} right={22} opacity={0.08} />

        <S.Image
          src={`https://i1.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt="Video image"
          width="100%"
          height="100%"
          loading="lazy"
        />
      </S.Wrapper>
    </S.Link>
  )
}

export default VideoReview
