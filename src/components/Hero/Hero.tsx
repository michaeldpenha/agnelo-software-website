'use client';

import { useTranslation } from 'react-i18next';
import { HeroContent } from './HeroContent';
import { HeroServiceCard } from './HeroServiceCard';
import { SERVICE_CARDS } from '../../constants/hero';
import styles from './Hero.module.css';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className={`section section-alt ${styles.hero}`}>
      <div className="container">
        <div className={styles.grid}>
          <HeroContent />
          <div className={styles.cards}>
            {SERVICE_CARDS.map((card) => (
              <HeroServiceCard
                key={card.key}
                card={card}
                title={t(`hero.services.${card.key}Title`)}
                stack={t(`hero.services.${card.key}Stack`)}
                popularLabel={card.key === 'web' ? t('hero.services.webBadge') : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
