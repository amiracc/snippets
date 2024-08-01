import loadable from '@loadable/component'

import {SwiperLazyProps} from './SwiperLazy'

export interface SwiperCustomProps extends SwiperLazyProps {
    fallback?: JSX.Element | undefined
}

const SwiperLazy = loadable(() => import('./SwiperLazy'), {
    resolveComponent: (components) => components.SwiperLazy
})

export const Swiper = (props: SwiperCustomProps) => {
    const {children, fallback, ...otherProps} = props

    return (
        <SwiperLazy {...otherProps} fallback={fallback || undefined}>
            {children}
        </SwiperLazy>
    )
}

Swiper.displayName = 'Swiper'
