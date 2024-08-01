import {
  Center,
  Flex,
  Button,
  Box,
  useMultiStyleConfig,
} from "@chakra-ui/react";

export interface SizeSwatchesProps {
  sizes: any;
  onSizeSelection?: (size: string) => void;
}

export const SizeSwatches = ({ sizes, onSizeSelection }: SizeSwatchesProps) => {
  const styles = useMultiStyleConfig("SizeSwatches", {
    variant: "sizeSwatch",
  });

  return (
    <Flex
      sx={styles.flexWrapper}
      role="radiogroup"
      data-testid="sizes-swatch-container"
    >
      {sizes?.map((size) => {
        return (
          <Box key={size.size}>
            <Button
              key={size.size}
              sx={styles.button}
              role="radio"
              variant="sizeSwatch"
              onClick={() => {}}
            >
              <Center minHeight={4} textDecoration="underline">
                {size.size}
              </Center>
            </Button>
          </Box>
        );
      })}
    </Flex>
  );
};
