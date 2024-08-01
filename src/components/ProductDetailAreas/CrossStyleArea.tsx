import { useRef } from "react";

import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  AspectRatio,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import { Product } from "../../interfaces/interfaces";

import { ProductDetailCrossStyleCard } from "../ProductCards/ProductDetailCrossStyleCard";

export interface CrossStyleAreaProps {
  product: Product;
  products: Product[];
}

export const CrossStyleArea = ({ products, product }: CrossStyleAreaProps) => {
  const styles = useMultiStyleConfig("CrossStyle");

  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <Box ref={ref} sx={styles.wrapper}>
      <Box sx={styles.autoMargin}>
        <Box sx={styles.container}>
          <Text sx={styles.header}>Shop the look</Text>
          <Grid sx={styles.grid}>
            <GridItem sx={styles.mainImage} key="outfit-module-image">
              <AspectRatio ratio={2 / 3}>
                <Image src={product?.mainImageUrl} />
              </AspectRatio>
            </GridItem>
            {products?.map((product: any, index) => {
              return (
                <Box key={product.slug}>
                  <ProductDetailCrossStyleCard
                    product={product}
                    index={index}
                  />
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
