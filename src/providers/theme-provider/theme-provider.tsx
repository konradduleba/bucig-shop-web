'use client';

import { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from './theme-context';
import { getTheme, toggleTheme } from './theme-helpers';
import { Theme } from '@types';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.LIGHT);

  const toggleCurrentTheme = () => {
    setCurrentTheme((prevTheme: Theme) => {
      const newTheme = prevTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

      toggleTheme(newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const theme = getTheme();

    setCurrentTheme(theme);
    toggleTheme(theme);
  }, []);

  const value = useMemo(
    () => ({
      currentTheme,
      toggleTheme: toggleCurrentTheme,
    }),
    [currentTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
