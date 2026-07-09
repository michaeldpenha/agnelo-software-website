'use client';

import Image from 'next/image';
import Link from 'next/link';
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
          <div className={styles.navGroup}>
            <nav className={styles.nav}>
              <Link href="/#services">{t('footer.nav.services')}</Link>
              <Link href="/#products">{t('footer.nav.products')}</Link>
              <Link href="/#about">{t('footer.nav.about')}</Link>
              <Link href="/#contact">{t('footer.nav.contact')}</Link>
            </nav>
            <nav className={styles.nav}>
              <Link href="/para-proveedores">{t('footer.nav.forProviders')}</Link>
              <Link href="/para-negocios">{t('footer.nav.forBusinesses')}</Link>
              <Link href="/privacidad">{t('footer.nav.privacy')}</Link>
            </nav>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>{t('footer.copyright', { year })}</p>
        </div>
      </div>
    </footer>
  );
}
