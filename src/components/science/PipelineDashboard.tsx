'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PipelineFilters } from './PipelineFilters';
import { PipelineCard } from './PipelineCard';
import { PipelineDetailModal } from './PipelineDetailModal';
import { pipelineData } from '@/data/pipeline';
import type { Platform, ClinicalStage, PipelineItem } from '@/types/pipeline';

export function PipelineDashboard() {
  const t = useTranslations('Science.pipeline');

  const [activePlatform, setActivePlatform] = useState<Platform | 'all'>('all');
  const [activeStage, setActiveStage] = useState<ClinicalStage | 'all'>('all');
  const [selectedItem, setSelectedItem] = useState<PipelineItem | null>(null);

  const filteredData = useMemo(() => {
    return pipelineData.filter((item) => {
      const platformMatch = activePlatform === 'all' || item.platform === activePlatform;
      const stageMatch = activeStage === 'all' || item.stage === activeStage;
      return platformMatch && stageMatch;
    });
  }, [activePlatform, activeStage]);

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <PipelineFilters
          activePlatform={activePlatform}
          activeStage={activeStage}
          onPlatformChange={setActivePlatform}
          onStageChange={setActiveStage}
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <PipelineCard
                  item={item}
                  onClick={() => setSelectedItem(item)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredData.length === 0 && (
          <p className="mt-12 text-center text-gray-400">{t('noResults')}</p>
        )}

        <PipelineDetailModal
          item={selectedItem}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      </Container>
    </section>
  );
}
