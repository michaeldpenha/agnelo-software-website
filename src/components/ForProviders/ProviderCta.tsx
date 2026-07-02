'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';
import { Typography } from '../Typography/Typography';
import styles from './ProviderCta.module.css';

export function ProviderCta() {
  const { t } = useTranslation();

  return (
    <section className={`section ${styles.cta}`}>
      <div className="container">
        <div className={styles.content}>
          <Typography variant="h2" className={styles.title}>
            {t('forProviders.cta.title')}
          </Typography>
          <Typography variant="body" color="secondary" className={styles.subtitle}>
            {t('forProviders.cta.subtitle')}
          </Typography>
          <Link href="/#contact">
            <Button label={t('forProviders.cta.button')} className={styles.btn} />
          </Link>
        </div>
      </div>
    </section>
  );
}
