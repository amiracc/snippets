import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./styles.css";

import { useRef } from "react";

import { Autoplay, Keyboard, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperProps, SwiperRef } from "swiper/react";

import { Box, BoxProps } from "@chakra-ui/react";

export interface SwiperLazyAutoplay {
  delay: number;
  pauseOnMouseEnter: boolean;
  disableOnInteraction: boolean;
}
export interface SwiperLazyProps extends SwiperProps {
  autoplay?: SwiperLazyAutoplay | boolean;
  boxProps?: BoxProps;
  keyboardEnabled?: boolean;
}

export const SwiperLazy = ({
  slidesPerView = 1,
  spaceBetween = 0,
  keyboardEnabled = true,
  navigation = false,
  pagination = true,
  loop = false,
  autoplay = false,
  children,
  boxProps,
  ...props
}: SwiperLazyProps) => {
  const swiperRef = useRef<SwiperRef | null>(null);

  let pauseOnMouseEnter = false;
  if (
    autoplay &&
    typeof autoplay !== "boolean" &&
    autoplay?.pauseOnMouseEnter
  ) {
    pauseOnMouseEnter = autoplay.pauseOnMouseEnter;
  }

  return (
    <Box
      onMouseEnter={() => {
        pauseOnMouseEnter && swiperRef?.current?.swiper?.autoplay.stop();
      }}
      onMouseLeave={() => {
        pauseOnMouseEnter && swiperRef?.current?.swiper?.autoplay.start();
      }}
      {...boxProps}
    >
      <Swiper
        ref={swiperRef}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        keyboard={{
          enabled: keyboardEnabled,
        }}
        pagination={pagination ? { clickable: true } : false}
        navigation={navigation}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className="myLazySwiper"
        autoplay={autoplay}
        loop={loop}
        {...props}
      >
        {children}
      </Swiper>
    </Box>
  );
};
