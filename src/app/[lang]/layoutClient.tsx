'use client';

import { ReactNode } from 'react';
import { Locales, Translation } from '../../i18n/i18n-types';
import { loadedLocales } from '../../i18n/i18n-util';
import { loadFormatters } from '../../i18n/i18n-util.sync';
import TypesafeI18n from '../../i18n/i18n-react';
import { ThemeProvider } from '../../providers/theme-provider/theme-provider';
// import { Navigation } from '../../layouts/navigation/navigation';
// import { Footer } from '../../layouts/footer/footer';
import { MainContent } from '../../layouts/main-content/main-content';
import { LeftSideMenu } from '../../layouts/left-side-menu/left-side-menu';

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
  loadFormatters(locale);

  return (
    <TypesafeI18n locale={locale}>
      <body>
        <ThemeProvider>
          <LeftSideMenu />
          {/* <Navigation />*/}
          <MainContent>{children}</MainContent>
          {/*<Footer /> */}
        </ThemeProvider>
        <div id="menu-portal" />
      </body>
    </TypesafeI18n>
  );
}
