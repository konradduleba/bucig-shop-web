import { FC } from 'react';
import { useGetMenuRoutes } from '../hooks';
import { MenuRoute } from '@types';
import Typography from '@components/typography';
import Link from 'next/link';

import styles from './footer.module.scss';

export const Footer: FC = () => {
  const menuRoutes = useGetMenuRoutes();

  return (
    <footer className={styles.footer}>
      <Typography.Lead size="lg">Footer</Typography.Lead>
      <ul>
        {menuRoutes.map(({ href, name }: MenuRoute) => (
          <li key={name}>
            <Link href={href}>
              <Typography.Text size="sm">{name}</Typography.Text>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};
