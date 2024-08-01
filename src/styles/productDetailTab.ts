import { ComponentStyleConfig } from "@chakra-ui/react";

const ProductDetailTab: ComponentStyleConfig = {
  baseStyle: {
    tabContainer: {
      bg: "white",
      pt: 4,
      pb: 4,
      position: "sticky",
      zIndex: 10,
      borderTop: "1px solid black",
      borderBottom: "1px solid black",
      bottom: 1,
    },
    tabList: {
      justifyContent: "center",
    },
    modalContent: {
      borderRadius: "lg",
    },
    modalHeader: {
      fontWeight: "700",
      fontSize: "xl",
      mb: 4,
    },
    fitAndSizeContainer: {
      py: 2,
    },
    sizeReference: {
      fontSize: "sm",
      mb: 2,
    },
    unorderedList: {
      mb: 2,
    },
    hStack: {
      gap: 1,
    },
    listText: {
      textTransform: "capitalize",
    },
    length: {
      fontWeight: "bold",
    },
    fitReference: {
      fontSize: "lg",
      mt: 4,
    },
    tableData: {
      px: 0,
      fontSize: "sm",
    },
    tdText: {
      fontWeight: "700",
      fontSize: "sm",
    },
    careContainer: {
      gap: 1,
      mt: 2,
    },
    infoContainer: {
      py: 2,
    },
    infoLongDescription: {
      fontWeight: { base: "semibold", lg: "bold" },
      mb: 6,
    },
    infoBulletpointsContainer: {
      mt: 0,
    },
    infoBullet: {
      mt: 1,
      fontSize: "sm",
    },
    materialsLabel: {
      mt: 6,
      fontWeight: "bold",
      fontSize: "sm",
    },
    materialsFlexContainer: {
      fontSize: "sm",
      gap: 1,
      mt: 1,
    },
    brandLogoIcon: {
      w: 14,
    },
    secondaryBrandLogoIcon: {
      w: 10,
    },
    brandIconContainer: {
      mt: 6,
    },
    modalBody: {
      mt: 0,
    },
  },
};

export default ProductDetailTab;
