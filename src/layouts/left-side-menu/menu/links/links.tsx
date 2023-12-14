import { FC } from 'react';

import { LinkProps } from '@components/custom-link/custom-link';

import { useActivePath } from './hooks/useActivePath';

import { LinkList } from './link-list/link-list';
import { PhotoPreview } from './photo-preview/photo-preview';

import styles from './links.module.scss';

export const MenuLinks: FC<Pick<LinkProps, 'onClick'>> = ({ onClick }) => {
  const { activePath, onUpdateActivePath } = useActivePath();

  return (
    <div className={styles.container}>
      <LinkList
        onUpdateActivePath={onUpdateActivePath}
        activePhotoKey={activePath.id}
        onClick={onClick}
      />
      <PhotoPreview activePhoto={activePath} />
    </div>
  );
};
