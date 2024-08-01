import { ComponentStyleConfig } from "@chakra-ui/react";

const ProductScroller: ComponentStyleConfig = {
  baseStyle: {
    container: {
      position: "relative",
      w: "full",
      mt: 8,
    },
    grid: {
      gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
      gap: 6,
    },
    headingSkeleton: {
      height: 6,
      width: "150px",
      m: "auto",
    },
    heading: {
      fontSize: "4xl",
      fontWeight: 400,
      mb: 6,
      textAlign: "center",
    },
    fallbackFlexContainer: {
      w: "full",
    },
    fallbackProductTileSkeleton: {
      flex: "auto",
    },
    cardDetailsWrapper: {
      pt: 4,
      pb: 8,
      pl: 4,
    },
    addToCartButtonWrapper: {
      mt: 4,
    },
    title: {
      fontSize: { base: "xs", md: "sm" },
      textOverflow: { base: "ellipsis", lg: "clip" },
      whiteSpace: { base: "normal", sm: "nowrap", lg: "normal" },
      fontWeight: 800,
      overflow: "hidden",
    },
  },
};

export default ProductScroller;
