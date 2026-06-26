'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Tag } from 'primereact/tag';
import { Typography } from '../Typography/Typography';
import { ServiceCard } from './ServiceCard';
import { SERVICES } from '../../constants/services';
import type { SanityService } from '../../types/sanity';
import styles from './Services.module.css';

interface Props {
  services?: SanityService[];
}

export function Services({ services }: Props) {
  const { t, i18n } = useTranslation();
  const lang = useMemo(
    () => (i18n.language.startsWith('es') ? 'es' : 'en'),
    [i18n.language],
  );

  const byKey = useMemo(
    () => Object.fromEntries((services ?? []).map((s) => [s.key, s])),
    [services],
  );

  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <div className="section-header">
          <Tag value={t('services.badge')} severity="info" className={styles.badge} />
          <Typography variant="h2">{t('services.title')}</Typography>
          <Typography variant="body" color="secondary">{t('services.subtitle')}</Typography>
        </div>
        <div className={styles.grid}>
          {SERVICES.map((service) => {
            const cms = byKey[service.key];
            return (
              <ServiceCard
                key={service.key}
                service={service}
                title={cms?.title?.[lang] || t(`services.${service.key}.title`)}
                desc={cms?.description?.[lang] || t(`services.${service.key}.desc`)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
