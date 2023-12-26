import { FC } from 'react';

import { useInitialStateProvider } from '@providers';

import CustomLink from '@components/custom-link/custom-link';
import Typography from '@components/typography';

import styles from './sub-menu.module.scss';

export const SubMenu: FC = () => {
  const {
    navigation: { links },
  } = useInitialStateProvider();

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {links.map(({ href, isExternal, id, title }) => (
          <li key={id}>
            <CustomLink href={href} external={isExternal}>
              <Typography.Text size="16" className={styles.text}>
                {title}
              </Typography.Text>
            </CustomLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
