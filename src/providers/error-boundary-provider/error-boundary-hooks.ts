'use client';

import { useContext } from 'react';

import { ErrorBoundaryContext } from './error-boundary-context';

export const useErrorBoundaryProvider = () => {
  const context = useContext(ErrorBoundaryContext);

  if (context === undefined) {
    throw new Error(
      'useErrorBoundaryProvider must be used within a ErrorBoundaryProvider',
    );
  }

  return context;
};
