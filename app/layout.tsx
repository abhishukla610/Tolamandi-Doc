import './global.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Krishiv Docs',
    default: 'Krishiv Platform Documentation',
  },
  description:
    'Complete platform documentation for Krishiv - APMC Weighing & Trading Management System',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
