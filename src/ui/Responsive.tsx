import { ReactNode } from "react";

import { Box, useMultiStyleConfig } from "@chakra-ui/react";

export interface ResponsiveProps {
  children?: ReactNode;
}

export const HideOnDesktop = ({ children }: ResponsiveProps) => {
  const styles = useMultiStyleConfig("Responsive");

  return <Box sx={styles.hideDesktop}>{children}</Box>;
};

export const HideOnMobile = ({ children }: ResponsiveProps) => {
  const styles = useMultiStyleConfig("Responsive");

  return <Box sx={styles.hideMobile}>{children}</Box>;
};
