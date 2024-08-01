import { Box } from "@chakra-ui/react";

import { HideOnDesktop, HideOnMobile } from "../../ui/Responsive";

import { ProductDetailTab, ProductDetailAccordion } from "..";

export const DetailsArea = () => {
  return (
    <Box w="full" data-testid="product-information">
      <HideOnMobile>
        <ProductDetailTab />
      </HideOnMobile>
      <HideOnDesktop>
        <ProductDetailAccordion />
      </HideOnDesktop>
    </Box>
  );
};
