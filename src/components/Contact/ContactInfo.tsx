'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'primereact/card';
import { IconMail, IconClock } from '@tabler/icons-react';
import { Typography } from '../Typography/Typography';
import type { SanitySiteSettings } from '../../types/sanity';
import styles from './ContactInfo.module.css';

interface ReachEntry {
  labelKey: string;
  value: string;
  Icon: React.FC<{ size?: string | number; color?: string }>;
  color: string;
  bg: string;
}

interface Props {
  siteSettings?: SanitySiteSettings | null;
}

export function ContactInfo({ siteSettings }: Props) {
  const { t } = useTranslation();

  const reachEntries = useMemo<ReachEntry[]>(
    () => [
      {
        labelKey: 'contact.emailLabel',
        value: siteSettings?.contactEmail || t('contact.emailValue'),
        Icon: IconMail,
        color: '#2563EB',
        bg: '#EFF6FF',
      },
      {
        labelKey: 'contact.responseLabel',
        value: t('contact.responseValue'),
        Icon: IconClock,
        color: '#F59E0B',
        bg: '#FFFBEB',
      },
    ],
    [siteSettings, t],
  );

  return (
    <div className={styles.info}>
      <Card className={styles.card}>
        <Typography variant="h4" className={styles.cardTitle}>
          {t('contact.reachTitle')}
        </Typography>
        <div className={styles.reachList}>
          {reachEntries.map(({ labelKey, value, Icon, color, bg }) => (
            <div key={labelKey} className={styles.reachItem}>
              <div className={styles.reachIcon} style={{ background: bg }}>
                <Icon size={16} color={color} />
              </div>
              <div>
                <Typography variant="caption">{t(labelKey)}</Typography>
                <Typography variant="body-sm" color="primary">{value}</Typography>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
