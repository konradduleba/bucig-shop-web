import { FC, useState } from 'react';

import CustomImage from '@components/custom-image/custom-image';

import { useInitialStateProvider } from '@providers';

import { MenuLink } from '@types';

import { getNewMenuOrder } from '../helpers';

import { ActivePathHook } from '../links.types';

import { PreviewAnimation } from './preview-animation/preview-animation';

import styles from './photo-preview.module.scss';

export const PhotoPreview: FC<Pick<ActivePathHook, 'activePath'>> = ({
  activePath,
}) => {
  const { id: pathId, image, title } = activePath;
  const {
    menu: { links },
  } = useInitialStateProvider();

  const [menu, setMenu] = useState<MenuLink[]>([]);

  const onAnimationComplete = () => {
    const newOrder = getNewMenuOrder(links, pathId);

    setMenu(newOrder);
  };

  return (
    <div className={styles.wrapper}>
      {menu.map(({ id, image, title }, index) => (
        <CustomImage alt={title} src={image.url} key={`${index}-${id}`} />
      ))}
      <PreviewAnimation
        activeKey={pathId}
        onAnimationComplete={onAnimationComplete}
      >
        <CustomImage alt={title} src={image.url} />
      </PreviewAnimation>
    </div>
  );
};
