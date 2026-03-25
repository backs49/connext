'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  company: z.string().min(1, 'Required'),
  message: z.string().min(1, 'Required'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function IRContactForm() {
  const t = useTranslations('IR.contact');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    // Placeholder - form doesn't actually submit yet
    console.log('IR Contact form data:', data);
  };

  const inputStyles = cn(
    'w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50',
    'focus:border-bio focus:outline-none focus:ring-1 focus:ring-bio',
    'transition-colors duration-200',
  );

  const errorStyles = 'mt-1 text-xs text-red-400';

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

          <div className="pt-2">
            <Button type="submit" variant="accent" size="lg">
              {t('submit')}
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}
