'use client';

import { useState, useTransition } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { submitIRContact } from '@/app/actions/contact';
import { analytics } from '@/lib/analytics';

const contactSchema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  company: z.string().min(1, 'Required'),
  message: z.string().min(1, 'Required'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function IRContactForm() {
  const t = useTranslations('IR.contact');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    setError('');
    startTransition(async () => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => formData.append(key, value));
      const result = await submitIRContact(formData);
      if (result.success) {
        analytics.formSubmit('ir_contact');
        setSubmitted(true);
      } else {
        setError(result.error);
      }
    });
  };

  const inputStyles = cn(
    'w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50',
    'focus:border-bio focus:outline-none focus:ring-1 focus:ring-bio',
    'transition-colors duration-200',
  );

  const errorStyles = 'mt-1 text-xs text-red-400';

  if (submitted) {
    return (
      <section className="bg-midnight py-20 sm:py-28">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-bio/20">
              <svg
                className="h-8 w-8 text-bio"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">{t('title')}</h2>
            <p className="text-gray-400">
              문의해 주셔서 감사합니다. 빠른 시일 내에 연락드리겠습니다.
              <br />
              Thank you for your inquiry. We will be in touch shortly.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-midnight py-20 sm:py-28">
      <Container>
        <SectionHeading
          title={t('title')}
          subtitle={t('subtitle')}
          className="[&_h2]:text-white [&_p]:text-gray-400"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-2xl space-y-6"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                {t('name')}
              </label>
              <input
                {...register('name')}
                placeholder={t('name')}
                className={inputStyles}
              />
              {errors.name && (
                <p className={errorStyles}>{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                {t('email')}
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder={t('email')}
                className={inputStyles}
              />
              {errors.email && (
                <p className={errorStyles}>{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Company */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              {t('company')}
            </label>
            <input
              {...register('company')}
              placeholder={t('company')}
              className={inputStyles}
            />
            {errors.company && (
              <p className={errorStyles}>{errors.company.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              {t('message')}
            </label>
            <textarea
              {...register('message')}
              rows={5}
              placeholder={t('message')}
              className={cn(inputStyles, 'resize-none')}
            />
            {errors.message && (
              <p className={errorStyles}>{errors.message.message}</p>
            )}
          </div>

          {error && (
            <p className="text-sm text-red-400">{error}</p>
          )}

          <div className="pt-2">
            <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto" disabled={isPending}>
              {isPending ? '...' : t('submit')}
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}
