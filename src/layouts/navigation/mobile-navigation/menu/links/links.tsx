import { FC } from 'react';

import { useGetMenuList } from '@hooks';

import { MenuLink } from '../menu-link/menu-link';

import styles from './links.module.scss';

export const Links: FC = () => {
  const { menuList } = useGetMenuList();

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {menuList.map(({ id, href, label }) => (
          <MenuLink key={id} href={href} isActive={false}>
            {label}
          </MenuLink>
        ))}
      </ul>
    </div>
  );
};
