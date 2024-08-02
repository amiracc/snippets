import { Swiper, SwiperSlide } from "../../ui/SwiperLazy";

import { AspectRatio, Image } from "@chakra-ui/react";

export const ProductDetailImageGallerySwiper = ({ imagesURL }: any) => {
  return (
    <Swiper>
      {imagesURL &&
        imagesURL.map((image, index) => (
          <SwiperSlide key={`overview-image-${index}`}>
            <AspectRatio ratio={2 / 3}>
              {/* LOOK: Normally always using a DynamicImage component with different widths that adjust based on breakpoints. */}
              {/* Please check screenshot attached to email. */}
              <Image src={image} />
            </AspectRatio>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
