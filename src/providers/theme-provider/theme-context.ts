'use client';

import { createContext } from 'react';
import { Theme } from '@types';

export const ThemeContext = createContext<
  | {
      currentTheme: Theme;
      toggleTheme: () => void;
    }
  | undefined
>(undefined);
