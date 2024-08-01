import { ComponentStyleConfig } from "@chakra-ui/react";

const ColorSwatch: ComponentStyleConfig = {
  baseStyle: {
    swatchButton: {
      display: "block",
      borderRadius: "full",
      borderColor: "gray.900",
      position: "relative",
      _after: {
        position: "absolute",
        display: "block",
        content: '""',
        width: "full",
        height: "full",
        top: 0,
        left: 0,
        borderRadius: "full",
        boxShadow: "0 0 0 1px #0000001f inset",
      },
    },
    image: {
      padding: 0,
      borderRadius: "full",
      height: "100%",
    },
  },
};

export default ColorSwatch;
