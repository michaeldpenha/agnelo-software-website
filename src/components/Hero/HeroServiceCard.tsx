'use client';

import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Typography } from '../Typography/Typography';
import type { ServiceCard } from '../../constants/hero';
import styles from './HeroServiceCard.module.css';

interface Props {
  card: ServiceCard;
  title: string;
  stack: string;
  popularLabel?: string;
}

export function HeroServiceCard({ card, title, stack, popularLabel }: Props) {
  const { Icon, color, bg } = card;
  return (
    <Card className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.iconWrap} style={{ background: bg }}>
          <Icon size={20} color={color} />
        </div>
        <div className={styles.text}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="caption">{stack}</Typography>
        </div>
        {popularLabel && (
          <Tag value={popularLabel} severity="info" className={styles.popularTag} />
        )}
      </div>
    </Card>
  );
}
