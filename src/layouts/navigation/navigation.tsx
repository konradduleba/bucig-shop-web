import { FC } from 'react';

import { useGetMenuRoutes } from '../hooks';

import { MenuRoute } from '@types';
import Typography from '@components/typography';
import CustomLink from '@components/custom-link/custom-link';

import styles from './navigation.module.scss';

export const Navigation: FC = () => {
  const menuRoutes = useGetMenuRoutes();

  return (
    <nav className={styles.navigation}>
      <Typography.Text size="20">Navigation</Typography.Text>
      <ul>
        {menuRoutes.map(({ href, name }: MenuRoute) => (
          <li key={name}>
            <CustomLink href={href}>
              <Typography.Text size="12">{name}</Typography.Text>
            </CustomLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
