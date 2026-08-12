import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar/Navbar';
import { SiteFooter } from '@/components/SiteFooter/SiteFooter';
import { EliminarDatosContent } from './EliminarDatosContent';
import es from '@/i18n/es.json';

export const metadata: Metadata = {
  title: es.eliminarDatos.pageTitle,
  description: es.eliminarDatos.pageSubtitle,
  openGraph: {
    title: `${es.eliminarDatos.pageTitle} — A Tiempo · Agnelo Software`,
    description: es.eliminarDatos.pageSubtitle,
    url: 'https://agnelosoftware.com/eliminar-datos',
  },
};

export default function EliminarDatosPage() {
  return (
    <>
      <Navbar />
      <EliminarDatosContent />
      <SiteFooter />
    </>
  );
}
