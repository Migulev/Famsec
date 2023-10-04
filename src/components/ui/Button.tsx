import React from 'react';
import { Loader2 } from 'lucide-react';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'transform rounded-lg transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg text-white',
  {
    variants: {
      variant: {
        default: 'bg-primary hover:bg-primaryDark',
        secondary: 'bg-secondary hover:opacity-[85%]',
      },
      size: {
        default: 'px-5 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
