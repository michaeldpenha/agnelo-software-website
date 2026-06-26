import { Navbar } from '@/components/Navbar/Navbar';
import { Hero } from '@/components/Hero/Hero';
import { Services } from '@/components/Services/Services';
import { Products } from '@/components/Products/Products';
import { About } from '@/components/About/About';
import { Contact } from '@/components/Contact/Contact';
import { SiteFooter } from '@/components/SiteFooter/SiteFooter';
import { getServices, getSiteSettings } from '@/lib/queries';

export default async function Home() {
  const [services, siteSettings] = await Promise.all([
    getServices(),
    getSiteSettings(),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services services={services} />
        <Products />
        <About siteSettings={siteSettings} />
        <Contact siteSettings={siteSettings} />
      </main>
      <SiteFooter />
    </>
  );
}
