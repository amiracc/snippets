import { Box, Text, useMultiStyleConfig } from "@chakra-ui/react";

import { SizeSwatches } from "..";

import { Product } from "../../interfaces/interfaces";

export interface ProductDetailSizesProps {
  product: Product;
}

export const ProductDetailSizes = ({ product }: ProductDetailSizesProps) => {
  const styles = useMultiStyleConfig("ProductDetail");

  return (
    <Box sx={styles.container}>
      <Text>Sizes</Text>
      <SizeSwatches sizes={product.sizes} />
    </Box>
  );
};
