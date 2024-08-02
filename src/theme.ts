import { extendTheme } from "@chakra-ui/react";
import SizeSwatches from "./styles/sizeSwatches";
import ProductDetail from "./styles/productDetail";
import ColorSwatch from "./styles/colorSwatch";
import CrossStyle from "./styles/productDetailCrossStyle";
import Button from "./styles/button";
import ProductDetailTab from "./styles/productDetailTab";
import Responsive from "./styles/responsive";
import PDPTemplate from "./styles/pdpTemplate";
import ProductDetailAccordion from "./styles/productDetailAccordion";
import Accordion from "./styles/accordion";
import ProductScroller from "./styles/productScroller";
import ProductCard from "./styles/productCard";

const theme = extendTheme({
  components: {
    SizeSwatches,
    ProductDetail,
    ColorSwatch,
    CrossStyle,
    Button,
    ProductDetailTab,
    Responsive,
    PDPTemplate,
    ProductDetailAccordion,
    Accordion,
    ProductScroller,
    ProductCard,
  },
});

export default theme;
