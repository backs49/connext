'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function NewsletterSubscribe() {
  const t = useTranslations('Newsroom.subscribe');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-gradient-to-br from-navy via-navy-800 to-midnight py-20 sm:py-28">
      <Container className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {t('title')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
          {t('subtitle')}
        </p>

        {submitted ? (
          <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-bio/20">
              <svg
                className="h-7 w-7 text-bio"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-white">
              구독해 주셔서 감사합니다 · Thank you for subscribing!
            </p>
          </div>
        ) : (
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
        )}
      </Container>
    </section>
  );
}
