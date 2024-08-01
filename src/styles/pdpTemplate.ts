const PDPTemplate: any = {
  baseStyle: {
    grid: {
      gridTemplateColumns: "65% 1fr",
      gridTemplateAreas: {
        base: `"stage stage" "info info"  "details details" "crossStyle crossStyle" "recommend recommend"`,
        lg: `"stage info"  "details details" "crossStyle crossStyle" "recommend recommend"`,
      },
    },
    stage: {
      gridArea: "stage",
    },
    info: {
      gridArea: "info",
    },
    details: {
      gridArea: "details",
      position: { base: "static", lg: "sticky" },
      bottom: 0,
    },
    crossStyle: {
      gridArea: "crossStyle",
    },
    recommend: {
      gridArea: "recommend",
    },
  },
};

export default PDPTemplate;
