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

export interface ProductCardProps {
  product: Product;
  index: number;
  variant: "crossStyle" | "scroller";
}

export const ProductCard = ({ product, index, variant }: ProductCardProps) => {
  // This is for placing the cross style products texts at the start of the div container for the top left and right tiles
  const leftAlignedText = index === 0 || index === 1;

  const crossStyleVariant = variant === "crossStyle";

  const styles = useMultiStyleConfig("ProductCard", {
    variant,
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
          <ProductPrice
            leftAlignedText={crossStyleVariant && leftAlignedText}
            product={product}
          />
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
