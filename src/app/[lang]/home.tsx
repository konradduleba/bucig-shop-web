'use client';

import { FC } from 'react';

import { useGetHome } from '@api';
import { useI18nContext } from '@i18n';

import { HomePage } from '@modules/home';

export const Home: FC = () => {
  const { locale } = useI18nContext();
  const content = useGetHome(locale);

  return content && <HomePage {...content} />;
};
