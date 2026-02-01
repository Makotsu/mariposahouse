import { cn } from '@/lib/utils';

interface CategoryBadgeProps {
  name: string;
  variant?: 'default' | 'rounded';
  className?: string;
}

export function CategoryBadge({
  name,
  variant = 'default',
  className,
}: CategoryBadgeProps) {
  return (
    <span
      className={cn(
        'bg-gray-100 text-gray-600 text-xs font-medium',
        variant === 'default' ? 'px-2 py-0.5 rounded' : 'px-3 py-1 rounded-full',
        className
      )}
    >
      {name}
    </span>
  );
}
