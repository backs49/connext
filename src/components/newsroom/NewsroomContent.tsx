'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { newsData } from '@/data/news';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { cn } from '@/lib/utils';
import type { NewsCategory } from '@/types/news';

type FilterCategory = 'all' | NewsCategory;

const categoryBadgeVariant: Record<NewsCategory, 'navy' | 'bio' | 'teal'> = {
  press: 'navy',
  publication: 'bio',
  event: 'teal',
};

export function NewsroomContent() {
  const t = useTranslations('Newsroom');
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filters: { key: FilterCategory; label: string }[] = [
    { key: 'all', label: t('filter.all') },
    { key: 'press', label: t('filter.press') },
    { key: 'publication', label: t('filter.publication') },
    { key: 'event', label: t('filter.event') },
  ];

  const filteredNews =
    activeFilter === 'all'
      ? newsData
      : newsData.filter((item) => item.category === activeFilter);

  const featuredItem = filteredNews[0];
  const restItems = filteredNews.slice(1);

  function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale === 'ko' ? 'ko-KR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return (
    <section className="py-20 sm:py-28">
      <Container>
        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200',
                activeFilter === filter.key
                  ? 'bg-navy text-white shadow-lg shadow-navy/20'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {filteredNews.length === 0 ? (
            <motion.p
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center text-gray-500"
            >
              {t('noResults')}
            </motion.p>
          ) : (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured Article */}
              {featuredItem && (
                <ScrollReveal>
                  <div className="mb-12 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                    <div className="p-8 sm:p-10">
                      <div className="mb-4 flex items-center gap-3">
                        <Badge variant="bio">{t('featured')}</Badge>
                        <Badge variant={categoryBadgeVariant[featuredItem.category]}>
                          {t(`filter.${featuredItem.category}`)}
                        </Badge>
                      </div>
                      <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                        {locale === 'ko' ? featuredItem.titleKo : featuredItem.title}
                      </h2>
                      <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        {locale === 'ko' ? featuredItem.summaryKo : featuredItem.summary}
                      </p>
                      <div className="mt-6 flex items-center justify-between">
                        <time className="text-sm text-gray-400">
                          {formatDate(featuredItem.date)}
                        </time>
                        <button className="text-sm font-medium text-navy hover:text-bio transition-colors">
                          {t('share')}
                        </button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* News Grid */}
              {restItems.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {restItems.map((item, index) => (
                    <ScrollReveal key={item.id} delay={index * 0.08}>
                      <Card className="flex h-full flex-col p-6">
                        <div className="mb-3 flex items-center gap-2">
                          <time className="text-xs text-gray-400">
                            {formatDate(item.date)}
                          </time>
                          <Badge variant={categoryBadgeVariant[item.category]}>
                            {t(`filter.${item.category}`)}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold leading-snug text-navy">
                          {locale === 'ko' ? item.titleKo : item.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                          {locale === 'ko' ? item.summaryKo : item.summary}
                        </p>
                        <div className="mt-4 pt-4 border-t border-gray-50">
                          <button className="text-sm font-medium text-navy hover:text-bio transition-colors">
                            {t('share')}
                          </button>
                        </div>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
