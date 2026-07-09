import { PrivacidadViewersClient } from './PrivacidadViewersClient';

export const dynamic = 'force-dynamic';
 
function extractDate(pdfPath: string): string {
  return pdfPath.match(/\d{4}-\d{2}-\d{2}/)?.[0] ?? '';
}

function extractSector(pdfPath: string): string {
  return pdfPath.split('/')[3] ?? '';
}

export function PrivacidadViewers() {
  const medicalPdf = process.env.NEXT_PUBLIC_PRIVACY_PDF_MEDICAL ?? '';
  const generalPdf = process.env.NEXT_PUBLIC_PRIVACY_PDF_GENERAL ?? '';

  return (
    <PrivacidadViewersClient
      medical={{ sector: extractSector(medicalPdf), date: extractDate(medicalPdf) }}
      general={{ sector: extractSector(generalPdf), date: extractDate(generalPdf) }}
    />
  );
}
