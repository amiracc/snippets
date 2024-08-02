import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  fontWeight: "normal",
  lineHeight: 1,
  bg: "#8ab891",
  _disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});

const variantSolidPDP = defineStyle(() => {
  return {
    bg: "#8ab891",
    color: "white",
    borderRadius: "full",
    w: "100%",
    _hover: {
      bg: "#8ab891",
      _disabled: {
        bg: "#8ab891",
      },
    },
    focus: {
      bg: "#8ab891",
    },
    _active: {
      bg: "#8ab891",
    },
  };
});

const variantCrossStyle = defineStyle(() => {
  return {
    bg: "#8ab891",
    border: 1,
    borderRadius: "full",
    m: 0,
    borderColor: "#8ab891",
    color: "white",
    minWidth: 24,
    _hover: {
      color: "white",
      bg: "#8ab891",
      borderColor: "#8ab891",
      _disabled: {
        color: "#8ab891",
      },
    },
    _focus: {
      bg: "#8ab891",
      borderColor: "#8ab891",
      color: "white",
    },
    _active: {
      bg: "#8ab891",
      borderColor: "#8ab891",
      color: "white",
    },
  };
});

const sizes = {
  sm: defineStyle({
    fontSize: "sm",
    px: 4,
    py: 2,
  }),
  md: defineStyle({
    fontSize: "md",
    px: 6,
    py: 3,
  }),
  lg: defineStyle({
    fontSize: "md",
    px: 8,
    py: 4,
  }),
};

// LOOK: Multiple variants of button, in this case very similar in our actual code very different and many.
// Please check email images.
const variants = {
  solidPDP: variantSolidPDP,
  crossStyle: variantCrossStyle,
};

export default defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "md",
    variant: "solidPDP",
    colorScheme: "primary",
  },
});
