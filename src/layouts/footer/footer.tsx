import { FC } from 'react';
import { useGetMenuRoutes } from '../hooks';
import { MenuRoute } from '@types';
import Typography from '@components/typography';
import CustomLink from '@components/custom-link/custom-link';

import styles from './footer.module.scss';

export const Footer: FC = () => {
  const menuRoutes = useGetMenuRoutes();

  return (
    <footer className={styles.footer}>
      <Typography.Text size="20">Footer</Typography.Text>
      <ul>
        {menuRoutes.map(({ href, name }: MenuRoute) => (
          <li key={name}>
            <CustomLink href={href}>
              <Typography.Text size="14">{name}</Typography.Text>
            </CustomLink>
          </li>
        ))}
      </ul>
    </footer>
  );
};
