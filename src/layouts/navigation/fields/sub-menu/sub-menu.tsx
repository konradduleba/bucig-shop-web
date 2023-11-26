import { FC } from 'react';

import { getNavigationSubMenu } from '../../hooks/getNavigationSubMenu';

import { MenuRoute } from '@types';

import CustomLink from '@components/custom-link/custom-link';
import Typography from '@components/typography';

import styles from './sub-menu.module.scss';

export const SubMenu: FC = () => {
  const menuRoutes = getNavigationSubMenu();

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {menuRoutes.map(({ href, name }: MenuRoute) => (
          <li key={name}>
            <CustomLink href={href}>
              <Typography.Text size="16" className={styles.text}>
                {name}
              </Typography.Text>
            </CustomLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
