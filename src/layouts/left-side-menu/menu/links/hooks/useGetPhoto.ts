'use client';

import { usePathname } from 'next/navigation';

import { useGetMenuList } from '@hooks';

import { getActivePhotoKey } from '../helpers/get-active-photo-key';
import { getActiveMenuData } from '../helpers/get-active-menu-data';
import { ActivePhoto } from '../links.types';

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
