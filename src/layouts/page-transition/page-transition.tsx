'use client';

import { AnimatePresence } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

import { Exit, Slide, Load } from './animations';
import { usePageTransition } from './hooks/usePageTransition';

export const PageTransition: FC<PropsWithChildren> = ({ children }) => {
  const {
    currentPageRef,
    exitAnimationDivRef,
    exitAnimationKey,
    exitPageKey,
    loadAnimationKey,
  } = usePageTransition();

  return (
    <AnimatePresence initial={false}>
      <Exit key={exitAnimationKey}>
        <div key={exitPageKey} ref={exitAnimationDivRef} />
      </Exit>
      <Slide />
      <Load key={loadAnimationKey}>
        <div ref={currentPageRef}>{children}</div>
      </Load>
    </AnimatePresence>
  );
};
