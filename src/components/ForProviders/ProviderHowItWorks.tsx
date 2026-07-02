'use client';

import { useTranslation } from 'react-i18next';
import { Typography } from '../Typography/Typography';
import styles from './ProviderHowItWorks.module.css';

const STEPS = ['1', '2', '3'] as const;

export function ProviderHowItWorks() {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className={`section ${styles.howItWorks}`}>
      <div className="container">
        <div className="section-header">
          <Typography variant="h2">{t('forProviders.howItWorks.title')}</Typography>
          <Typography variant="body" color="secondary">{t('forProviders.howItWorks.subtitle')}</Typography>
        </div>

        <div className={styles.steps}>
          {STEPS.map((step) => (
            <div key={step} className={styles.step}>
              <div className={styles.number}>{step}</div>
              <div className={styles.text}>
                <Typography variant="h3">{t(`forProviders.howItWorks.steps.${step}.title`)}</Typography>
                <Typography variant="body-sm" color="secondary">
                  {t(`forProviders.howItWorks.steps.${step}.desc`)}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
