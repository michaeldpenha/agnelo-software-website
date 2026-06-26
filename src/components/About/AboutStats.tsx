'use client';

import { useTranslation } from 'react-i18next';
import { Card } from 'primereact/card';
import { Typography } from '../Typography/Typography';
import { STAT_KEYS } from '../../constants/about';
import styles from './AboutStats.module.css';

export function AboutStats() {
  const { t } = useTranslation();

  return (
    <div className={styles.grid}>
      {STAT_KEYS.map((k) => (
        <Card key={k} className={styles.card}>
          <Typography variant="h2" color="brand" className={styles.num}>
            {t(`about.stats.${k}`)}
          </Typography>
          <Typography variant="caption">{t(`about.stats.${k}Label`)}</Typography>
        </Card>
      ))}
    </div>
  );
}
