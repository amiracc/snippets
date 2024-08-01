import { Box, Button, useMultiStyleConfig } from "@chakra-ui/react";

export const ProductDetailCTA = () => {
  const styles = useMultiStyleConfig("ProductDetail");

  return (
    <Box sx={styles.productDetailCTA}>
      <Button
        variant="solidPDP"
        onClick={() => {}}
        data-testid="add-to-cart-button"
      >
        Add to cart
      </Button>
    </Box>
  );
};
