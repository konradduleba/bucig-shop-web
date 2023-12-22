import { FC } from 'react';

import { useGetCurrentMenuListPathKey, useGetMenuList } from '@hooks';

import { LinkProps } from '@components/custom-link/custom-link';

import { MenuLink } from '../menu-link/menu-link';

import styles from './links.module.scss';

export const Links: FC<Pick<LinkProps, 'onClick'>> = ({ onClick }) => {
  const { pathKey } = useGetCurrentMenuListPathKey();
  const { menuList } = useGetMenuList();

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {menuList.map(({ id, href, label }) => (
          <MenuLink
            key={id}
            href={href}
            isActive={pathKey === id}
            onClick={onClick}
          >
            {label}
          </MenuLink>
        ))}
      </ul>
    </div>
  );
};
