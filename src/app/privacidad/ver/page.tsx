import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar/Navbar';
import { PdfViewer } from '@/components/Legal/PdfViewer';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad — PDF',
  description: 'Versión en PDF del aviso de privacidad de Agnelo Software.',
};

export default function PrivacidadVerPage() {
  return (
    <>
      <Navbar />
      <main>
        <PdfViewer />
      </main>
    </>
  );
}
