'use client';

import { useTranslation } from 'react-i18next';
import { Tag } from 'primereact/tag';
import {
  IconCalendarEvent,
  IconBrandWhatsapp,
  IconRefresh,
  IconDeviceMobile,
} from '@tabler/icons-react';
import { Typography } from '../Typography/Typography';
import styles from './Products.module.css';

const FEATURES = [
  { key: 'appointments', Icon: IconCalendarEvent, color: '#2563EB', bg: '#EFF6FF' },
  { key: 'reminders',    Icon: IconBrandWhatsapp,  color: '#10B981', bg: '#ECFDF5' },
  { key: 'rescheduling', Icon: IconRefresh,         color: '#0EA5E9', bg: '#F0F9FF' },
  { key: 'booking',      Icon: IconDeviceMobile,    color: '#6B7280', bg: '#F9FAFB' },
] as const;

export function Products() {
  const { t } = useTranslation();

  return (
    <section id="products" className={`section section-alt ${styles.products}`}>
      <div className="container">
        <div className="section-header">
          <Tag value={t('products.badge')} severity="success" className={styles.badge} />
          <Typography variant="h2">{t('products.title')}</Typography>
          <Typography variant="body" color="secondary">{t('products.subtitle')}</Typography>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.productMeta}>
              <Typography variant="h3">{t('products.timepow.name')}</Typography>
              <Tag value={t('products.timepow.status')} severity="success" />
            </div>
            <Typography variant="body" color="secondary">{t('products.timepow.desc')}</Typography>
          </div>

          <div className={styles.features}>
            {FEATURES.map(({ key, Icon, color, bg }) => (
              <div key={key} className={styles.feature}>
                <div className={styles.featureIcon} style={{ background: bg }}>
                  <Icon size={20} color={color} />
                </div>
                <div>
                  <Typography variant="h4">{t(`products.timepow.features.${key}.title`)}</Typography>
                  <Typography variant="caption" color="secondary">{t(`products.timepow.features.${key}.desc`)}</Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
