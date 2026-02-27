import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import { i18nUI, isValidLanguage } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export default async function LanguageLayout(props: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;

  if (!isValidLanguage(params.lang)) {
    notFound();
  }

  const content = params.lang === 'gu'
    ? <div className="font-gujarati">{props.children}</div>
    : props.children;

  return (
    <RootProvider i18n={i18nUI.provider(params.lang)}>
      {content}
    </RootProvider>
  );
}
