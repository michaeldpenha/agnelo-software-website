import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar/Navbar';
import { PrivacidadViewers } from '@/components/Legal/PrivacidadViewers';
import { SiteFooter } from '@/components/SiteFooter/SiteFooter';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad',
  description: 'Aviso de privacidad de Agnelo Software y la plataforma A Tiempo.',
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main>
        <PrivacidadViewers />
      </main>
      <SiteFooter />
    </>
  );
}
