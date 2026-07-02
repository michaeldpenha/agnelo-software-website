'use client';

import { useTranslation } from 'react-i18next';
import { Card } from 'primereact/card';
import { Typography } from '../Typography/Typography';
import styles from './PrivacyNotice.module.css';

export function LegalDocFooter() {
  const { t } = useTranslation();
  const s = 'privacidad.shared';

  return (
    <Card className={styles.footerCard}>
      <Typography variant="body-sm" color="secondary">
        <strong>{t(`${s}.lastUpdated`)}</strong> {t(`${s}.lastUpdatedDate`)}
      </Typography>
      <Typography variant="caption" color="muted">{t(`${s}.legalFooter`)}</Typography>
    </Card>
  );
}
