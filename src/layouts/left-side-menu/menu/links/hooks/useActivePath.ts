'use client';

import { useState } from 'react';

import { useGetMenuList } from '@hooks';
import { LinkIds } from '@types';

import { ActivePath, ActivePathHook } from '../links.types';

import { useGetPath } from './useGetPath';

import { getActiveMenuData } from '../helpers/get-active-menu-data';

export const useActivePath = (): ActivePathHook => {
  const path = useGetPath();
  const { elements } = useGetMenuList();
  const [activePath, setActivePath] = useState<ActivePath>(path);

  const onUpdateActivePath = (key: LinkIds) => {
    const selectedPath = getActiveMenuData(elements, key);

    return setActivePath(selectedPath);
  };

  return {
    activePath,
    onUpdateActivePath,
  };
};
