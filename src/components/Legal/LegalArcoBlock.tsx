'use client';

import { useTranslation } from 'react-i18next';
import { Typography } from '../Typography/Typography';
import styles from './PrivacyNotice.module.css';

const RIGHTS = ['arcoAccess', 'arcoRectification', 'arcoCancellation', 'arcoOpposition'] as const;

export function LegalArcoBlock() {
  const { t } = useTranslation();
  const s = 'privacidad.shared';

  return (
    <ul className={styles.list}>
      {RIGHTS.map((key) => (
        <li key={key}>
          <Typography variant="body-sm" color="secondary">
            <strong>{t(`${s}.${key}`)}:</strong> {t(`${s}.${key}Desc`)}
          </Typography>
        </li>
      ))}
    </ul>
  );
}
