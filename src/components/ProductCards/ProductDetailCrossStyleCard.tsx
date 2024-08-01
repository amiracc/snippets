import {
  AspectRatio,
  Box,
  Text,
  Image,
  useMultiStyleConfig,
  GridItem,
} from "@chakra-ui/react";

import { Button } from "../../ui/Button";

import { Product } from "../../interfaces/interfaces";

import { ProductPrice } from "..";

export interface CrossStyleProductCardProps {
  product: Product;
  index: number;
}

export const ProductDetailCrossStyleCard = ({
  product,
  index,
}: CrossStyleProductCardProps) => {
  // This is for placing the cross style products texts at the start of the div container for the top left and right tiles
  const leftAlignedText = index === 0 || index === 1;

  const styles = useMultiStyleConfig("CrossStyle", {
    leftAlignedText,
  });

  return (
    <GridItem sx={styles.cardWrapper}>
      <Box sx={styles.cardContainer}>
        <Box sx={styles.cardImageContainer}>
          <AspectRatio ratio={2 / 3}>
            <Image src={product.mainImageUrl} />
          </AspectRatio>
        </Box>
        <Box sx={styles.cardDetailsWrapper}>
          <Text sx={styles.productName} data-testid="product-name">
            {product.title}
          </Text>
          <ProductPrice leftAlignedText={leftAlignedText} product={product} />
          <Box sx={styles.addToCartButtonWrapper}>
            <Button
              variant="crossStyle"
              onClick={() => {}}
              size="sm"
              __css={styles.addToCartButton}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>
    </GridItem>
  );
};
