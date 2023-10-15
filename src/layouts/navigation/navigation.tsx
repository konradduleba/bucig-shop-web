import { FC } from 'react';
import { useGetMenuRoutes } from '../hooks';
import { MenuRoute } from '@types';
import Typography from '@components/typography';
import DarkModeToggle from '@components/dark-mode-toggle/dark-mode-toggle';
import Link from 'next/link';

import styles from './navigation.module.scss';

export const Navigation: FC = () => {
  const menuRoutes = useGetMenuRoutes();

  return (
    <nav className={styles.navigation}>
      <Typography.Lead size="lg">Navigation</Typography.Lead>
      <DarkModeToggle />
      <ul>
        {menuRoutes.map(({ href, name }: MenuRoute) => (
          <li key={name}>
            <Link href={href}>
              <Typography.Text size="sm">{name}</Typography.Text>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
