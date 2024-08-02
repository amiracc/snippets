import {
  AspectRatio,
  Box,
  SimpleGrid,
  useMultiStyleConfig,
  Image,
} from "@chakra-ui/react";

import { SingleProduct } from "../../interfaces/interfaces";

import { ProductDetailImageGallerySwiper } from "..";

export const StageArea = ({ product }: SingleProduct) => {
  const styles = useMultiStyleConfig("ProductDetail");

  return (
    <Box
      sx={styles.imageGalleryContainer}
      data-testid="product-gallery-container"
    >
      <Box sx={styles.imageGallery}>
        <SimpleGrid sx={styles.imageGrid}>
          {product?.images &&
            product?.images.map((image, index) => (
              <Box key={`overview-image-${index}`} onClick={() => {}}>
                <AspectRatio ratio={2 / 3}>
                  <Image src={image} />
                </AspectRatio>
              </Box>
            ))}
        </SimpleGrid>
      </Box>
      <Box sx={styles.imageSliderContainer}>
        <ProductDetailImageGallerySwiper imagesURL={product?.images} />
      </Box>
    </Box>
  );
};
