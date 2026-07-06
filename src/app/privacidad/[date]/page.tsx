import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar/Navbar';
import { PdfViewer } from '@/components/Legal/PdfViewer';

interface Props {
  params: { date: string };
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `Aviso de Privacidad — ${params.date}`,
    description: `Versión archivada del aviso de privacidad de Agnelo Software (${params.date}).`,
  };
}

export default function PrivacidadVersionPage({ params }: Props) {
  const pdfSrc = `/docs/privacy/aviso-privacidad-${params.date}.pdf`;

  return (
    <>
      <Navbar />
      <main>
        <PdfViewer pdfSrc={pdfSrc} />
      </main>
    </>
  );
}
