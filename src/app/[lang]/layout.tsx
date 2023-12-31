import { FC, ReactNode } from 'react';
import { Montserrat } from 'next/font/google';
import { Session } from 'next-auth';

import { Locales } from '../../i18n/i18n-types';
import { loadLocaleAsync } from '../../i18n/i18n-util.async';
import { baseLocale, loadedLocales } from '../../i18n/i18n-util';

import { useGetInitialQueries } from '@providers';

import ClientComponent from './layoutClient';

import '@styles/global.scss';

const inter = Montserrat({
  weight: ['200', '300', '400', '700'],
  display: 'swap',
  subsets: ['latin'],
});

type Props = {
  children?: ReactNode;
  params: { lang: Locales; session: Session };
};

async function i18nDictionary(locale: Locales) {
  await loadLocaleAsync(locale);
  return {
    locale,
    dictionary: loadedLocales[locale],
  };
}

const RootLayout: FC<Props> = async ({ children, params }) => {
  const locale = params.lang;
  const i18n = await i18nDictionary(locale ?? baseLocale);
  const { dehydratedState } = await useGetInitialQueries(i18n.locale);

  return (
    <html lang={i18n.locale} className={inter.className}>
      <ClientComponent
        locale={i18n.locale}
        translation={i18n.dictionary}
        dehydratedState={dehydratedState}
        session={params.session}
      >
        {children}
      </ClientComponent>
    </html>
  );
};

export default RootLayout;
