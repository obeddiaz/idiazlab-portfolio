import { FadeIn } from '@/components/motion';
import { LINKS } from '@/constants/links';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Typography, ButtonLink, Card } from '@/components/shared';
import { useTranslations } from 'next-intl';

import s from './contact.module.scss';

const Contact: React.FC = () => {
  const t = useTranslations('contact');

  return (
    <FadeIn>
      <Card>
        <div className={s.contact}>
          <Typography.Title as="h2">{t('title')}</Typography.Title>
          <Typography>{t('description')}</Typography>

          <div className={s.actions}>
            <ButtonLink href={LINKS.email}>
              <Mail className={s.icon} /> {t('ctaEmailMe')}
            </ButtonLink>

            <ButtonLink href={LINKS.linkedin} variant="ghost" external>
              <Linkedin className={s.icon} /> {t('ctaLinkedin')}
            </ButtonLink>

            <ButtonLink href={LINKS.github} variant="ghost" external>
              <Github className={s.icon} /> {t('ctaGithub')}
            </ButtonLink>
          </div>
        </div>
      </Card>
    </FadeIn>
  );
};

export default Contact;
