import {SwiperSlideProps} from 'swiper/react'

import loadable from '@loadable/component'

const SwiperSlideLazy = loadable(() => import('swiper/react'), {
    resolveComponent: (components) => components.SwiperSlide
})

export const SwiperSlide = (props: SwiperSlideProps) => {
    const {children, ...otherProps} = props

    return <SwiperSlideLazy {...otherProps}>{children}</SwiperSlideLazy>
}

SwiperSlide.displayName = 'SwiperSlide'
