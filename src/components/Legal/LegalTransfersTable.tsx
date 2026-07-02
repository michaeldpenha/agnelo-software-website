'use client';

import { useTranslation } from 'react-i18next';
import { Typography } from '../Typography/Typography';
import styles from './PrivacyNotice.module.css';

export interface TransferRow {
  name: string;
  purpose: string;
}

interface Props {
  intro: string;
  rows: TransferRow[];
}

export function LegalTransfersTable({ intro, rows }: Props) {
  const { t } = useTranslation();
  const s = 'privacidad.shared';

  return (
    <>
      <Typography variant="body-sm" color="secondary">{intro}</Typography>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th><Typography variant="h4">{t(`${s}.tableThird`)}</Typography></th>
              <th><Typography variant="h4">{t(`${s}.tableCountry`)}</Typography></th>
              <th><Typography variant="h4">{t(`${s}.tablePurpose`)}</Typography></th>
              <th><Typography variant="h4">{t(`${s}.tableLegal`)}</Typography></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td><Typography variant="body-sm" color="secondary"><strong>{row.name}</strong></Typography></td>
                <td><Typography variant="body-sm" color="secondary">{t(`${s}.usa`)}</Typography></td>
                <td><Typography variant="body-sm" color="secondary">{row.purpose}</Typography></td>
                <td><Typography variant="body-sm" color="secondary">{t(`${s}.necessary`)}</Typography></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Typography variant="body-sm" color="secondary">{t(`${s}.noSell`)}</Typography>
    </>
  );
}
