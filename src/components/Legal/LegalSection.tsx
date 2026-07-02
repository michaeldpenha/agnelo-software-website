'use client';

import { Typography } from '../Typography/Typography';
import styles from './PrivacyNotice.module.css';

interface Props {
  title: string;
  children: React.ReactNode;
}

export function LegalSection({ title, children }: Props) {
  return (
    <div className={styles.section}>
      <Typography variant="h3">{title}</Typography>
      {children}
    </div>
  );
}
