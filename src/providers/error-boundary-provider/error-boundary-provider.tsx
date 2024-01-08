'use client';

import { FC, PropsWithChildren, useState } from 'react';
import { SignInResponse } from 'next-auth/react';

import { ErrorResponse } from '@types';

import { ErrorBoundaryContext } from './error-boundary-context';
import { useHandleBoundaryError } from './hooks';

export const ErrorBoundaryProvider: FC<PropsWithChildren> = ({ children }) => {
  const { checkErrorByStatus, errorFromParams } = useHandleBoundaryError();

  const [error, setError] = useState<ErrorResponse | null>(errorFromParams);

  const onUpdateError = ({ status }: SignInResponse) => {
    const errorInfo = checkErrorByStatus(status);

    setError(errorInfo);
  };

  const value = {
    error,
    onUpdateError,
  };

  return (
    <ErrorBoundaryContext.Provider value={value}>
      {children}
    </ErrorBoundaryContext.Provider>
  );
};
