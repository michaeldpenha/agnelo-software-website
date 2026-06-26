'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { IconMenu2, IconX } from '@tabler/icons-react';
import styles from './Navbar.module.css';

export function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <a href="#hero" className={styles.brand}>
          <Image src="/logo-nav.svg" alt="Agnelo Software" width={200} height={32} priority />
        </a>

        <ul className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          <li><a href="#services" onClick={() => setOpen(false)}>{t('nav.services')}</a></li>
          <li><a href="#products" onClick={() => setOpen(false)}>{t('nav.products')}</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>{t('nav.about')}</a></li>
          <li>
            <a href="#contact" className={styles.cta} onClick={() => setOpen(false)}>
              {t('nav.contact')}
            </a>
          </li>
        </ul>

        <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </nav>
    </header>
  );
}
