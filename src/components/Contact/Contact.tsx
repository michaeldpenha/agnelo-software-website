'use client';

import { useTranslation } from 'react-i18next';
import { Tag } from 'primereact/tag';
import { Typography } from '../Typography/Typography';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import type { SanitySiteSettings } from '../../types/sanity';
import styles from './Contact.module.css';

interface Props {
  siteSettings?: SanitySiteSettings | null;
}

export function Contact({ siteSettings }: Props) {
  const { t } = useTranslation();

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className="section-header">
          <Tag value={t('contact.badge')} severity="info" className={styles.badge} />
          <Typography variant="h2">{t('contact.title')}</Typography>
          <Typography variant="body" color="secondary">{t('contact.subtitle')}</Typography>
        </div>
        <div className={styles.grid}>
          <ContactForm />
          <ContactInfo siteSettings={siteSettings} />
        </div>
      </div>
    </section>
  );
}
