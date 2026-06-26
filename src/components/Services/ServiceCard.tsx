'use client';

import { Card } from 'primereact/card';
import { Typography } from '../Typography/Typography';
import type { ServiceItem } from '../../constants/services';
import styles from './ServiceCard.module.css';

interface Props {
  service: ServiceItem;
  title: string;
  desc: string;
}

export function ServiceCard({ service, title, desc }: Props) {
  const { Icon, color, bg } = service;
  return (
    <Card className={styles.card}>
      <div className={styles.iconWrap} style={{ background: bg }}>
        <Icon size={22} color={color} />
      </div>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body-sm" color="secondary">{desc}</Typography>
    </Card>
  );
}
