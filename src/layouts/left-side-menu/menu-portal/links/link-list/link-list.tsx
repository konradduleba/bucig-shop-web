import { FC } from 'react';

import { MenuLink } from './menu-link/menu-link';

import { MENU_LINK_ELEMENTS } from '../links.consts';
import { ActivePhotoHook, ActivePhotoKey } from '../links.types';

import styles from './link-list.module.scss';

type LinkListProps = Pick<ActivePhotoHook, 'onUpdateActivePhoto'> & {
  activePhotoKey: ActivePhotoKey;
};

export const LinkList: FC<LinkListProps> = ({
  activePhotoKey,
  onUpdateActivePhoto,
}) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {MENU_LINK_ELEMENTS.map(({ id, href, label }) => (
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
