const Accordion: any = {
  baseStyle: {
    container: {
      borderColor: "gray.200",
      _dark: {
        borderColor: "gray.200",
      },
    },
    panel: {
      pl: 0,
      pr: 0,
      pb: 6,
    },
    button: {
      _focusVisible: {
        boxShadow: "none",
      },
    },
    accordionItemButton: {
      p: 0,
    },
    titleContainer: {
      flex: 1,
      textAlign: "left",
      fontWeight: "normal",
    },
    accordionItemLink: {
      fontSize: { base: "xs", sm: "sm" },
      mr: 4,
    },
    resetContainer: {
      pb: 0.5,
      borderBottom: "1",
      borderColor: "gray.900",
    },
    iconContainer: {
      ml: 3,
    },
  },
};

export default Accordion;
