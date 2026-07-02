'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Typography } from '../Typography/Typography';
import styles from './ProviderHero.module.css';

export function ProviderHero() {
  const { t } = useTranslation();

  return (
    <section className={`section ${styles.hero}`}>
      <div className="container">
        <div className={styles.content}>
          <Tag value={t('forProviders.hero.badge')} severity="success" className={styles.badge} />
          <Typography variant="h1" className={styles.title}>
            {t('forProviders.hero.title')}
          </Typography>
          <Typography variant="body" color="secondary" className={styles.subtitle}>
            {t('forProviders.hero.subtitle')}
          </Typography>
          <div className={styles.actions}>
            <Link href="/#contact">
              <Button label={t('forProviders.hero.cta')} className={styles.primaryBtn} />
            </Link>
            <a href="#how-it-works" className={styles.secondaryLink}>
              {t('forProviders.hero.ctaSecondary')} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
