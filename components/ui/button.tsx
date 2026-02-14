import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /* ─── Brand gradient variants ─────────────────────────── */
        gradient:
          "gradient-blue text-white font-semibold hover:shadow-lg hover:shadow-brand-blue/20 hover:-translate-y-[1px]",
        "gradient-green":
          "gradient-green text-white font-semibold hover:shadow-lg hover:shadow-brand-green/20 hover:-translate-y-[1px]",
        "ghost-brand":
          "text-brand-blue hover:text-brand-blue-deep hover:bg-brand-blue/5",
        "link-brand":
          "text-brand-blue hover:text-brand-blue-deep underline-offset-4 hover:underline p-0 h-auto",
        /* Utility variants */
        ghost: "hover:bg-brand-blue/5 hover:text-brand-blue",
        outline:
          "border border-input bg-background hover:bg-brand-blue/5 hover:text-brand-blue",
        /* Dark surface variants (for hero/CTA on dark backgrounds) */
        "outline-dark":
          "border border-white/15 bg-white/5 text-white backdrop-blur-sm hover:border-white/30 hover:bg-white/10",
      },
      size: {
        default: "h-12 px-6 py-2.5",
        sm: "h-10 rounded-lg px-5",
        lg: "h-14 rounded-xl px-9 py-4 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "gradient",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
