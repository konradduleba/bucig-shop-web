import { FC } from 'react';

import { useActivePhoto } from './hooks/useActivePhoto';

import { LinkList } from './link-list/link-list';
import { PhotoPreview } from './photo-preview/photo-preview';

import styles from './links.module.scss';

export const MenuLinks: FC = () => {
  const { activePhoto, onUpdateActivePhoto } = useActivePhoto();

  return (
    <div className={styles.container}>
      <LinkList
        onUpdateActivePhoto={onUpdateActivePhoto}
        activePhotoKey={activePhoto.id}
      />
      <PhotoPreview activePhoto={activePhoto} />
    </div>
  );
};
