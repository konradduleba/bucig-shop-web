import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Montserrat } from 'next/font/google';

import { Locales, i18nAsync, baseLocale, loadedLocales } from '@i18n';

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
  await i18nAsync.loadLocaleAsync(locale);
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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <ClientComponent locale={i18n.locale} translation={i18n.dictionary}>
        {children}
      </ClientComponent>
    </html>
  );
};

export default RootLayout;
