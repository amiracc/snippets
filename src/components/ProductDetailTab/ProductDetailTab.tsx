import { Tabs, Tab, TabList, Box, useMultiStyleConfig } from "@chakra-ui/react";

export const ProductDetailTab = () => {
  const styles = useMultiStyleConfig("ProductDetailTab");

  return (
    <Box sx={styles.tabContainer} data-testid="product-detail-tab">
      <Tabs variant="details">
        <TabList sx={styles.tabList}>
          <Tab
            data-testid="product-details-tab-button"
            onClick={() => {}}
            sx={styles.tab}
          >
            Details
          </Tab>
          <Tab onClick={() => {}} sx={styles.tab}>
            Fit & Size
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};
