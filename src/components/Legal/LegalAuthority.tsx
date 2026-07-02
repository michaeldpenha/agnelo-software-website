'use client';

import { useTranslation } from 'react-i18next';
import { Typography } from '../Typography/Typography';
import styles from './PrivacyNotice.module.css';

export function LegalAuthority() {
  const { t } = useTranslation();
  const s = 'privacidad.shared';

  return (
    <>
      <Typography variant="body-sm" color="secondary">
        {t(`${s}.authorityDesc`)}{' '}
        <strong>{t(`${s}.authorityName`)}</strong>:
      </Typography>
      <ul className={styles.list}>
        <li>
          <Typography variant="body-sm" color="secondary">
            {t(`${s}.authorityWebLabel`)}{' '}
            <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer" className={styles.link}>
              www.inai.org.mx
            </a>
          </Typography>
        </li>
        <li>
          <Typography variant="body-sm" color="secondary">{t(`${s}.authorityPhone`)}</Typography>
        </li>
      </ul>
    </>
  );
}
