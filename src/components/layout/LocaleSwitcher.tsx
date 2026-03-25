'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { analytics } from '@/lib/analytics';

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const next = locale === 'ko' ? 'en' : 'ko';
    analytics.localeSwitch(next);
    router.replace(pathname, { locale: next });
  };

  return (
    <button
      onClick={toggleLocale}
      className={cn(
        'flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-gray-50',
        className,
      )}
      aria-label={`Switch to ${locale === 'ko' ? 'English' : '한국어'}`}
    >
      <span className={cn(locale === 'ko' ? 'text-navy font-bold' : 'text-gray-400')}>KO</span>
      <span className="text-gray-300">|</span>
      <span className={cn(locale === 'en' ? 'text-navy font-bold' : 'text-gray-400')}>EN</span>
    </button>
  );
}
