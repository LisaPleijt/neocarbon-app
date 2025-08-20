import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-transparent',
  {
    variants: {
      variant: {
        default: 'bg-green-600 text-white hover:bg-green-700 shadow-lg',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
        outline: 'border border-gray-600 text-gray-300 hover:bg-white/5 hover:text-white hover:border-gray-500',
        secondary: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm',
        ghost: 'hover:bg-white/5 hover:text-white text-gray-300',
        link: 'underline-offset-4 hover:underline text-green-400',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
