'use client';

import { useTranslation } from 'react-i18next';
import { Tag } from 'primereact/tag';
import {
  IconCalendarCheck,
  IconBrandWhatsapp,
  IconLayoutGrid,
  IconChartBar,
  IconBuildings,
  IconDeviceMobileOff,
} from '@tabler/icons-react';
import { Typography } from '../Typography/Typography';
import styles from './ProviderBenefits.module.css';

const BENEFITS = [
  { key: 'booking',     Icon: IconCalendarCheck,    color: '#2563EB', bg: '#EFF6FF' },
  { key: 'reminders',   Icon: IconBrandWhatsapp,     color: '#10B981', bg: '#ECFDF5' },
  { key: 'schedule',    Icon: IconLayoutGrid,         color: '#0EA5E9', bg: '#F0F9FF' },
  { key: 'reliability', Icon: IconChartBar,           color: '#7C3AED', bg: '#F5F3FF' },
  { key: 'multiClinic', Icon: IconBuildings,          color: '#F59E0B', bg: '#FFFBEB' },
  { key: 'noApp',       Icon: IconDeviceMobileOff,    color: '#6B7280', bg: '#F9FAFB' },
] as const;

export function ProviderBenefits() {
  const { t } = useTranslation();

  return (
    <section className={`section section-alt ${styles.benefits}`}>
      <div className="container">
        <div className="section-header">
          <Typography variant="h2">{t('forProviders.benefits.title')}</Typography>
          <Typography variant="body" color="secondary">{t('forProviders.benefits.subtitle')}</Typography>
        </div>

        <div className={styles.grid}>
          {BENEFITS.map(({ key, Icon, color, bg }) => (
            <div key={key} className={styles.card}>
              <div className={styles.icon} style={{ background: bg }}>
                <Icon size={22} color={color} />
              </div>
              <Typography variant="h4">{t(`forProviders.benefits.items.${key}.title`)}</Typography>
              <Typography variant="body-sm" color="secondary">
                {t(`forProviders.benefits.items.${key}.desc`)}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
