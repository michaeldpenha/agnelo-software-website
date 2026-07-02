'use client';

import { useTranslation } from 'react-i18next';
import { Tag } from 'primereact/tag';
import { Card } from 'primereact/card';
import { Typography } from '../Typography/Typography';
import { LegalSection } from './LegalSection';
import { LegalList } from './LegalList';
import { LegalArcoBlock } from './LegalArcoBlock';
import { LegalTransfersTable } from './LegalTransfersTable';
import { LegalAuthority } from './LegalAuthority';
import { LegalDocFooter } from './LegalDocFooter';
import styles from './PrivacyNotice.module.css';

export function AgneloPrivacyNotice() {
  const { t } = useTranslation();
  const p = 'privacidad.agnelo';
  const s = 'privacidad.shared';

  return (
    <div className={`section ${styles.wrapper}`}>
      <div className="container">

        <div className="section-header">
          <Tag value={t(`${p}.badge`)} severity="info" />
          <Typography variant="h2">{t(`${p}.title`)}</Typography>
          <Typography variant="body" color="secondary">{t(`${p}.subtitle`)}</Typography>
          <Typography variant="body-sm" color="secondary">{t(`${p}.note`)}</Typography>
        </div>

        <div className={styles.sections}>

          <Card className={styles.card}>
            <LegalSection title={t(`${p}.s1.title`)}>
              <Typography variant="body-sm" color="secondary">
                <strong>{t(`${p}.s1.company`)}</strong><br />
                <strong>{t(`${s}.rfcLabel`)}</strong> {t(`${p}.s1.rfc`)}<br />
                <strong>{t(`${s}.addressLabel`)}</strong> {t(`${p}.s1.address`)}<br />
                <strong>{t(`${s}.privacyEmailLabel`)}</strong> {t(`${p}.s1.privacyEmail`)}<br />
                <strong>{t(`${s}.websiteLabel`)}</strong> {t(`${p}.s1.website`)}
              </Typography>
              <Typography variant="body-sm" color="secondary">{t(`${p}.s1.desc`)}</Typography>
            </LegalSection>
          </Card>

          <Card className={styles.card}>
            <LegalSection title={t(`${p}.s2.title`)}>
              <Typography variant="body-sm" color="secondary">{t(`${p}.s2.intro`)}</Typography>
              <LegalList items={['item0','item1','item2','item3','item4'].map((k) => t(`${p}.s2.${k}`))} />
              <Typography variant="body-sm" color="secondary">{t(`${s}.noSensitive`)}</Typography>
            </LegalSection>
          </Card>

          <Card className={styles.card}>
            <LegalSection title={t(`${p}.s3.title`)}>
              <Typography variant="h4">{t(`${p}.s3.primaryTitle`)}</Typography>
              <LegalList ordered items={['primary0','primary1','primary2'].map((k) => t(`${p}.s3.${k}`))} />
              <Typography variant="h4">{t(`${p}.s3.secondaryTitle`)}</Typography>
              <LegalList ordered items={[t(`${p}.s3.secondary0`)]} />
              <Typography variant="body-sm" color="secondary">{t(`${p}.s3.optOut`)}</Typography>
            </LegalSection>
          </Card>

          <Card className={styles.card}>
            <LegalSection title={t(`${p}.s4.title`)}>
              <LegalTransfersTable
                intro={t(`${p}.s4.intro`)}
                rows={[{ name: 'Resend Inc.', purpose: t(`${p}.s4.resendPurpose`) }]}
              />
            </LegalSection>
          </Card>

          <Card className={styles.card}>
            <LegalSection title={t(`${p}.s5.title`)}>
              <LegalArcoBlock />
              <Typography variant="body-sm" color="secondary">{t(`${p}.s5.desc`)}</Typography>
            </LegalSection>
          </Card>

          <Card className={styles.card}>
            <LegalSection title={t(`${p}.s6.title`)}>
              <Typography variant="body-sm" color="secondary">{t(`${p}.s6.desc`)}</Typography>
            </LegalSection>
          </Card>

          <Card className={styles.card}>
            <LegalSection title={t(`${p}.s7.title`)}>
              <Typography variant="body-sm" color="secondary">{t(`${p}.s7.desc`)}</Typography>
            </LegalSection>
          </Card>

          <Card className={styles.card}>
            <LegalSection title={t(`${p}.s8.title`)}>
              <LegalAuthority />
            </LegalSection>
          </Card>

        </div>

        <LegalDocFooter />

      </div>
    </div>
  );
}
