'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { IconArrowLeft, IconExternalLink } from '@tabler/icons-react';
import styles from './PdfViewer.module.css';

const LATEST_PDF = '/docs/privacy/aviso-privacidad-2026-07-02.pdf';

interface Props {
  pdfSrc?: string;
}

export function PdfViewer({ pdfSrc = LATEST_PDF }: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.bar}>
        <Link href="/privacidad" className={styles.back}>
          <IconArrowLeft size={15} />
          {t('privacidadPage.viewerBack')}
        </Link>
        <a
          href={pdfSrc}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.open}
        >
          {t('privacidadPage.viewerOpen')}
          <IconExternalLink size={14} />
        </a>
      </div>
      <iframe
        src={pdfSrc}
        className={styles.frame}
        title="Aviso de Privacidad"
      />
    </div>
  );
}
