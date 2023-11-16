import { FC } from 'react';

import { useGetMenuRoutes } from '../../hooks';

import { MenuRoute } from '@types';

import CustomLink from '@components/custom-link/custom-link';
import Typography from '@components/typography';

import styles from './sub-pages.module.scss';

export const SubPages: FC = () => {
  const menuRoutes = useGetMenuRoutes();

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {menuRoutes.map(({ href, name }: MenuRoute) => (
          <li key={name}>
            <CustomLink href={href}>
              <Typography.Text size="14" className={styles.text}>
                {name}
              </Typography.Text>
            </CustomLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
