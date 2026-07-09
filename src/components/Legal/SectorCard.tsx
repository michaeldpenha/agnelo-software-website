'use client';

import Link from 'next/link';
import { Card } from 'primereact/card';
import { IconArrowRight } from '@tabler/icons-react';
import { Typography } from '../Typography/Typography';
import styles from './SectorCard.module.css';

export interface SectorCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  sector: string;
  date: string;
  viewLabel: string;
}

export function SectorCard({ icon, title, description, sector, date, viewLabel }: SectorCardProps) {
  return (
    <Card className={styles.card}>
      <div className={styles.content}>
        <div className={styles.iconWrap}>{icon}</div>
        <Typography variant="h3" color="primary">{title}</Typography>
        <Typography variant="body-sm" color="secondary">{description}</Typography>
        {sector && date && (
          <Link href={`/privacidad/${sector}/${date}`} className={styles.cta}>
            {viewLabel}
            <IconArrowRight size={15} />
          </Link>
        )}
      </div>
    </Card>
  );
}
