import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail, FileText, Sparkles } from 'lucide-react';

import { FadeIn } from '@/components/motion';
import { LINKS } from '@/constants/links';
import { Typography, ButtonLink, Badge, Card } from '@/components/shared';

import s from './hero.module.scss';

const Hero: React.FC = () => {
  const t = useTranslations('hero');

  return (
    <FadeIn>
      <Card className={s.hero}>
        <div className={s.inner}>
          <div className={s.badges}>
            <Badge>
              <Sparkles className={s.badgeIcon} />
              {t('badgeAvailability')}
            </Badge>
            <Badge>{t('badgeLocation')}</Badge>
            <Badge>{t('badgeFocus')}</Badge>
          </div>

          <Typography.Title as="h1" className={s.title}>
            {t('title')}
          </Typography.Title>

          <Typography size="lg" className={s.description}>
            {t('description')}
          </Typography>

          <div className={s.actions}>
            <ButtonLink href={LINKS.resume} target="_blank" variant="ghost">
              <FileText className={s.actionIcon} /> {t('ctaResume')}
            </ButtonLink>

            <ButtonLink href={LINKS.github} variant="ghost" external>
              <Github className={s.actionIcon} /> {t('ctaGithub')}
            </ButtonLink>

            <ButtonLink href={LINKS.linkedin} variant="ghost" external>
              <Linkedin className={s.actionIcon} /> {t('ctaLinkedin')}
            </ButtonLink>

            <ButtonLink href={LINKS.email} variant="ghost">
              <Mail className={s.actionIcon} /> {t('ctaEmail')}
            </ButtonLink>
          </div>
        </div>
      </Card>
    </FadeIn>
  );
};

export default Hero;
