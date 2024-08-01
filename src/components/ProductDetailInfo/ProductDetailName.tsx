import { Flex, Heading, Text, useMultiStyleConfig } from "@chakra-ui/react";

import { Product } from "../../interfaces/interfaces";

import { ProductPrice } from "..";

export interface ProductDetailNameProps {
  product: Product;
}

export const ProductDetailName = ({ product }: ProductDetailNameProps) => {
  const styles = useMultiStyleConfig("ProductDetail");

  return (
    <Flex sx={styles.productNameFlex}>
      <Heading sx={styles.nameHeading} data-testid="product-name">
        {product.title}
      </Heading>
      <ProductPrice product={product} />
      <Text sx={styles.productDescription}>{product.description}</Text>
    </Flex>
  );
};
