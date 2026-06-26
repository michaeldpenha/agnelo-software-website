'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from './SiteFooter.module.css';

export function SiteFooter() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image src="/logo-nav.svg" alt="Agnelo Software" width={200} height={32} />
            <p className={styles.tagline}>{t('footer.tagline')}</p>
          </div>
          <nav className={styles.nav}>
            <a href="#services">{t('footer.nav.services')}</a>
            <a href="#products">{t('footer.nav.products')}</a>
            <a href="#about">{t('footer.nav.about')}</a>
            <a href="#contact">{t('footer.nav.contact')}</a>
          </nav>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>{t('footer.copyright', { year })}</p>
        </div>
      </div>
    </footer>
  );
}
