'use client';

import { createContext } from 'react';
import { SignInResponse } from 'next-auth/react';

import { ErrorResponse } from '@types';

export const ErrorBoundaryContext = createContext<
  | {
      error: ErrorResponse | null;
      onUpdateError: (newError: SignInResponse) => void;
    }
  | undefined
>(undefined);
