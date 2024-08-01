import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const parts = ["hideMobile", "hideDesktop"];

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts);

const baseStyle = definePartsStyle({
  hideDesktop: {
    display: { base: "block", lg: "none" },
  },
  hideMobile: {
    display: { base: "none", lg: "block" },
  },
});

export default defineMultiStyleConfig({ baseStyle });
