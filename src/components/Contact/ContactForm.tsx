'use client';

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

  const serviceOptions = (t('contact.services', { returnObjects: true }) as string[]).map(
    (s) => ({ label: s, value: s }),
  );

  return (
    <Card className={styles.card}>
      <form onSubmit={submit} className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label>{t('contact.form.firstName')}</label>
            <InputText
              required
              value={form.firstName}
              onChange={(e) => set('firstName', e.target.value)}
              className="w-full"
            />
          </div>
          <div className={styles.field}>
            <label>{t('contact.form.lastName')}</label>
            <InputText
              required
              value={form.lastName}
              onChange={(e) => set('lastName', e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        <div className={styles.field}>
          <label>{t('contact.form.email')}</label>
          <InputText
            type="email"
            required
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            className="w-full"
          />
        </div>

        <div className={styles.field}>
          <label>{t('contact.form.company')}</label>
          <InputText
            value={form.company}
            onChange={(e) => set('company', e.target.value)}
            className="w-full"
          />
        </div>

        <div className={styles.field}>
          <label>{t('contact.form.service')}</label>
          <Dropdown
            required
            value={form.service}
            options={serviceOptions}
            onChange={(e) => set('service', e.value)}
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
            onChange={(e) => set('message', e.target.value)}
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

        <Button
          type="submit"
          label={status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
          disabled={status === 'sending'}
          loading={status === 'sending'}
          className={styles.submit}
        />
      </form>
    </Card>
  );
}
