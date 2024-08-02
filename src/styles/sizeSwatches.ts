import { ComponentStyleConfig } from "@chakra-ui/react";

const SizeSwatches: ComponentStyleConfig = {
  variants: {
    sizeSwatch: {
      button: {
        border: "1px solid black",
        borderRadius: "none",
        fontWeight: "normal",
        _focusVisible: {
          boxShadow: "none",
          outline: "5px auto",
          outlineColor: "blue.300",
          outlineOffset: 0,
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bg: "white",
        color: "black",
        height: "auto",
        px: 4,
        py: 2,
        width: 16,
        m: 0,
        fontSize: "xs",
        _active: {
          bg: "black",
          color: "white",
        },
        _focus: {
          borderColor: "black",
          bg: "black",
          color: "white",
        },
        _checked: {
          bg: "black",
          color: "white",
          _hover: {
            bg: "black",
          },
        },
        _hover: {
          bg: "black",
          color: "white",
        },
      },
      flexWrapper: {
        gap: 1,
        flexWrap: "wrap",
        mt: 2,
      },
    },
    // Other variants that are not part of this example
  },
  defaultProps: {
    variant: "sizeSwatch",
  },
};

export default SizeSwatches;
