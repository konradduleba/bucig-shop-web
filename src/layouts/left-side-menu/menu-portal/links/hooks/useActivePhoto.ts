'use client';

import { useState } from 'react';

import { ActivePhoto, ActivePhotoHook, LinkIds } from '../links.types';
import { useGetPhoto } from './useGetPhoto';
import { getActiveMenuData } from '../helpers/get-active-menu-data';

export const useActivePhoto = (): ActivePhotoHook => {
  const photo = useGetPhoto();

  const [activePhoto, setActivePhoto] = useState<ActivePhoto>(photo);

  const onUpdateActivePhoto = (key: LinkIds) => {
    const selectedPhoto = getActiveMenuData(key);

    return setActivePhoto(selectedPhoto);
  };

  return {
    activePhoto,
    onUpdateActivePhoto,
  };
};
