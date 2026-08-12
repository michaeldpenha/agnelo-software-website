import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar/Navbar';
import { SiteFooter } from '@/components/SiteFooter/SiteFooter';
import styles from './page.module.css';

const MEDICAL_PDF = process.env.NEXT_PUBLIC_PRIVACY_PDF_MEDICAL
  ?? '/docs/privacy/medical/aviso-privacidad-2026-07-08.pdf';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Política de privacidad de Agnelo Software y la plataforma A Tiempo. Consulta cómo tratamos y protegemos tus datos personales conforme a la LFPDPPP.',
  openGraph: {
    type: 'website',
    title: 'Política de Privacidad — Agnelo Software',
    description:
      'Consulta el aviso de privacidad de Agnelo Software y la plataforma A Tiempo.',
    url: 'https://agnelosoftware.com/politica-de-privacidad',
  },
};

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className={styles.header}>
          <div className="container">
            <h1 className={styles.title}>Política de Privacidad</h1>
            <p className={styles.subtitle}>
              Agnelo Software · A Tiempo — Aviso de privacidad conforme a la LFPDPPP
            </p>
          </div>
        </div>
        <div className={styles.viewer}>
          <iframe
            src={MEDICAL_PDF}
            className={styles.frame}
            title="Política de Privacidad — Agnelo Software"
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
