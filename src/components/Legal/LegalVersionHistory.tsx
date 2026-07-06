'use client';

import { useTranslation } from 'react-i18next';
import { Tag } from 'primereact/tag';
import { Card } from 'primereact/card';
import { Typography } from '../Typography/Typography';
import styles from './LegalVersionHistory.module.css';

interface Version {
  date: string;
  label: string;
  file: string;
}

export function LegalVersionHistory() {
  const { t } = useTranslation();
  const versions = t('privacidadPage.versions', { returnObjects: true }) as Version[];

  return (
    <Card className={styles.card}>
      <Typography variant="h4">{t('privacidadPage.versionHistory')}</Typography>
      <ul className={styles.list}>
        {versions.map((v, i) => (
          <li key={v.file} className={styles.item}>
            <span className={styles.date}>{v.date}</span>
            <span className={styles.label}>{v.label}</span>
            {i === 0 ? (
              <Tag value={t('privacidadPage.versionCurrent')} severity="success" className={styles.tag} />
            ) : (
              <a
                href={`/privacidad/${v.file.replace('aviso-privacidad-', '').replace('.pdf', '')}`}
                className={styles.link}
              >
                Ver
              </a>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}
