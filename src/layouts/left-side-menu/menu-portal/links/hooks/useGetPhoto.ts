'use client';

import { usePathname } from 'next/navigation';
import { getActivePhotoKey } from '../helpers/get-active-photo-key';
import { getActiveMenuData } from '../helpers/get-active-menu-data';
import { ActivePhoto } from '../links.types';

export const useGetPhoto = (): ActivePhoto => {
  const pathname = usePathname();
  const photoKey = getActivePhotoKey(pathname);

  const { id, imageRef, label } = getActiveMenuData(photoKey);

  return {
    id,
    imageRef,
    label,
  };
};
