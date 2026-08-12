'use client';

import { useTranslation } from 'react-i18next';
import styles from './page.module.css';

export function EliminarDatosContent() {
  const { t } = useTranslation();
  const k = 'eliminarDatos';

  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>{t(`${k}.pageTitle`)}</h1>
          <p className={styles.subtitle}>{t(`${k}.pageSubtitle`)}</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.options}>

            <div className={styles.option}>
              <div className={styles.number}>1</div>
              <div className={styles.optionBody}>
                <h2 className={styles.optionTitle}>{t(`${k}.option1Title`)}</h2>
                <p className={styles.optionDesc}>
                  {t(`${k}.option1Desc`)}{' '}
                  <strong>{t(`${k}.option1Steps`)}</strong>.{' '}
                  {t(`${k}.option1Suffix`)}
                </p>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.option}>
              <div className={styles.number}>2</div>
              <div className={styles.optionBody}>
                <h2 className={styles.optionTitle}>{t(`${k}.option2Title`)}</h2>
                <p className={styles.optionDesc}>
                  {t(`${k}.option2Prefix`)}{' '}
                  <a href={`mailto:${t(`${k}.email`)}`} className={styles.email}>
                    {t(`${k}.email`)}
                  </a>{' '}
                  {t(`${k}.option2SubjectLabel`)}{' '}
                  <strong>&ldquo;{t(`${k}.option2Subject`)}&rdquo;</strong>{' '}
                  {t(`${k}.option2Suffix`)}
                </p>
              </div>
            </div>

          </div>

          <p className={styles.note}>{t(`${k}.note`)}</p>
        </div>
      </section>
    </main>
  );
}
