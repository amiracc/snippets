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

export interface ProductScrollCardProps {
  product: Product;
  index: number;
}

export const ProductScrollerCard = ({
  product,
  index,
}: ProductScrollCardProps) => {
  // This is for placing the cross style products texts at the start of the div container for the top left and right tiles
  const leftAlignedText = index === 0 || index === 1;

  const styles = useMultiStyleConfig("ProductScroller", {
    leftAlignedText,
  });

  return (
    <Box>
      <Box>
        <AspectRatio ratio={2 / 3}>
          <Image src={product.mainImageUrl} />
        </AspectRatio>
      </Box>
      <Box sx={styles.cardDetailsWrapper}>
        <Text data-testid="product-name" sx={styles.title}>
          {product.title}
        </Text>
        <ProductPrice product={product} />
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
  );
};
