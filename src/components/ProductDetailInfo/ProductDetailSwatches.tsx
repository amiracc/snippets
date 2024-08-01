import { Box, Flex, Text, useMultiStyleConfig } from "@chakra-ui/react";

import { ColorSwatch } from "../Swatches/ColorSwatch";

import { Product } from "../../interfaces/interfaces";

export interface ProductDetailSwatchesProps {
  product: Product;
  selectedColorName?: string;
  onColorChange?: () => void;
}

export const ProductDetailSwatches = ({
  product,
  selectedColorName = "",
  onColorChange,
}: ProductDetailSwatchesProps) => {
  const styles = useMultiStyleConfig("ProductDetail");

  return (
    <Box sx={styles.container}>
      <Flex sx={styles.colorSection}>
        <Text>Color</Text>
        <Text sx={styles.colorSectionLabel} data-testid="color-name">
          {selectedColorName}
        </Text>
      </Flex>

      <Flex
        sx={styles.swatchesFlex}
        role="radiogroup"
        data-testid="colors-swatch-container"
      >
        {product.colors &&
          product.colors.map((color, index) => {
            return (
              <ColorSwatch
                size="md"
                key={`attribute id ${index}`}
                imageUrl={color.image}
                alt={color.name}
                isSelected={true}
              />
            );
          })}
      </Flex>
    </Box>
  );
};
