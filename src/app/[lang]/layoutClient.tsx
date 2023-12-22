'use client';

import { ReactNode } from 'react';
import { DehydratedState, HydrationBoundary } from '@tanstack/react-query';

import {
  Locales,
  Translation,
  loadedLocales,
  TypesafeI18n,
  i18nAsync,
} from '@i18n';

import { QueryProvider, InitialStateProvider } from '@providers';

import { PageContent } from '@layouts';

interface Props {
  children: ReactNode;
  locale: Locales;
  translation: Translation;
  dehydratedState: DehydratedState;
}

export default function ClientComponent({
  children,
  locale,
  translation,
  dehydratedState,
}: Props) {
  loadedLocales[locale] = translation;
  i18nAsync.loadFormatters(locale);

  return (
    <TypesafeI18n locale={locale}>
      <body>
        <QueryProvider>
          <HydrationBoundary state={dehydratedState}>
            <InitialStateProvider>
              <PageContent>{children}</PageContent>
            </InitialStateProvider>
          </HydrationBoundary>
        </QueryProvider>
      </body>
    </TypesafeI18n>
  );
}
