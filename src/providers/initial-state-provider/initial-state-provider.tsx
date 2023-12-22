'use client';

import { FC, PropsWithChildren } from 'react';

import { useGetFooter, useGetGeneral, useGetNavigation } from '@api';

import { useI18nContext } from '@i18n';

import { PageLoader } from '@components/page-loader/page-loader';

import { useGetScreenTypes } from './hooks';

import { InitialStateContext } from './initial-state-context';

export const InitialStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const { locale } = useI18nContext();

  const general = useGetGeneral();
  const footer = useGetFooter(locale);
  const navigation = useGetNavigation(locale);
  const { screenTypes } = useGetScreenTypes();

  const isDataLoaded = !!footer && !!screenTypes && !!general && !!navigation;

  if (!isDataLoaded) {
    return <PageLoader />;
  }

  const value = {
    footer,
    screenTypes,
    general,
    navigation,
  };

  return (
    <InitialStateContext.Provider value={value}>
      {children}
    </InitialStateContext.Provider>
  );
};
