'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Typography } from '../Typography/Typography';
import styles from './BusinessHero.module.css';

export function BusinessHero() {
  const { t } = useTranslation();

  return (
    <section className={`section ${styles.hero}`}>
      <div className="container">
        <div className={styles.content}>
          <Tag value={t('forBusinesses.hero.badge')} severity="info" className={styles.badge} />
          <Typography variant="h1" className={styles.title}>
            {t('forBusinesses.hero.title')}
          </Typography>
          <Typography variant="body" color="secondary" className={styles.subtitle}>
            {t('forBusinesses.hero.subtitle')}
          </Typography>
          <div className={styles.actions}>
            <Link href="/#contact">
              <Button label={t('forBusinesses.hero.cta')} className={styles.primaryBtn} />
            </Link>
            <a href="#features" className={styles.secondaryLink}>
              {t('forBusinesses.hero.ctaSecondary')} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
