'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function NewsletterSubscribe() {
  const t = useTranslations('Newsroom.subscribe');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - doesn't actually submit
  };

  return (
    <section className="bg-gradient-to-br from-navy via-navy-800 to-midnight py-20 sm:py-28">
      <Container className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t('title')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
          {t('subtitle')}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            placeholder={t('placeholder')}
            className="flex-1 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-white placeholder-white/50 focus:border-bio focus:outline-none focus:ring-1 focus:ring-bio transition-colors duration-200"
          />
          <Button type="submit" variant="accent" size="md">
            {t('button')}
          </Button>
        </form>
      </Container>
    </section>
  );
}
