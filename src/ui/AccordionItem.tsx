import {
  AccordionButton,
  AccordionItem as ChakraAccordionItem,
  AccordionItemProps as ChakraAccordionItemProps,
  AccordionPanel,
  Box,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export interface AccordionItemProps extends ChakraAccordionItemProps {
  children: JSX.Element | JSX.Element[];
  title: string;
  hasBoldTitle?: boolean;
  testid?: string;
  iconSize?: number;
}

// LOOK: Redefining the AccordionItem due to different styling. Keeping these kind of components in the ui folder
export const AccordionItem = ({
  children,
  title,
  hasBoldTitle = false,
  iconSize = 4,
  ...props
}: AccordionItemProps) => {
  const styles = useMultiStyleConfig("Accordion");

  return (
    <ChakraAccordionItem {...props}>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton sx={styles.accordionItemButton}>
              <Box sx={styles.titleContainer}>{title}</Box>
              {isExpanded ? (
                <MinusIcon height={iconSize} />
              ) : (
                <AddIcon height={iconSize} />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel>{children}</AccordionPanel>
        </>
      )}
    </ChakraAccordionItem>
  );
};
