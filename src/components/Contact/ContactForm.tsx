'use client';

import { useCallback, useMemo } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Typography } from '../Typography/Typography';
import { useContactForm } from '../../hooks/useContactForm';
import styles from './ContactForm.module.css';

export function ContactForm() {
  const { t } = useTranslation();
  const { form, status, set, submit } = useContactForm();

  const serviceOptions = useMemo(
    () => (t('contact.services', { returnObjects: true }) as string[]).map((s) => ({ label: s, value: s })),
    [t],
  );

  const submitLabel = useMemo(
    () => (status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')),
    [status, t],
  );

  const handleFirstName  = useCallback((e: React.ChangeEvent<HTMLInputElement>)     => set('firstName', e.target.value), [set]);
  const handleLastName   = useCallback((e: React.ChangeEvent<HTMLInputElement>)     => set('lastName',  e.target.value), [set]);
  const handleEmail      = useCallback((e: React.ChangeEvent<HTMLInputElement>)     => set('email',     e.target.value), [set]);
  const handleCompany    = useCallback((e: React.ChangeEvent<HTMLInputElement>)     => set('company',   e.target.value), [set]);
  const handleMessage    = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>)  => set('message',   e.target.value), [set]);
  const handleService    = useCallback((e: { value: string })                       => set('service',   e.value),        [set]);

  return (
    <Card className={styles.card}>
      <form onSubmit={submit} className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label>{t('contact.form.firstName')}</label>
            <InputText required value={form.firstName} onChange={handleFirstName} className="w-full" />
          </div>
          <div className={styles.field}>
            <label>{t('contact.form.lastName')}</label>
            <InputText required value={form.lastName} onChange={handleLastName} className="w-full" />
          </div>
        </div>

        <div className={styles.field}>
          <label>{t('contact.form.email')}</label>
          <InputText type="email" required value={form.email} onChange={handleEmail} className="w-full" />
        </div>

        <div className={styles.field}>
          <label>{t('contact.form.company')}</label>
          <InputText value={form.company} onChange={handleCompany} className="w-full" />
        </div>

        <div className={styles.field}>
          <label>{t('contact.form.service')}</label>
          <Dropdown
            required
            value={form.service}
            options={serviceOptions}
            onChange={handleService}
            placeholder={t('contact.form.servicePlaceholder')}
            className="w-full"
          />
        </div>

        <div className={styles.field}>
          <label>{t('contact.form.message')}</label>
          <InputTextarea
            required
            rows={4}
            placeholder={t('contact.form.messagePlaceholder')}
            value={form.message}
            onChange={handleMessage}
            className="w-full"
          />
        </div>

        {status === 'success' && (
          <Typography variant="body-sm" className={styles.success}>
            {t('contact.form.success')}
          </Typography>
        )}
        {status === 'error' && (
          <Typography variant="body-sm" className={styles.error}>
            {t('contact.form.error')}
          </Typography>
        )}

        <p className={styles.privacyNote}>
          {t('contact.form.privacyNote')}{' '}
          <Link href="/privacidad">{t('contact.form.privacyLink')}</Link>.
        </p>

        <Button
          type="submit"
          label={submitLabel}
          disabled={status === 'sending'}
          loading={status === 'sending'}
          className={styles.submit}
        />
      </form>
    </Card>
  );
}
