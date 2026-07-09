'use client';

import { useTranslation } from 'react-i18next';
import { IconStethoscope, IconBriefcase } from '@tabler/icons-react';
import { Typography } from '../Typography/Typography';
import { SectorCard } from './SectorCard';
import styles from './PrivacidadViewers.module.css';

interface SectorInfo {
  sector: string;
  date: string;
}

interface Props {
  medical: SectorInfo;
  general: SectorInfo;
}

export function PrivacidadViewersClient({ medical, general }: Props) {
  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <Typography variant="h2" color="primary">{t('privacidadPage.pageTitle')}</Typography>
          <Typography variant="body" color="secondary">{t('privacidadPage.pageSubtitle')}</Typography>
        </div>
        <div className={styles.grid}>
          <SectorCard
            icon={<IconStethoscope size={32} color="var(--primary)" />}
            title={t('privacidadPage.sectorMedical')}
            description={t('privacidadPage.sectorMedicalDesc')}
            sector={medical.sector}
            date={medical.date}
            viewLabel={t('privacidadPage.viewNotice')}
          />
          <SectorCard
            icon={<IconBriefcase size={32} color="var(--primary)" />}
            title={t('privacidadPage.sectorGeneral')}
            description={t('privacidadPage.sectorGeneralDesc')}
            sector={general.sector}
            date={general.date}
            viewLabel={t('privacidadPage.viewNotice')}
          />
        </div>
      </div>
    </section>
  );
}
