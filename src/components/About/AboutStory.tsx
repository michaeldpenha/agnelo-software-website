'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Tag } from 'primereact/tag';
import { Typography } from '../Typography/Typography';
import type { SanitySiteSettings } from '../../types/sanity';
import styles from './AboutStory.module.css';

interface Props {
  siteSettings?: SanitySiteSettings | null;
}

export function AboutStory({ siteSettings }: Props) {
  const { t, i18n } = useTranslation();
  const lang = useMemo(
    () => (i18n.language.startsWith('es') ? 'es' : 'en'),
    [i18n.language],
  );

  const p1 = siteSettings?.storyP1?.[lang] || t('about.storyP1');
  const p2 = siteSettings?.storyP2?.[lang] || t('about.storyP2');

  return (
    <div className={styles.story}>
      <Tag value={t('about.badge')} severity="info" className={styles.badge} />
      <Typography variant="h2">{t('about.title')}</Typography>
      <Typography variant="body" color="secondary">{t('about.subtitle')}</Typography>
      <Typography variant="h3" className={styles.storyTitle}>{t('about.storyTitle')}</Typography>
      <Typography variant="body-sm" color="secondary">{p1}</Typography>
      <Typography variant="body-sm" color="secondary">{p2}</Typography>
    </div>
  );
}
