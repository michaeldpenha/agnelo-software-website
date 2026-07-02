'use client';

import { useTranslation } from 'react-i18next';
import {
  IconUsers,
  IconBrandWhatsapp,
  IconLayoutDashboard,
  IconCalendarX,
  IconShieldCheck,
  IconChartBar,
} from '@tabler/icons-react';
import { Typography } from '../Typography/Typography';
import styles from './BusinessBenefits.module.css';

const BENEFITS = [
  { key: 'multiProvider', Icon: IconUsers,             color: '#2563EB', bg: '#EFF6FF' },
  { key: 'whatsapp',      Icon: IconBrandWhatsapp,      color: '#10B981', bg: '#ECFDF5' },
  { key: 'dashboard',     Icon: IconLayoutDashboard,    color: '#0EA5E9', bg: '#F0F9FF' },
  { key: 'noShows',       Icon: IconCalendarX,          color: '#EF4444', bg: '#FEF2F2' },
  { key: 'consent',       Icon: IconShieldCheck,        color: '#7C3AED', bg: '#F5F3FF' },
  { key: 'reliability',   Icon: IconChartBar,           color: '#F59E0B', bg: '#FFFBEB' },
] as const;

export function BusinessBenefits() {
  const { t } = useTranslation();

  return (
    <section className={`section section-alt ${styles.benefits}`}>
      <div className="container">
        <div className="section-header">
          <Typography variant="h2">{t('forBusinesses.benefits.title')}</Typography>
          <Typography variant="body" color="secondary">{t('forBusinesses.benefits.subtitle')}</Typography>
        </div>

        <div className={styles.grid}>
          {BENEFITS.map(({ key, Icon, color, bg }) => (
            <div key={key} className={styles.card}>
              <div className={styles.icon} style={{ background: bg }}>
                <Icon size={22} color={color} />
              </div>
              <Typography variant="h4">{t(`forBusinesses.benefits.items.${key}.title`)}</Typography>
              <Typography variant="body-sm" color="secondary">
                {t(`forBusinesses.benefits.items.${key}.desc`)}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
