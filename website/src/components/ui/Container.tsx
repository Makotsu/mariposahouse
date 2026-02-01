import { cn } from '@/lib/utils';
import { CONTAINER_WIDTHS } from '@/lib/constants';
import type { BaseComponentProps } from '@/lib/types';

interface ContainerProps extends BaseComponentProps {
  size?: keyof typeof CONTAINER_WIDTHS;
  center?: boolean;
}

export function Container({
  children,
  size = 'md',
  className,
  center = false,
}: ContainerProps) {
  return (
    <div
      className={cn(
        CONTAINER_WIDTHS[size],
        'mx-auto px-4 sm:px-6 lg:px-8',
        center && 'text-center',
        className
      )}
    >
      {children}
    </div>
  );
}
