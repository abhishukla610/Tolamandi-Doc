import './global.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | TolaMandi Docs',
    default: 'TolaMandi Platform Documentation',
  },
  description:
    'Complete platform documentation for TolaMandi - APMC Weighing & Trading Management System',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
