import { useTranslations } from 'next-intl';

import { ButtonLink, Container } from '@/components/shared';
import { navItems } from '@/constants/nav';
import { LINKS } from '@/constants/links';
import ThemeToggle from '@/components/theme/theme-toggle';

import s from './nav.module.scss';

const Nav: React.FC = () => {
  const t = useTranslations();

  return (
    <header className={s.header}>
      <Container>
        <div className={s.inner}>
          <div className={s.brand}>
            <div className={s.title}>{t('site.title')}</div>
            <div className={s.subtitle}>{t('site.description')}</div>
          </div>

          <nav className={s.nav}>
            {navItems.map(([translationKey, href]) => (
              <a key={href} href={href} className={s.link}>
                <span className={s.linkInner}>
                  <span className={s.linkLabel}>{t(translationKey)}</span>
                </span>
              </a>
            ))}
            <ButtonLink href={LINKS.resume} variant="ghost" target="_blank">
              {t('nav.resume')}
            </ButtonLink>
            <ThemeToggle />
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Nav;
