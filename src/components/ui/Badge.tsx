import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'navy' | 'bio' | 'teal' | 'outline';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-gray-100 text-gray-700',
  navy: 'bg-navy-50 text-navy',
  bio: 'bg-bio-50 text-bio-500',
  teal: 'bg-teal-50 text-teal-600',
  outline: 'border border-gray-200 text-gray-600',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
