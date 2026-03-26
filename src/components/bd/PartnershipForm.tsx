'use client';

import { useState, useTransition } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { submitPartnership } from '@/app/actions/contact';
import { analytics } from '@/lib/analytics';

const partnershipSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(1),
  type: z.string().min(1),
  message: z.string().min(1),
});

type PartnershipFormData = z.infer<typeof partnershipSchema>;

const inputStyles =
  'w-full rounded-lg border border-gray-600 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-colors focus:border-bio focus:outline-none focus:ring-1 focus:ring-bio';

export function PartnershipForm() {
  const t = useTranslations('BD.partnership');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PartnershipFormData>({
    resolver: zodResolver(partnershipSchema),
  });

  const onSubmit = (data: PartnershipFormData) => {
    setError('');
    startTransition(async () => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => formData.append(key, value));
      const result = await submitPartnership(formData);
      if (result.success) {
        analytics.formSubmit('partnership');
        setSubmitted(true);
      } else {
        setError(result.error);
      }
    });
  };

  if (submitted) {
    return (
      <section className="bg-midnight py-20 lg:py-28">
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
            <p className="text-gray-300">
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
    <section className="bg-midnight py-20 lg:py-28">
      <Container>
        <SectionHeading
          title={t('title')}
          subtitle={t('subtitle')}
          className="[&_h2]:text-white [&_p]:text-gray-300"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-2xl space-y-6"
          onSubmitCapture={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                {t('name')}
              </label>
              <input
                id="name"
                type="text"
                className={cn(inputStyles, errors.name && 'border-red-400')}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                {...register('name')}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-400">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                {t('email')}
              </label>
              <input
                id="email"
                type="email"
                className={cn(inputStyles, errors.email && 'border-red-400')}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                {...register('email')}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-300">
                {t('company')}
              </label>
              <input
                id="company"
                type="text"
                className={cn(inputStyles, errors.company && 'border-red-400')}
                aria-invalid={!!errors.company}
                aria-describedby={errors.company ? 'company-error' : undefined}
                {...register('company')}
              />
              {errors.company && (
                <p id="company-error" className="mt-1 text-xs text-red-400">{errors.company.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="type" className="mb-2 block text-sm font-medium text-gray-300">
                {t('type')}
              </label>
              <select
                id="type"
                className={cn(inputStyles, 'appearance-none', errors.type && 'border-red-400')}
                defaultValue=""
                aria-invalid={!!errors.type}
                aria-describedby={errors.type ? 'type-error' : undefined}
                {...register('type')}
              >
                <option value="" disabled />
                <option value="licensing">{t('typeLicensing')}</option>
                <option value="codevelopment">{t('typeCodevelopment')}</option>
                <option value="cdmo">{t('typeCDMO')}</option>
                <option value="other">{t('typeOther')}</option>
              </select>
              {errors.type && (
                <p id="type-error" className="mt-1 text-xs text-red-400">{errors.type.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
              {t('message')}
            </label>
            <textarea
              id="message"
              rows={5}
              className={cn(inputStyles, 'resize-none', errors.message && 'border-red-400')}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              {...register('message')}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-red-400">{errors.message.message}</p>
            )}
          </div>

          {error && (
            <p className="text-sm text-red-400 text-center">{error}</p>
          )}

          <div className="text-center">
            <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto" disabled={isPending}>
              {isPending ? '...' : t('submit')}
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}
