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

export function PrivacyNotice() {
  const { t } = useTranslation();
  const p = 'privacidad.atempo';
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

        <div className={styles.warning}>
          <Typography variant="body-sm">{t(`${p}.warning`)}</Typography>
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
              <Typography variant="h4">{t(`${p}.s2.sub1Title`)}</Typography>
              <LegalList items={['sub1_0','sub1_1','sub1_2'].map((k) => t(`${p}.s2.${k}`))} />
              <Typography variant="h4">{t(`${p}.s2.sub2Title`)}</Typography>
              <LegalList items={['sub2_0','sub2_1','sub2_2'].map((k) => t(`${p}.s2.${k}`))} />
              <Typography variant="h4">{t(`${p}.s2.sub3Title`)}</Typography>
              <LegalList items={['sub3_0','sub3_1','sub3_2','sub3_3'].map((k) => t(`${p}.s2.${k}`))} />
              <Typography variant="body-sm" color="secondary">{t(`${s}.noSensitive`)}</Typography>
            </LegalSection>
          </Card>

          <Card className={styles.card}>
            <LegalSection title={t(`${p}.s3.title`)}>
              <Typography variant="h4">{t(`${p}.s3.primaryTitle`)}</Typography>
              <LegalList ordered items={['primary0','primary1','primary2','primary3','primary4','primary5'].map((k) => t(`${p}.s3.${k}`))} />
              <Typography variant="h4">{t(`${p}.s3.secondaryTitle`)}</Typography>
              <LegalList ordered items={['secondary0','secondary1','secondary2'].map((k) => t(`${p}.s3.${k}`))} />
              <Typography variant="body-sm" color="secondary">{t(`${p}.s3.optOut`)}</Typography>
            </LegalSection>
          </Card>

          <Card className={styles.card}>
            <LegalSection title={t(`${p}.s4.title`)}>
              <LegalTransfersTable
                intro={t(`${p}.s4.intro`)}
                rows={[
                  { name: 'MongoDB Atlas',        purpose: t(`${p}.s4.mongodbPurpose`) },
                  { name: 'Twilio Inc.',           purpose: t(`${p}.s4.twilioPurpose`) },
                  { name: 'Render Services, Inc.', purpose: t(`${p}.s4.renderPurpose`) },
                ]}
              />
            </LegalSection>
          </Card>

          <Card className={styles.card}>
            <LegalSection title={t(`${p}.s5.title`)}>
              <LegalArcoBlock />
              <Typography variant="h4">{t(`${p}.s5.procedureTitle`)}</Typography>
              <Typography variant="body-sm" color="secondary">{t(`${p}.s5.procedureIntro`)}</Typography>
              <LegalList ordered items={['proc0','proc1','proc2','proc3'].map((k) => t(`${p}.s5.${k}`))} />
              <Typography variant="body-sm" color="secondary">
                <strong>{t(`${p}.s5.responseTime`)}</strong>
              </Typography>
            </LegalSection>
          </Card>

          <Card className={styles.card}>
            <LegalSection title={t(`${p}.s6.title`)}>
              <LegalList items={['item0','item1','item2'].map((k) => t(`${p}.s6.${k}`))} />
            </LegalSection>
          </Card>

          <Card className={styles.card}>
            <LegalSection title={t(`${p}.s7.title`)}>
              <LegalList items={['item0','item1','item2'].map((k) => t(`${p}.s7.${k}`))} />
              <Typography variant="body-sm" color="secondary">
                <strong>{t(`${p}.s7.noCookies`)}</strong>
              </Typography>
            </LegalSection>
          </Card>

          <Card className={styles.card}>
            <LegalSection title={t(`${p}.s8.title`)}>
              <LegalList items={['item0','item1','item2','item3','item4'].map((k) => t(`${p}.s8.${k}`))} />
            </LegalSection>
          </Card>

          <Card className={styles.card}>
            <LegalSection title={t(`${p}.s9.title`)}>
              <Typography variant="body-sm" color="secondary">{t(`${p}.s9.p1`)}</Typography>
              <Typography variant="body-sm" color="secondary">
                <strong>{t(`${p}.s9.p2Bold`)}</strong> {t(`${p}.s9.p2Text`)}
              </Typography>
              <Typography variant="body-sm" color="secondary">
                <strong>{t(`${p}.s9.p3Bold`)}</strong> {t(`${p}.s9.p3Text`)}
              </Typography>
            </LegalSection>
          </Card>

          <Card className={styles.card}>
            <LegalSection title={t(`${p}.s10.title`)}>
              <Typography variant="body-sm" color="secondary">{t(`${p}.s10.desc`)}</Typography>
            </LegalSection>
          </Card>

          <Card className={styles.card}>
            <LegalSection title={t(`${p}.s11.title`)}>
              <LegalAuthority />
            </LegalSection>
          </Card>

        </div>

        <LegalDocFooter />

      </div>
    </div>
  );
}
