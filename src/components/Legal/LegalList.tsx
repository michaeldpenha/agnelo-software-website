'use client';

import { Typography } from '../Typography/Typography';
import styles from './PrivacyNotice.module.css';

interface Props {
  items: string[];
  ordered?: boolean;
}

export function LegalList({ items, ordered = false }: Props) {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag className={styles.list}>
      {items.map((item, i) => (
        <li key={i}>
          <Typography variant="body-sm" color="secondary">{item}</Typography>
        </li>
      ))}
    </Tag>
  );
}
