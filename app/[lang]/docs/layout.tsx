import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';
import { i18n } from '@/lib/i18n';

export default async function Layout(props: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;

  return (
    <DocsLayout
      tree={source.getPageTree(params.lang)}
      i18n={i18n}
      nav={{
        title: (
          <span className="font-bold">
            TolaMandi Docs
          </span>
        ),
      }}
      sidebar={{
        defaultOpenLevel: 1,
      }}
    >
      {props.children}
    </DocsLayout>
  );
}
