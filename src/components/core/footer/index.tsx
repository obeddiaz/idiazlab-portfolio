import React from 'react';
import { ButtonLink } from '@/components/shared';
import { Github } from 'lucide-react';
import s from './footer.module.scss';
import { useTranslations } from 'next-intl';

type FooterProps = {
  repoUrl: string;
};

export const Footer: React.FC<FooterProps> = ({ repoUrl }) => {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.copy}>{t('copyright', { year })}</div>
          <div className={s.actions}>
            <ButtonLink variant="ghost" href={repoUrl} external target="_blank">
              <Github className={s.icon} /> {t('github')}
            </ButtonLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
