import { FC } from 'react';

import { getFooterSubMenu } from '../../hooks/getFooterSubMenu';

import { MenuRoute } from '@types';

import CustomLink from '@components/custom-link/custom-link';
import Typography from '@components/typography';

import { Section } from '@layouts';

import styles from './sub-menu.module.scss';

export const SubMenu: FC = () => {
  const menuRoutes = getFooterSubMenu();

  return (
    <Section className={styles.container}>
      <ul className={styles.list}>
        {menuRoutes.map(({ href, name }: MenuRoute) => (
          <li key={name} className={styles.link}>
            <CustomLink href={href}>
              <Typography.Text size="16" className={styles.text}>
                {name}
              </Typography.Text>
            </CustomLink>
          </li>
        ))}
      </ul>
    </Section>
  );
};
