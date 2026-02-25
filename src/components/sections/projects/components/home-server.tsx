'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { Badge, Button, Card, Modal, Typography } from '@/components/shared';

import s from './home-server.module.scss';

type Props = {
  open: boolean;
  onClose: () => void;
};

export function HomeServerModal({ open, onClose }: Props) {
  const t = useTranslations('projects.homeServer');
  const gt = useTranslations('global');

  return (
    <Modal open={open} onClose={onClose} title={t('title')} description={t('details.description')}>
      <div className={s.content}>
        <div>
          <Typography.Title as="h3">{t('details.title')}</Typography.Title>
          <Typography as="div" size="sm" muted={false}>
            <ul className={s.list}>
              <li>{t('details.bullets.0')}</li>
              <li>{t('details.bullets.1')}</li>
              <li>{t('details.bullets.2')}</li>
            </ul>
          </Typography>
        </div>
        <div>
          <div className="text-sm font-semibold">{t('details.stack')}</div>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge variant="outline">Raspberry Pi</Badge>
            <Badge variant="outline">Docker</Badge>
            <Badge variant="outline">Nginx Proxy</Badge>
            <Badge variant="outline">Nextcloud</Badge>
            <Badge variant="outline">Jellyfin</Badge>
            <Badge variant="outline">Collabora</Badge>
            <Badge variant="outline">Dynamic DNS</Badge>
          </div>
        </div>
        <Card className="p-4">
          <Typography.Title as="h3" className="mb-2">
            {t('details.architecture')}
          </Typography.Title>
          <Typography size="sm" muted={false}>
            {t('details.architectureDescription')}
          </Typography>
        </Card>
        <div className="flex flex-wrap gap-2 pt-1 justify-end ">
          <Button onClick={onClose}>{gt('close')}</Button>
        </div>
      </div>
    </Modal>
  );
}
