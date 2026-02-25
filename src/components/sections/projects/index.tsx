import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

import { FadeIn } from '@/components/motion';
import { PROJECT_KEYS } from '@/constants/projects';
import { Typography, Badge, Card } from '@/components/shared';
import { HomeServerModal } from '@/components/sections/projects/components/home-server';

import ProjectCard from './components/project-card';
import s from './projects.module.scss';

const Projects = () => {
  const t = useTranslations();

  return (
    <div className={s.layout}>
      <div className={s.headerLeft}>
        <FadeIn>
          <Typography.Title as="h2">{t('projectsSection.title')}</Typography.Title>
          <Typography className={s.subcopy}>{t('projectsSection.description')}</Typography>
        </FadeIn>
      </div>
      <div className={s.headerRight}>
        <FadeIn>
          <Typography.Title as="h2">{t('projectsSection.skillsTitle')}</Typography.Title>
        </FadeIn>
      </div>
      <div className={s.projectsCol}>
        <div className={s.projectsGrid}>
          {PROJECT_KEYS.map((p) => (
            <ProjectCard key={p.key} href={p.href} projectCardKey={p.key} tags={p.tags} />
          ))}
        </div>
      </div>

      <div className={s.skillsCol}>
        <Typography.Title as="h3">{t('projectsSection.frontend')}</Typography.Title>
        <div className={s.skillsBadges}>
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Next.js</Badge>
          <Badge variant="outline">Redux</Badge>
          <Badge variant="outline">RTK Query</Badge>
          <Badge variant="outline">React Native</Badge>
          <Badge variant="outline">CSS</Badge>
          <Badge variant="outline">Sass</Badge>
        </div>

        <Typography.Title as="h3" className={s.skillsHeading}>
          {t('projectsSection.backend')}
        </Typography.Title>
        <div className={s.skillsBadges}>
          <Badge variant="outline">NodeJS</Badge>
          <Badge variant="outline">Express</Badge>
          <Badge variant="outline">GraphQL</Badge>
          <Badge variant="outline">REST</Badge>
          <Badge variant="outline">PHP</Badge>
        </div>

        <Typography.Title as="h3" className={s.skillsHeading}>
          {t('projectsSection.cloudInfra')}
        </Typography.Title>
        <div className={s.skillsBadges}>
          <Badge variant="outline">AWS Lambda</Badge>
          <Badge variant="outline">AWS CloudFormation</Badge>
          <Badge variant="outline">AWS Step Functions</Badge>
          <Badge variant="outline">AWS EventBridge</Badge>
          <Badge variant="outline">Serverless</Badge>
          <Badge variant="outline">Route 53</Badge>
          <Badge variant="outline">Amplify</Badge>
        </div>

        <Typography.Title as="h3" className={s.skillsHeading}>
          {t('projectsSection.database')}
        </Typography.Title>
        <div className={s.skillsBadges}>
          <Badge variant="outline">MySQL</Badge>
          <Badge variant="outline">PostgreSQL</Badge>
          <Badge variant="outline">DynamoDB</Badge>
        </div>
      </div>
    </div>
  );
};

export default Projects;
