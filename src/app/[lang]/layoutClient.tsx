'use client';

import { ReactNode } from 'react';
import { DehydratedState, HydrationBoundary } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

import {
  Locales,
  Translation,
  loadedLocales,
  TypesafeI18n,
  i18nAsync,
} from '@i18n';

import { QueryProvider, InitialStateProvider } from '@providers';

import { PageContent } from '@layouts';

import { ProtectedRoutesGuard } from '@guards';

interface Props {
  children: ReactNode;
  locale: Locales;
  translation: Translation;
  dehydratedState: DehydratedState;
  session: Session;
}

export default function ClientComponent({
  children,
  locale,
  translation,
  dehydratedState,
  session,
}: Props) {
  loadedLocales[locale] = translation;
  i18nAsync.loadFormatters(locale);

  return (
    <TypesafeI18n locale={locale}>
      <body>
        <SessionProvider session={session}>
          <ProtectedRoutesGuard>
            <QueryProvider>
              <HydrationBoundary state={dehydratedState}>
                <InitialStateProvider>
                  <PageContent>{children}</PageContent>
                </InitialStateProvider>
              </HydrationBoundary>
            </QueryProvider>
          </ProtectedRoutesGuard>
        </SessionProvider>
      </body>
    </TypesafeI18n>
  );
}
