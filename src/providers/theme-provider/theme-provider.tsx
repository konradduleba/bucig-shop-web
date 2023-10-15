'use client';

import { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from './theme-context';
import { getTheme, toggleTheme } from './theme-helpers';
import { Theme } from '@types';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(getTheme());

  const toggleCurrentTheme = () => {
    setCurrentTheme((prevTheme: Theme) => {
      const newTheme = prevTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

      return newTheme;
    });
  };

  useEffect(() => {
    toggleTheme(currentTheme);
  }, [currentTheme]);

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
