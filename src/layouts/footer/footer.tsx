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
      <Typography.Text size="20">Footer</Typography.Text>
      <ul>
        {menuRoutes.map(({ href, name }: MenuRoute) => (
          <li key={name}>
            <Link href={href}>
              <Typography.Text size="14">{name}</Typography.Text>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};
