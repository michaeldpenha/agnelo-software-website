'use client';

import { useTranslation } from 'react-i18next';
import {
  IconCalendar,
  IconCalendarCheck,
  IconBell,
  IconClipboardList,
} from '@tabler/icons-react';
import { Typography } from '../Typography/Typography';
import styles from './BusinessFeatures.module.css';

const FEATURES = [
  { key: 'calendar',      Icon: IconCalendar,       color: '#2563EB', bg: '#EFF6FF' },
  { key: 'booking',       Icon: IconCalendarCheck,   color: '#10B981', bg: '#ECFDF5' },
  { key: 'notifications', Icon: IconBell,            color: '#F59E0B', bg: '#FFFBEB' },
  { key: 'auditLog',      Icon: IconClipboardList,   color: '#7C3AED', bg: '#F5F3FF' },
] as const;

export function BusinessFeatures() {
  const { t } = useTranslation();

  return (
    <section id="features" className={`section ${styles.features}`}>
      <div className="container">
        <div className="section-header">
          <Typography variant="h2">{t('forBusinesses.features.title')}</Typography>
          <Typography variant="body" color="secondary">{t('forBusinesses.features.subtitle')}</Typography>
        </div>

        <div className={styles.grid}>
          {FEATURES.map(({ key, Icon, color, bg }) => (
            <div key={key} className={styles.item}>
              <div className={styles.icon} style={{ background: bg }}>
                <Icon size={22} color={color} />
              </div>
              <div className={styles.text}>
                <Typography variant="h3">{t(`forBusinesses.features.items.${key}.title`)}</Typography>
                <Typography variant="body-sm" color="secondary">
                  {t(`forBusinesses.features.items.${key}.desc`)}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
