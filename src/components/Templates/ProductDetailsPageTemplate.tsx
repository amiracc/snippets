import { ReactNode } from "react";

import { Grid, GridItem, useMultiStyleConfig } from "@chakra-ui/react";

export type ProductDetailsPageTemplateAreas = {
  stage: ReactNode;
  info: ReactNode;
  crossStyle: ReactNode;
  details: ReactNode;
  recommend: ReactNode;
};

export interface ProductDetailsPageTemplateProps {
  areas: ProductDetailsPageTemplateAreas;
}

export const ProductDetailsPageTemplate = ({
  areas,
}: ProductDetailsPageTemplateProps) => {
  const styles = useMultiStyleConfig("PDPTemplate");
  const { stage, info, crossStyle, details, recommend } = areas;

  return (
    <Grid sx={styles.grid} data-testid="pdp-template-grid-area">
      <GridItem sx={styles.stage}>{stage}</GridItem>
      <GridItem sx={styles.info}>{info}</GridItem>
      <GridItem sx={styles.details}>{details}</GridItem>
      <GridItem sx={styles.crossStyle} area={"crossStyle"}>
        {crossStyle}
      </GridItem>
      <GridItem sx={styles.recommend}>{recommend}</GridItem>
    </Grid>
  );
};
