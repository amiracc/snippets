import { useState } from "react";

import { Accordion, Text, useMultiStyleConfig } from "@chakra-ui/react";

import { AccordionItem } from "../../ui/AccordionItem";

export const ProductDetailAccordion = () => {
  const styles = useMultiStyleConfig("ProductDetailAccordion");

  const [isDetailsExpanded, setIsDetailsExpanded] = useState(true);
  const [isFitExpanded, setIsFitExpanded] = useState(false);

  const handleAccordionToggle = (accordionType: string) => {
    if (accordionType === "details") {
      setIsDetailsExpanded(!isDetailsExpanded);
    } else if (accordionType === "fit") {
      setIsFitExpanded(!isFitExpanded);
    }
  };

  return (
    <Accordion
      sx={styles.accordionContainer}
      defaultIndex={[0]}
      allowMultiple
      id="detail-accordion"
    >
      <AccordionItem
        sx={styles.accordionItem}
        title="Details"
        id="detailsAccordion"
        onClick={() => handleAccordionToggle("details")}
      >
        <Text>Details about this product</Text>
      </AccordionItem>

      <AccordionItem
        sx={styles.accordionItem}
        title={"Fit & Size"}
        onClick={() => handleAccordionToggle("fit")}
      >
        <Text>Fit and size of this product</Text>
      </AccordionItem>
    </Accordion>
  );
};
