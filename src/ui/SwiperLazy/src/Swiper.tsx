import loadable from "@loadable/component";

import { SwiperLazyProps } from "./SwiperLazy";

export interface SwiperCustomProps extends SwiperLazyProps {
  fallback?: JSX.Element | undefined;
}

// LOOK: loadable needed for performance reasons; reduce the inital load time and also handling the fallback
// Important in our monorepo as the app is quite large and demanding when it comes to performance and so many components
// In this example a simpler version could have worked but wanted to keep some extra code I added there
const SwiperLazy = loadable(() => import("./SwiperLazy"), {
  resolveComponent: (components) => components.SwiperLazy,
});

export const Swiper = (props: SwiperCustomProps) => {
  const { children, fallback, ...otherProps } = props;

  return (
    <SwiperLazy {...otherProps} fallback={fallback || undefined}>
      {children}
    </SwiperLazy>
  );
};

Swiper.displayName = "Swiper";
