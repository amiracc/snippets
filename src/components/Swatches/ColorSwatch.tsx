import { Box, Image, useMultiStyleConfig } from "@chakra-ui/react";

export interface ColorSwatchProps {
  imageUrl: string;
  isSelected: boolean;
  alt: string;
  size: string;
  key: string;
}

export const ColorSwatch = ({
  imageUrl,
  alt = "",
  isSelected,
}: ColorSwatchProps) => {
  const styles = useMultiStyleConfig("ColorSwatch");

  return (
    <Box
      as="button"
      role="radio"
      type="button"
      aria-checked={isSelected}
      border={isSelected ? 1 : 0}
      onClick={() => {}}
      sx={styles.swatchButton}
    >
      {imageUrl && (
        <Image
          p={isSelected ? 1 : 0}
          src={imageUrl}
          alt={alt}
          sx={styles.image}
        />
      )}
    </Box>
  );
};
