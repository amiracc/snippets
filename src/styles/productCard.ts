import { ComponentStyleConfig } from "@chakra-ui/react";

const SizeSwatches: ComponentStyleConfig = {
  baseStyle: {
    productName: {
      fontSize: { base: "xs", md: "sm" },
      textOverflow: { base: "ellipsis", lg: "clip" },
      whiteSpace: { base: "normal", sm: "nowrap", lg: "normal" },
      fontWeight: 800,
      overflow: "hidden",
    },
  },
  variants: {
    scroller: {
      cardDetailsWrapper: {
        pt: 4,
        pb: 8,
        pl: 4,
      },
      addToCartButtonWrapper: {
        mt: 4,
      },
    },
    crossStyle: ({ leftAlignedText }) => ({
      cardWrapper: {
        display: { base: "block", lg: "flex" },
        alignItems: "center",
        height: "100%",
        pt: { base: 4, sm: 0 },
        pr: 0,
        pb: { base: 2, sm: 0 },
      },
      cardContainer: {
        width: "100%",
        display: { base: "flex", sm: "block", lg: "flex" },
        flexDirection: { base: "column", sm: "column", lg: "row" },
      },
      cardImageContainer: {
        position: "relative",
        flex: "none",
        overflow: "hidden",
        w: { base: "100%", sm: "auto", lg: "50%" },
        order: { lg: leftAlignedText && 2 },
        ml: { base: 0, lg: leftAlignedText && 4 },
        mr: { base: 4, sm: 0, lg: !leftAlignedText && 4 },
      },
      cardDetailsWrapper: {
        pt: 4,
        alignItems: {
          base: "center",
          lg: leftAlignedText ? "flex-end" : "flex-start",
        },
        display: "flex",
        flexDirection: "column",
        alignSelf: { base: "center", sm: "flex-end" },
        width: { lg: "50%" },
      },
      cardDetailsFlexContainer: {
        textAlign: { base: "auto", sm: leftAlignedText && "right" },
        mt: { base: 0, sm: "auto" },
        flexDirection: "column",
        maxHeight: "none",
        mb: "0.25rem",
        display: "flex",
      },
      addToCartButtonWrapper: {
        display: "flex",
        justifyContent: {
          base: "normal",
          lg: leftAlignedText ? "flex-end" : "flex-start",
        },
        pt: 4,
      },
      addToCartButton: {
        width: {
          sm: "100%",
          lg: "auto",
        },
      },
      priceContainer: {
        fontSize: "xs",
        whiteSpace: "nowrap",
        justifyContent: {
          base: "flex-start",
          sm: leftAlignedText ? "flex-end" : "flex-start",
        },
      },
      price: {
        fontSize: { base: "xs", md: "sm" },
      },
      listPrice: {
        fontWeight: 700,
      },
    }),
  },
  defaultProps: {
    variant: "crossStyle",
  },
};

export default SizeSwatches;
