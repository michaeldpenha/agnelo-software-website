import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar/Navbar';
import { PdfViewer } from '@/components/Legal/PdfViewer';
import en from '@/i18n/en.json';
import es from '@/i18n/es.json';

interface Props {
  params: { sector: string; date: string };
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `${es.privacidadPage.pageTitle} — ${params.date}`,
    description: es.privacidadPage.pageSubtitle,
    alternates: {
      languages: {
        'en': `${en.privacidadPage.pageTitle} — ${params.date}`,
      },
    },
  };
}

export default function PrivacidadVersionPage({ params }: Props) {
  const pdfSrc = `/docs/privacy/${params.sector}/aviso-privacidad-${params.date}.pdf`;

  return (
    <>
      <Navbar />
      <main>
        <PdfViewer pdfSrc={pdfSrc} />
      </main>
    </>
  );
}
