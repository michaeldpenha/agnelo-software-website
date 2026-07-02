'use client';

import { useTranslation } from 'react-i18next';
import { Tag } from 'primereact/tag';
import {
  IconBrandWhatsapp,
  IconDeviceMobile,
  IconCalendar,
  IconShieldCheck,
  IconTrash,
  IconBriefcase,
} from '@tabler/icons-react';
import { Typography } from '../Typography/Typography';
import styles from './DataPrivacy.module.css';

const ITEMS = [
  { key: 'whatsapp',     Icon: IconBrandWhatsapp, color: '#10B981', bg: '#ECFDF5' },
  { key: 'mobile',       Icon: IconDeviceMobile,  color: '#2563EB', bg: '#EFF6FF' },
  { key: 'appointments', Icon: IconCalendar,       color: '#0EA5E9', bg: '#F0F9FF' },
  { key: 'consent',      Icon: IconShieldCheck,    color: '#7C3AED', bg: '#F5F3FF' },
  { key: 'deletion',     Icon: IconTrash,          color: '#EF4444', bg: '#FEF2F2' },
  { key: 'business',     Icon: IconBriefcase,      color: '#6B7280', bg: '#F9FAFB' },
] as const;

interface Props {
  ns: 'forProviders' | 'forBusinesses';
}

export function DataPrivacy({ ns }: Props) {
  const { t } = useTranslation();

  return (
    <section className={`section ${styles.wrapper}`}>
      <div className="container">
        <div className="section-header">
          <Tag value={t(`${ns}.dataPrivacy.badge`)} severity="warning" className={styles.badge} />
          <Typography variant="h2">{t(`${ns}.dataPrivacy.title`)}</Typography>
          <Typography variant="body" color="secondary">{t(`${ns}.dataPrivacy.subtitle`)}</Typography>
        </div>

        <div className={styles.grid}>
          {ITEMS.map(({ key, Icon, color, bg }) => (
            <div key={key} className={styles.item}>
              <div className={styles.icon} style={{ background: bg }}>
                <Icon size={20} color={color} />
              </div>
              <div className={styles.text}>
                <Typography variant="h4">{t(`${ns}.dataPrivacy.items.${key}.title`)}</Typography>
                <Typography variant="body-sm" color="secondary">
                  {t(`${ns}.dataPrivacy.items.${key}.desc`)}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
