import { FC, useState } from 'react';

import CustomImage from '@components/custom-image/custom-image';

import { ActivePhotoHook, MenuLink } from '../links.types';
import { getNewMenuOrder } from '../helpers/get-new-menu-order';
import { useGetMenuList } from '../hooks/useGetMenuList';

import { PreviewAnimation } from './preview-animation/preview-animation';

import styles from './photo-preview.module.scss';

export const PhotoPreview: FC<Pick<ActivePhotoHook, 'activePhoto'>> = ({
  activePhoto,
}) => {
  const { id: activePhotoKey, imageRef, label } = activePhoto;
  const { menuListWithFallback } = useGetMenuList();

  const [menu, setMenu] = useState<MenuLink[]>([]);

  const onAnimationComplete = () => {
    const newOrder = getNewMenuOrder(menuListWithFallback, activePhotoKey);

    setMenu(newOrder);
  };

  return (
    <div className={styles.wrapper}>
      {menu.map(({ id, imageRef, label }, index) => (
        <CustomImage alt={label} src={imageRef} key={`${index}-${id}`} />
      ))}
      <PreviewAnimation
        activeKey={activePhotoKey}
        onAnimationComplete={onAnimationComplete}
      >
        <CustomImage alt={label} src={imageRef} />
      </PreviewAnimation>
    </div>
  );
};
