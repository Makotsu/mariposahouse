import { cn } from '@/lib/utils';
import type { BaseComponentProps, SectionBackground } from '@/lib/types';

interface SectionProps extends BaseComponentProps, SectionBackground {
  padding?: 'sm' | 'md' | 'lg';
  id?: string;
}

const paddingStyles = {
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16',
};

const bgStyles = {
  white: 'bg-white',
  gray: 'bg-gray-50',
};

export function Section({
  children,
  variant = 'white',
  padding = 'lg',
  className,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(paddingStyles[padding], bgStyles[variant], className)}
    >
      {children}
    </section>
  );
}
