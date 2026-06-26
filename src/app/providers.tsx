'use client';

import { PrimeReactProvider } from 'primereact/api';
import '../lib/i18n';

export function Providers({ children }: { children: React.ReactNode }) {
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
}
