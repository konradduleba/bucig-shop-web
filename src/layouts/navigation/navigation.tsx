import { FC } from 'react';
import { useGetMenuRoutes } from '../hooks';
import { MenuRoute } from '@types';
import Typography from '@components/typography';
import Link from 'next/link';

import styles from './navigation.module.scss';

export const Navigation: FC = () => {
  const menuRoutes = useGetMenuRoutes();

  return (
    <nav className={styles.navigation}>
      <Typography.Text size="20">Navigation</Typography.Text>
      <ul>
        {menuRoutes.map(({ href, name }: MenuRoute) => (
          <li key={name}>
            <Link href={href}>
              <Typography.Text size="12">{name}</Typography.Text>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
