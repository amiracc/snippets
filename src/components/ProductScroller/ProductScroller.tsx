import {
  Box,
  SimpleGrid,
  Heading,
  useMultiStyleConfig,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "../../ui/SwiperLazy";

import { ProductScrollerCard } from "..";

export const ProductScroller = ({
  spaceBetween = 0,
  keyboard = true,
  navigation = true,
  pagination = true,
  filteredProducts,
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
              <ProductScrollerCard product={product} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SimpleGrid>
    </Box>
  );
};
