import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar/Navbar';
import { SiteFooter } from '@/components/SiteFooter/SiteFooter';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Eliminar mis datos',
  description:
    'Solicita la eliminación de tus datos personales de la plataforma A Tiempo de Agnelo Software.',
  openGraph: {
    title: 'Eliminar mis datos — A Tiempo · Agnelo Software',
    description:
      'Instrucciones para solicitar la eliminación de tus datos personales de la plataforma A Tiempo.',
    url: 'https://agnelosoftware.com/eliminar-datos',
  },
};

export default function EliminarDatosPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.title}>Eliminar mis datos</h1>
            <p className={styles.subtitle}>
              Puedes solicitar la eliminación de tus datos personales de la plataforma A Tiempo
              a través de cualquiera de las siguientes opciones.
            </p>
          </div>
        </section>

        <section className={styles.content}>
          <div className="container">
            <div className={styles.options}>

              <div className={styles.option}>
                <div className={styles.number}>1</div>
                <div className={styles.optionBody}>
                  <h2 className={styles.optionTitle}>Desde la aplicación</h2>
                  <p className={styles.optionDesc}>
                    Inicia sesión en tu cuenta de A Tiempo, ve a{' '}
                    <strong>Configuración → Cuenta → Eliminar cuenta</strong>.
                    Tus datos serán eliminados de forma permanente en un plazo de 30 días.
                  </p>
                </div>
              </div>

              <div className={styles.divider} />

              <div className={styles.option}>
                <div className={styles.number}>2</div>
                <div className={styles.optionBody}>
                  <h2 className={styles.optionTitle}>Por correo electrónico</h2>
                  <p className={styles.optionDesc}>
                    Envía un correo a{' '}
                    <a href="mailto:privacidad@agnelosoftware.com" className={styles.email}>
                      privacidad@agnelosoftware.com
                    </a>{' '}
                    con el asunto <strong>"Solicitud de eliminación de datos"</strong> e incluye
                    el correo electrónico con el que te registraste. Procesaremos tu solicitud
                    en un plazo máximo de 20 días hábiles conforme a la LFPDPPP.
                  </p>
                </div>
              </div>

            </div>

            <p className={styles.note}>
              Una vez eliminados, tus datos no podrán ser recuperados. Si tienes citas
              pendientes, te recomendamos cancelarlas antes de solicitar la eliminación.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
