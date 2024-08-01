import { ComponentStyleConfig } from "@chakra-ui/react";

const ProductDetail: ComponentStyleConfig = {
  baseStyle: {
    container: {
      mt: 8,
    },
    colorSection: {
      gap: 2,
      justifyContent: "flex-start",
    },
    colorSectionLabel: {
      color: "gray.500",
    },
    swatchesFlex: {
      gap: 2,
      mt: 2,
      flexWrap: "wrap",
      justifyContent: "flex-start",
    },
    imageGallery: {
      display: { base: "none", lg: "block" },
    },
    imageGrid: {
      gridTemplateColumns: {
        base: "repeat(1, minmax(0, 1fr))",
        xl: "repeat(2, minmax(0, 1fr))",
      },
    },
    imageSliderContainer: {
      display: { base: "block", lg: "none" },
    },
    infoArea: {
      p: { base: 2 },
      pl: { base: 5, lg: 20 },
      pb: { base: 5, lg: 10 },
      pr: { base: 5, lg: 20 },
      mt: { base: 4, lg: 0 },
      w: "full",
      position: { base: "static", lg: "sticky" },
      top: "10%",
    },
    priceContainer: {
      mt: 6,
    },
    productDetailCtaContainer: {
      mt: 6,
      textAlign: "left",
    },
    productNameFlex: {
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexDir: "column",
      mt: 2,
    },
    nameHeading: {
      fontSize: "3xl",
    },
    productDetailCTA: {
      w: "full",
    },
    productDescription: {
      pt: 6,
    },
  },
};

export default ProductDetail;
