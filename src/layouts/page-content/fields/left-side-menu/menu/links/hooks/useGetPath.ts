'use client';

import { useGetCurrentMenuListPathKey, useGetMenuList } from '@hooks';

import { getActiveMenuData } from '../helpers/get-active-menu-data';
import { ActivePath } from '../links.types';

export const useGetPath = (): ActivePath => {
  const { pathKey } = useGetCurrentMenuListPathKey();
  const { elements } = useGetMenuList();

  const { id, imageRef, label } = getActiveMenuData(elements, pathKey);

  return {
    id,
    imageRef,
    label,
  };
};
