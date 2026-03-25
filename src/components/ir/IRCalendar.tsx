'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Badge } from '@/components/ui/Badge';

interface CalendarEvent {
  id: string;
  date: string;
  title: string;
  description: string;
}

const upcomingEvents: CalendarEvent[] = [
  {
    id: 'event-1',
    date: '2026-01-12',
    title: 'JP Morgan Healthcare Conference 2026',
    description: 'Annual healthcare investment conference in San Francisco. CONNEXT will present its latest pipeline updates and strategic vision.',
  },
  {
    id: 'event-2',
    date: '2026-06-24',
    title: 'BIO Korea 2026',
    description: 'Korea\'s largest biotech convention. CONNEXT booth and partnering sessions available for investor meetings.',
  },
  {
    id: 'event-3',
    date: '2026-09-15',
    title: 'BIO International Convention 2026',
    description: 'Global biotech partnering event. One-on-one meetings available with CONNEXT leadership.',
  },
];

function formatDate(dateStr: string): { month: string; day: string } {
  const date = new Date(dateStr);
  const month = date.toLocaleString('en', { month: 'short' }).toUpperCase();
  const day = date.getDate().toString();
  return { month, day };
}

export function IRCalendar() {
  const t = useTranslations('IR.calendar');

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        {upcomingEvents.length === 0 ? (
          <p className="text-center text-gray-500">{t('noEvents')}</p>
        ) : (
          <div className="mx-auto max-w-3xl space-y-6">
            {upcomingEvents.map((event, index) => {
              const { month, day } = formatDate(event.date);
              return (
                <ScrollReveal key={event.id} delay={index * 0.1}>
                  <div className="flex gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                    {/* Date badge */}
                    <div className="flex flex-shrink-0 flex-col items-center justify-center rounded-xl bg-navy px-4 py-3 text-white">
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        {month}
                      </span>
                      <span className="text-2xl font-bold leading-tight">
                        {day}
                      </span>
                    </div>

                    {/* Event details */}
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <Badge variant="bio">Conference</Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-navy">
                        {event.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
