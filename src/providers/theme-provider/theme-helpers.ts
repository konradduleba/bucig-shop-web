'use client';

import { Theme } from '@types';
import { THEME_STORAGE_KEY } from './theme-consts';

export const toggleTheme = (mode: Theme) => {
  if (mode === Theme.DARK) {
    document.body.classList.add(Theme.DARK);
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  } else {
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem(THEME_STORAGE_KEY, Theme.LIGHT);
  }
};

export const getTheme = (): Theme => {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  const mode =
    savedTheme === Theme.LIGHT || savedTheme === Theme.DARK
      ? savedTheme
      : (window.matchMedia?.('(prefers-color-scheme: dark)').matches
          ? Theme.DARK
          : Theme.LIGHT) ?? Theme.LIGHT;

  return mode;
};
