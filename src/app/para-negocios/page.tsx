import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar/Navbar';
import { ForBusinesses } from '@/components/ForBusinesses/ForBusinesses';
import { SiteFooter } from '@/components/SiteFooter/SiteFooter';

export const metadata: Metadata = {
  title: 'Para negocios — A Tiempo',
  description: 'Administra tu clínica sin el caos. A tiempo te da un tablero único para gestionar cada proveedor, cita e interacción con pacientes — todo impulsado por WhatsApp.',
};

export default function ParaNegociosPage() {
  return (
    <>
      <Navbar />
      <main>
        <ForBusinesses />
      </main>
      <SiteFooter />
    </>
  );
}
