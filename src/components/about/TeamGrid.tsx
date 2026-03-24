'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { teamData } from '@/data/team';
import { TeamCard } from './TeamCard';
import type { TeamCategory } from '@/types/team';

const tabs: { key: TeamCategory; labelKey: string }[] = [
  { key: 'executive', labelKey: 'tabExecutive' },
  { key: 'sab', labelKey: 'tabSAB' },
];

export function TeamGrid() {
  const t = useTranslations('About.team');
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState<TeamCategory>('executive');

  const filteredMembers = teamData.filter((m) => m.category === activeTab);

  return (
    <section className="py-20 lg:py-28 bg-surface-gray">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </ScrollReveal>

        {/* Tabs */}
        <div className="mb-12 flex justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                'relative rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-200',
                activeTab === tab.key
                  ? 'text-white'
                  : 'text-gray-500 hover:text-navy',
              )}
            >
              {activeTab === tab.key && (
                <motion.div
                  layoutId="team-tab-bg"
                  className="absolute inset-0 rounded-full bg-navy"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t(tab.labelKey)}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
