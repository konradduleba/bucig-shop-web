'use client';

import { ReactNode } from 'react';
import {
  Locales,
  Translation,
  loadedLocales,
  TypesafeI18n,
  i18nAsync,
} from '@i18n';
import { ThemeProvider } from '@providers';
import { Navigation, MainContent, LeftSideMenu, Footer } from '@layouts';

interface Props {
  children: ReactNode;
  locale: Locales;
  translation: Translation;
}

export default function ClientComponent({
  children,
  locale,
  translation,
}: Props) {
  loadedLocales[locale] = translation;
  i18nAsync.loadFormatters(locale);

  return (
    <TypesafeI18n locale={locale}>
      <body>
        <ThemeProvider>
          <LeftSideMenu />
          <Navigation />
          <MainContent>{children}</MainContent>
          <Footer />
        </ThemeProvider>
        <div id="menu-portal" />
      </body>
    </TypesafeI18n>
  );
}
