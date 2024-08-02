import { Box } from "@chakra-ui/react";

import { HideOnDesktop, HideOnMobile } from "../../ui/Responsive";

import { ProductDetailTab, ProductDetailAccordion } from "..";
import { SingleProduct } from "../../interfaces/interfaces";

export const DetailsArea = ({ product }: SingleProduct) => {
  return (
    <Box w="full" data-testid="product-information">
      <HideOnMobile>
        <ProductDetailTab />
      </HideOnMobile>
      <HideOnDesktop>
        <ProductDetailAccordion product={product} />
      </HideOnDesktop>
    </Box>
  );
};
