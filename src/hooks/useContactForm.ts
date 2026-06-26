'use client';

import { useState, useCallback } from 'react';
import type { FormData, FormStatus } from '../types/contact';

const EMPTY: FormData = {
  firstName: '', lastName: '', email: '',
  company: '', service: '', message: '',
};

export function useContactForm() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [status, setStatus] = useState<FormStatus>('idle');

  const set = useCallback((key: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
  }, []);

  const submit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setForm(EMPTY);
    } catch {
      setStatus('error');
    }
  }, [form]);

  return { form, status, set, submit };
}
