'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PartnershipFormData>({
    resolver: zodResolver(partnershipSchema),
  });

  const onSubmit = (data: PartnershipFormData) => {
    // Placeholder - does not actually submit
    console.log('Partnership form data:', data);
  };

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
                {...register('name')}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                {t('email')}
              </label>
              <input
                id="email"
                type="email"
                className={cn(inputStyles, errors.email && 'border-red-400')}
                {...register('email')}
              />
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
                {...register('company')}
              />
            </div>
            <div>
              <label htmlFor="type" className="mb-2 block text-sm font-medium text-gray-300">
                {t('type')}
              </label>
              <select
                id="type"
                className={cn(inputStyles, 'appearance-none', errors.type && 'border-red-400')}
                defaultValue=""
                {...register('type')}
              >
                <option value="" disabled />
                <option value="licensing">{t('typeLicensing')}</option>
                <option value="codevelopment">{t('typeCodevelopment')}</option>
                <option value="cdmo">{t('typeCDMO')}</option>
                <option value="other">{t('typeOther')}</option>
              </select>
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
              {...register('message')}
            />
          </div>

          <div className="text-center">
            <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">
              {t('submit')}
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}
