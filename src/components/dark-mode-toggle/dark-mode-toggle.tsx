'use client';

import { FC } from 'react';
import { Theme } from '@types';
import { useThemeProvider } from '@providers';
import { IconButton } from '@components/buttons';
import Moon from '@icons/moon';
import Sun from '@icons/sun';

import IconSwapper from '../icon-swapper/icon-swapper';

import styles from './dark-mode-toggle.module.scss';

export const DarkModeToggle: FC = () => {
  const { currentTheme, toggleTheme } = useThemeProvider();
  const isDarkMode = currentTheme === Theme.DARK;

  return (
    <IconButton
      variant="ghost"
      color={currentTheme ? 'primary' : 'secondary'}
      renderIcon={() => (
        <IconSwapper
          displayFirst={isDarkMode}
          icon1={<Sun />}
          icon2={<Moon />}
        />
      )}
      name="dark-mode-toggle"
      className={styles.button}
      onClick={toggleTheme}
    />
  );
};

export default DarkModeToggle;
