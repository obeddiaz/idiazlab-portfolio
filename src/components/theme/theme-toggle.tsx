'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import cn from 'classnames';

import s from './theme-toggle.module.scss';
import { useTranslations } from 'next-intl';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations('nav');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      aria-label={t('toggleTheme')}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={s.toggle}
    >
      <motion.div
        className={cn(s.thumb, { [s.thumbDark]: isDark, [s.thumbLight]: !isDark })}
        animate={{ x: isDark ? 28 : 0, scale: isDark ? 1.02 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.6 }}
      >
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          className={s.icon}
          initial={{ opacity: 0, rotate: -20, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {isDark ? <Moon /> : <Sun />}
        </motion.span>
      </motion.div>
    </button>
  );
}
