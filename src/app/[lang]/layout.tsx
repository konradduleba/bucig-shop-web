import { FC, ReactNode } from 'react';
import { Montserrat } from 'next/font/google';

import { Locales } from '../../i18n/i18n-types';
import { loadLocaleAsync } from '../../i18n/i18n-util.async';
import { baseLocale, loadedLocales } from '../../i18n/i18n-util';

import ClientComponent from './layoutClient';

import '@styles/global.scss';

const inter = Montserrat({
  weight: ['200', '300', '400', '700'],
  display: 'swap',
  subsets: ['latin'],
});

type Props = {
  children?: ReactNode;
  params: { lang: string };
};

async function i18nDictionary(locale: Locales) {
  await loadLocaleAsync(locale);
  return {
    locale,
    dictionary: loadedLocales[locale],
  };
}

const RootLayout: FC<Props> = async ({ children, params }) => {
  const locale = params.lang as Locales;
  const i18n = await i18nDictionary(locale ?? baseLocale);

  return (
    <html lang={i18n.locale} className={inter.className}>
      <ClientComponent locale={i18n.locale} translation={i18n.dictionary}>
        {children}
      </ClientComponent>
    </html>
  );
};

export default RootLayout;
