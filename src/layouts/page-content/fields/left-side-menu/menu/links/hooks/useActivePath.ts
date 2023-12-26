'use client';

import { useState } from 'react';

import { useCheckPath } from '@hooks';

import { Link, MenuLink } from '@types';

import { ActivePathHook } from '../links.types';

export const useActivePath = (): ActivePathHook => {
  const { currentPath, getSelectedPath } = useCheckPath();

  const [activePath, setActivePath] = useState<MenuLink>(currentPath);

  const onUpdateActivePath = (pathId: Link['id']) => {
    const selectedPath = getSelectedPath(pathId);

    return setActivePath(selectedPath);
  };

  return {
    activePath,
    onUpdateActivePath,
  };
};
