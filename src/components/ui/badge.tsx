import * as React from 'react';
import type { BadgeProps } from './badge-utils';
import { badgeVariants } from './badge-utils';

import { cn } from '@/lib/utils';

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge };
