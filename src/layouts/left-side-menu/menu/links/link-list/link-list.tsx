import { FC } from 'react';

import { useGetMenuList } from '@hooks';

import { MenuLink } from './menu-link/menu-link';

import { ActivePhotoHook, ActivePhotoKey } from '../links.types';

import styles from './link-list.module.scss';

type LinkListProps = Pick<ActivePhotoHook, 'onUpdateActivePhoto'> & {
  activePhotoKey: ActivePhotoKey;
};

export const LinkList: FC<LinkListProps> = ({
  activePhotoKey,
  onUpdateActivePhoto,
}) => {
  const { menuList } = useGetMenuList();

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {menuList.map(({ id, href, label }) => (
          <MenuLink
            key={id}
            href={href}
            isActive={activePhotoKey === id}
            onMouseEnter={() => onUpdateActivePhoto(id)}
          >
            {label}
          </MenuLink>
        ))}
      </ul>
    </div>
  );
};
