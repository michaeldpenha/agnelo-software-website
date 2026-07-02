import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar/Navbar';
import { ForProviders } from '@/components/ForProviders/ForProviders';
import { SiteFooter } from '@/components/SiteFooter/SiteFooter';

export const metadata: Metadata = {
  title: 'Para proveedores — A Tiempo',
  description: 'Concéntrate en tus pacientes, no en la agenda. A tiempo gestiona tu calendario, envía recordatorios y permite que los pacientes agenden por WhatsApp.',
};

export default function ParaProveedoresPage() {
  return (
    <>
      <Navbar />
      <main>
        <ForProviders />
      </main>
      <SiteFooter />
    </>
  );
}
