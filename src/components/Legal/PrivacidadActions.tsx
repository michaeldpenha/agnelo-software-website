'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { IconFileTypePdf } from '@tabler/icons-react';
import styles from './PrivacidadActions.module.css';

export function PrivacidadActions() {
  const { t } = useTranslation();

  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <Link href="/privacidad/2026-07-02" className={styles.btn}>
          <IconFileTypePdf size={16} />
          {t('privacidadPage.downloadBtn')}
        </Link>
      </div>
    </div>
  );
}
