'use client';

import { useContext } from 'react';

import { ThemeContext } from './theme-context';

export const useThemeProvider = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useThemeProvider must be used within a ThemeProvider');
  }

  return context;
};
