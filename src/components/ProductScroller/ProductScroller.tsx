import {
  Box,
  SimpleGrid,
  Heading,
  useMultiStyleConfig,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "../../ui/SwiperLazy";

import { ProductCard } from "..";

export const ProductScroller = ({
  spaceBetween = 0,
  keyboard = true,
  navigation = true,
  pagination = true,
  products,
}) => {
  const styles = useMultiStyleConfig("ProductScroller");

  const swiperThreshold = useBreakpointValue(
    { base: 2, md: 4 },
    { ssr: false }
  );

  return (
    <Box sx={styles.container}>
      <SimpleGrid sx={styles.grid}>
        <Heading sx={styles.heading}>Recommended products</Heading>
        <Swiper
          slidesPerView={2}
          // LOOK: Defining breakpoints for responsiveness
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={spaceBetween}
          keyboardEnabled={keyboard}
          pagination={pagination ? { clickable: true } : false}
          navigation={navigation}
          className="mySwiper"
          touchStartPreventDefault={
            products?.length && swiperThreshold
              ? products?.length > swiperThreshold
              : true
          }
          allowTouchMove={true}
          key={products?.length}
        >
          {products?.map((product, index) => (
            <SwiperSlide key={product.id} onClick={() => {}}>
              <ProductCard product={product} index={index} variant="scroller" />
            </SwiperSlide>
          ))}
        </Swiper>
      </SimpleGrid>
    </Box>
  );
};
