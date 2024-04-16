import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import s from "./Button.module.scss";

const buttonVariants = cva(s.root, {
  variants: {
    variant: {
      default: s.default,
      destructive: s.destructive,
      outline: s.outline,
      secondary: s.secondary,
      ghost: s.ghost,
      link: s.link,
    },
    size: {
      default: s.sizeDefault,
      sm: s.sizeSm,
      lg: s.sizeLg,
      icon: s.sizeIcon,
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
