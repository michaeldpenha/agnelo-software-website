'use client';

import { useTranslation } from 'react-i18next';
import { Card } from 'primereact/card';
import { Typography } from '../Typography/Typography';
import { VALUE_ITEMS } from '../../constants/about';
import styles from './AboutValues.module.css';

export function AboutValues() {
  const { t } = useTranslation();

  return (
    <Card className={styles.card}>
      <Typography variant="h4" className={styles.title}>
        {t('about.valuesTitle')}
      </Typography>
      <div className={styles.grid}>
        {VALUE_ITEMS.map(({ key, Icon, color, bg }) => (
          <div key={key} className={styles.item}>
            <div className={styles.iconWrap} style={{ background: bg }}>
              <Icon size={16} color={color} />
            </div>
            <div>
              <Typography variant="h4">{t(`about.values.${key}.title`)}</Typography>
              <Typography variant="caption">{t(`about.values.${key}.desc`)}</Typography>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
