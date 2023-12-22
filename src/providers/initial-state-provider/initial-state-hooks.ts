'use client';

import { useContext } from 'react';

import { InitialStateContext } from './initial-state-context';

export const useInitialStateProvider = () => {
  const context = useContext(InitialStateContext);

  if (context === undefined) {
    throw new Error(
      'useInitialStateProvider must be used within a InitialStateProvider',
    );
  }

  return context;
};
