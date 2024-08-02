import { useState } from "react";

import { Accordion, useMultiStyleConfig } from "@chakra-ui/react";

import { PortableText } from "@portabletext/react";

import { AccordionItem } from "../../ui/AccordionItem";
import { SingleProduct } from "../../interfaces/interfaces";

export const ProductDetailAccordion = ({ product }: SingleProduct) => {
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
        <PortableText value={product?.details} />
      </AccordionItem>

      <AccordionItem
        sx={styles.accordionItem}
        title={"Fit & Size"}
        onClick={() => handleAccordionToggle("fit")}
      >
        <PortableText value={product?.fit} />
      </AccordionItem>
    </Accordion>
  );
};
