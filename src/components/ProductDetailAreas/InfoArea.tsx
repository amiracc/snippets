import { useRef } from "react";

import { Box, useMultiStyleConfig } from "@chakra-ui/react";

import { AreaProps } from "../../interfaces/interfaces";

import {
  ProductDetailCTA,
  ProductDetailName,
  ProductDetailSwatches,
  ProductDetailSizes,
} from "..";

export const InfoArea = ({ product }: AreaProps) => {
  const infoAreaRef = useRef<HTMLDivElement>(null);

  const styles = useMultiStyleConfig("ProductDetail");

  return (
    <Box sx={styles.infoArea} ref={infoAreaRef}>
      {product && (
        <Box>
          <ProductDetailName product={product} />

          <ProductDetailSwatches product={product} />

          <ProductDetailSizes product={product} />

          <Box sx={styles.productDetailCtaContainer}>
            <ProductDetailCTA />
          </Box>
        </Box>
      )}
    </Box>
  );
};
