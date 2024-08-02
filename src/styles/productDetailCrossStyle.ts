const CrossStyle: any = {
  baseStyle: ({ leftAlignedText }) => ({
    autoMargin: {
      ml: "auto",
      mr: "auto",
    },
    wrapper: {
      ml: "auto",
      mr: "auto",
      mt: { base: 16, lg: 8 },
      pr: { base: 4, md: 0, lg: 4 },
      pl: { base: 4, md: 0, lg: 4 },
    },
    container: {
      ml: "auto",
      mr: "auto",
      maxWidth: {
        base: "2xl",
        md: "3xl",
        lg: "5xl",
        xl: "6xl",
        "2xl": "8xl",
      },
    },
    header: {
      fontSize: { base: "xl", sm: "3xl", lg: "4xl" },
      fontWeight: 400,
      mb: { base: 8, sm: 2, lg: 14 },
      textAlign: "center",
    },
    grid: {
      mb: [4, 4, 0],
      gridTemplateColumns: {
        base: "repeat(2, 1fr)",
        sm: "minmax(110px,1fr) minmax(170px,48%) minmax(110px,1fr)",
        lg: "minmax(130px,1fr) minmax(190px,33%) minmax(130px,1fr)",
        "2xl": "minmax(100px,396px) 1fr minmax(100px,396px)",
      },
      gridTemplateRows: { base: "repeat(1, 1fr)", sm: "repeat(2,1fr)" },
      gridColumnGap: { base: 6, lg: 8, xl: 12, "2xl": 16 },
      gridRowGap: { base: 0, sm: 8, lg: 10, xl: 16, "2xl": 20 },
      display: "grid",
    },
    mainImage: {
      gridRow: { base: "1/2", sm: "1/span 2" },
      gridColumn: { base: "1/3", sm: 2 },
      alignSelf: "center",
    },
    cardWrapper: {
      display: { base: "block", lg: "flex" },
      alignItems: "center",
      height: "100%",
      pt: { base: 4, sm: 0 },
      pr: 0,
      pb: { base: 2, sm: 0 },
    },
    cardContainer: {
      width: "100%",
      display: { base: "flex", sm: "block", lg: "flex" },
      flexDirection: { base: "column", sm: "column", lg: "row" },
    },
    cardImageContainer: {
      position: "relative",
      flex: "none",
      overflow: "hidden",
      w: { base: "100%", sm: "auto", lg: "50%" },
      order: { lg: leftAlignedText && 2 },
      ml: { base: 0, lg: leftAlignedText && 4 },
      mr: { base: 4, sm: 0, lg: !leftAlignedText && 4 },
    },
    cardDetailsWrapper: {
      pt: 4,
      alignItems: {
        base: "center",
        lg: leftAlignedText ? "flex-end" : "flex-start",
      },
      display: "flex",
      flexDirection: "column",
      alignSelf: { base: "center", sm: "flex-end" },
      width: { lg: "50%" },
    },
    cardDetailsFlexContainer: {
      textAlign: { base: "auto", sm: leftAlignedText && "right" },
      mt: { base: 0, sm: "auto" },
      flexDirection: "column",
      maxHeight: "none",
      mb: "0.25rem",
      display: "flex",
    },
    productName: {
      fontSize: { base: "xs", md: "sm" },
      textOverflow: { base: "ellipsis", lg: "clip" },
      whiteSpace: { base: "normal", sm: "nowrap", lg: "normal" },
      fontWeight: 800,
      overflow: "hidden",
    },
    addToCartButtonWrapper: {
      display: "flex",
      justifyContent: {
        base: "normal",
        lg: leftAlignedText ? "flex-end" : "flex-start",
      },
      pt: 4,
    },
    addToCartButton: {
      width: {
        sm: "100%",
        lg: "auto",
      },
    },
    priceContainer: {
      fontSize: "xs",
      whiteSpace: "nowrap",
      justifyContent: {
        base: "flex-start",
        sm: leftAlignedText ? "flex-end" : "flex-start",
      },
    },
    price: {
      fontSize: { base: "xs", md: "sm" },
    },
    listPrice: {
      fontWeight: 700,
    },
  }),
};

export default CrossStyle;
