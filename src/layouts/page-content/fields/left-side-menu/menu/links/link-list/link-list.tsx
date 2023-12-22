import { FC } from 'react';

import { useGetMenuList } from '@hooks';

import { ActivePathKey } from '@types';

import { LinkProps } from '@components/custom-link/custom-link';

import { MenuLink } from './menu-link/menu-link';

import { ActivePathHook } from '../links.types';

import styles from './link-list.module.scss';

type LinkListProps = Pick<ActivePathHook, 'onUpdateActivePath'> &
  Pick<LinkProps, 'onClick'> & {
    activePhotoKey: ActivePathKey;
  };

export const LinkList: FC<LinkListProps> = ({
  activePhotoKey,
  onClick,
  onUpdateActivePath,
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
            onMouseEnter={() => onUpdateActivePath(id)}
            onClick={onClick}
          >
            {label}
          </MenuLink>
        ))}
      </ul>
    </div>
  );
};
