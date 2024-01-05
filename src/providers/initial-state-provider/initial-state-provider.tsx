'use client';

import { FC, PropsWithChildren } from 'react';
import { useSession } from 'next-auth/react';

import {
  useGetFooter,
  useGetGeneral,
  useGetMenu,
  useGetNavigation,
} from '@api';

import { useI18nContext } from '@i18n';

import { Loader } from '@components/page-loader/page-loader';

import { useGetScreenTypes } from './hooks';

import { InitialStateContext } from './initial-state-context';

export const InitialStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const { locale } = useI18nContext();
  const { status: sessionStatus } = useSession();

  const general = useGetGeneral();
  const footer = useGetFooter(locale);
  const navigation = useGetNavigation(locale);
  const menu = useGetMenu(locale);
  const { screenTypes } = useGetScreenTypes();

  const isDataLoaded =
    !!footer &&
    !!screenTypes &&
    !!general &&
    !!navigation &&
    !!menu &&
    sessionStatus !== 'loading';

  if (!isDataLoaded) {
    return <Loader />;
  }

  const value = {
    footer,
    screenTypes,
    general,
    navigation,
    menu,
  };

  return (
    <InitialStateContext.Provider value={value}>
      {children}
    </InitialStateContext.Provider>
  );
};
