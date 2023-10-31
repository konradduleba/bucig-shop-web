'use client';

import { usePathname } from 'next/navigation';
import { getActivePhotoKey } from '../helpers/get-active-photo-key';
import { getActiveMenuData } from '../helpers/get-active-menu-data';
import { ActivePhoto } from '../links.types';

import { useGetMenuList } from './useGetMenuList';

export const useGetPhoto = (): ActivePhoto => {
  const pathname = usePathname();
  const { elements } = useGetMenuList();
  const photoKey = getActivePhotoKey(pathname);

  const { id, imageRef, label } = getActiveMenuData(elements, photoKey);

  return {
    id,
    imageRef,
    label,
  };
};
