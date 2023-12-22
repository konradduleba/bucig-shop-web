'use client';

import { FC, PropsWithChildren } from 'react';

import { ThemeProvider, useInitialStateProvider } from '@providers';

import {
  DesktopNavigation,
  Footer,
  LeftSideMenu,
  MobileNavigation,
  PageTransition,
} from './fields';

export const PageContent: FC<PropsWithChildren> = ({ children }) => {
  const {
    screenTypes: { isMobile, isTabletSm },
  } = useInitialStateProvider();

  const displayMobileNavigation = isMobile || isTabletSm;

  return (
    <ThemeProvider>
      {displayMobileNavigation ? (
        <MobileNavigation />
      ) : (
        <>
          <LeftSideMenu />
          <DesktopNavigation />
        </>
      )}
      <PageTransition>
        {children}
        <Footer />
      </PageTransition>
      <div id="menu-portal" />
    </ThemeProvider>
  );
};
