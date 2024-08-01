import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  forwardRef,
  useMultiStyleConfig,
} from "@chakra-ui/react";

export interface ButtonProps extends ChakraButtonProps {
  size?: "xs" | "sm" | "md" | "lg" | ("xs" | "sm" | "md" | "lg")[];
  variant?: "solidPDP" | "crossStyle";
}

export const Button = forwardRef<ButtonProps, "button">(
  ({ children, size, variant, ...props }, ref) => {
    const styles = useMultiStyleConfig("Button", {
      size,
      variant,
    });

    return (
      <ChakraButton ref={ref} sx={styles} {...props}>
        {children}
      </ChakraButton>
    );
  }
);
