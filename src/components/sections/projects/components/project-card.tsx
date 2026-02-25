'use client';

import React, { JSX } from 'react';
import { Badge, Card, Typography } from '@/components/shared';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

import s from './project-card.module.scss';
import { HomeServerModal } from '@/components/sections/projects/components/home-server';

interface ProjectCardProps {
  projectCardKey: string;
  href: string;
  tags: number;
}

const projectModals = {
  homeServer: HomeServerModal,
} as const;

type ProjectModalKey = keyof typeof projectModals;

function hasModal(key: string): key is ProjectModalKey {
  return key in projectModals;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectCardKey, href, tags }) => {
  const t = useTranslations();
  const [open, setOpen] = React.useState(false);
  const Modal = hasModal(projectCardKey) ? projectModals[projectCardKey] : null;

  return (
    <>
      {Modal && <Modal open={open} onClose={() => setOpen(false)} />}
      <a
        href={href}
        onClick={(e) => {
          if (href === '#') {
            e.preventDefault();
            setOpen(true);
          }
        }}
        target="_blank"
        rel="noreferrer"
        className={s.projectLink}
      >
        <Card className={s.projectCard} interactive>
          <Typography className={s.projectTitle} muted={false}>
            {t(`projects.${projectCardKey}.title`)}
          </Typography>

          <Typography size="sm" className={s.projectDesc}>
            {t(`projects.${projectCardKey}.description`)}
          </Typography>
          <div className={s.tags}>
            {Array.from({ length: tags }).map((_, index) => (
              <Badge key={`${projectCardKey}.${index}`} variant="outline">
                {t(`projects.${projectCardKey}.tags.${index}`)}
              </Badge>
            ))}
          </div>
          <Typography size="sm" className={s.repoCta} muted={false}>
            {href !== '#' ? t('projectsSection.viewRepo') : t('projectsSection.viewDetails')}{' '}
            <ArrowRight className={s.ctaIcon} />
          </Typography>
        </Card>
      </a>
    </>
  );
};

export default ProjectCard;
