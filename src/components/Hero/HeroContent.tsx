'use client';

import { useTranslation } from 'react-i18next';
import { Tag } from 'primereact/tag';
import { Typography } from '../Typography/Typography';
import styles from './HeroContent.module.css';

export function HeroContent() {
  const { t } = useTranslation();

  return (
    <div className={styles.content}>
      <Tag value={t('hero.badge')} severity="info" className={styles.badge} />
      <Typography variant="h1">{t('hero.title')}</Typography>
      <Typography variant="body" color="secondary">{t('hero.subtitle')}</Typography>
      <div className={styles.actions}>
        <a href="#services" className={styles.btnPrimary}>{t('hero.cta')}</a>
        <a href="#contact" className={styles.btnSecondary}>{t('hero.quote')}</a>
      </div>

    </div>
  );
}
