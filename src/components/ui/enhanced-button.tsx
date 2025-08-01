import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { LoadingSpinner } from './loading-spinner';
import type { EnhancedButtonProps } from './enhanced-button-utils';
import { buttonVariants } from './enhanced-button-utils';

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <LoadingSpinner size="sm" className="mr-2" />}
        {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </Comp>
    );
  },
);

EnhancedButton.displayName = 'EnhancedButton';

export { EnhancedButton };
