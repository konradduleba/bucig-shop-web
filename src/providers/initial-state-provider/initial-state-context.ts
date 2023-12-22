'use client';

import { createContext } from 'react';

import { Footer, General, Navigation, ScreenTypes } from '@types';

export const InitialStateContext = createContext<
  | {
      footer: Footer;
      screenTypes: ScreenTypes;
      general: General;
      navigation: Navigation;
    }
  | undefined
>(undefined);
