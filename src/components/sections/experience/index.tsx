'use client';

import * as React from 'react';
import cn from 'classnames';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { EXPERIENCE_KEYS } from '@/constants/experience';
import { FadeIn } from '../../motion';
import { Card, Typography } from '../../shared';

import s from './experience.module.scss';

interface ReservedCardProps {
  title: string;
  description: string;
  className?: string;
}

const ReservedCard: React.FC<ReservedCardProps> = ({ title, description, className }) => {
  return (
    <div className={cn(s.reservedCard, className)}>
      <div>
        <Card className={s.fill}>
          <Typography className={s.title} muted={false}>
            {title}
          </Typography>
          <Typography size="sm">{description}</Typography>
          <div className={cn(s.accentDot, 'absolute top-0 right-0')} />
        </Card>
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const t = useTranslations();
  const shouldReduceMotion = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [returningKey, setReturningKey] = React.useState<number | null>(null);

  const selected = React.useMemo(() => {
    if (returningKey === null) return EXPERIENCE_KEYS[selectedIndex];
    return null;
  }, [selectedIndex, returningKey]);

  const layoutId = (k: string) => `exp-card-${k}`;

  const spring = React.useMemo(
    () =>
      shouldReduceMotion
        ? ({ duration: 0 } as const)
        : ({ type: 'spring', stiffness: 2000, damping: 100 } as const),
    [shouldReduceMotion],
  );

  const handleSelectCard = (newIndex: number) => () => {
    setReturningKey(selectedIndex);
    setSelectedIndex(newIndex);
    requestAnimationFrame(() => {
      document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <>
      <FadeIn>
        <Typography.Title as="h2">{t('experience.section.title')}</Typography.Title>
        <Typography className={s.sectionDescription}>
          {t('experience.section.description')}
        </Typography>
      </FadeIn>
      <div className={s.layout}>
        <FadeIn>
          <div className={s.leftCol}>
            <AnimatePresence mode="wait">
              {selected && (
                <motion.div
                  key={selected.key}
                  layoutId={layoutId(selected.key)}
                  transition={spring}
                  className={s.motion}
                >
                  <Card>
                    <div className={s.selectedHeader}>
                      <div>
                        <Typography className={s.title} muted={false}>
                          {t(`experience.${selected.key}.role`)}
                        </Typography>
                        <Typography size="sm">{t(`experience.${selected.key}.company`)}</Typography>
                        <Typography size="xs" className={s.meta} muted={false}>
                          {t(`experience.${selected.key}.meta`)}
                        </Typography>
                      </div>
                      <div className={s.accentDot} />
                    </div>
                    <Typography size="sm" className={s.bulletsWrap} as="div">
                      <ul className={s.bullets}>
                        {Array.from({ length: selected.bullets }).map((_, i) => (
                          <li key={`${selected.key}.${i}`}>
                            {t(`experience.${selected.key}.bullets.${i}`)}
                          </li>
                        ))}
                      </ul>
                    </Typography>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
        <FadeIn>
          <div className={s.rightCol}>
            <div className={s.gridRight}>
              {EXPERIENCE_KEYS.map((e, idx) => {
                const isSelected = idx === selectedIndex;
                const isReturning = idx === returningKey;
                const reserved = isSelected || isReturning;

                if (isSelected && returningKey === null) {
                  return (
                    <div key={e.key} className={s.relative}>
                      <ReservedCard
                        title={t(`experience.${e.key}.companyShort`)}
                        description={t(`experience.${e.key}.roleShort`)}
                        className="sm:absolute"
                      />
                    </div>
                  );
                }

                return (
                  <div key={e.key} className={s.relative}>
                    <motion.div
                      layoutId={layoutId(e.key)}
                      transition={spring}
                      onLayoutAnimationComplete={() => {
                        if (isReturning) setReturningKey(null);
                      }}
                      className={[s.motion, s.fill].join(' ')}
                    >
                      <button
                        type="button"
                        onClick={handleSelectCard(idx)}
                        className={s.cardButton}
                      >
                        <Card className={s.smallCard} interactive>
                          <Typography className={s.title} muted={false}>
                            {t(`experience.${e.key}.companyShort`)}
                          </Typography>
                          <Typography size="sm">{t(`experience.${e.key}.roleShort`)}</Typography>
                        </Card>
                      </button>
                    </motion.div>
                    {reserved && (
                      <ReservedCard
                        title={t(`experience.${e.key}.companyShort`)}
                        description={t(`experience.${e.key}.roleShort`)}
                        className="absolute"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default ExperienceSection;
