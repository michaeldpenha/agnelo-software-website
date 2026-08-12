import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://agnelosoftware.com'),
  title: { default: 'Agnelo Software', template: '%s | Agnelo Software' },
  description: 'Custom web apps, mobile solutions, and scalable systems — designed for businesses that need technology that actually works.',
  keywords: ['software development', 'web apps', 'mobile apps', 'APIs', 'cloud', 'DevOps'],
  authors: [{ name: 'Agnelo Software' }],
  openGraph: {
    type: 'website',
    siteName: 'Agnelo Software',
    title: 'Agnelo Software',
    description: 'We build software that solves real problems.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
