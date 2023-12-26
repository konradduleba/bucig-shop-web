import { FC } from 'react';

import { useInitialStateProvider } from '@providers';

import { useCheckPath } from '@hooks';

import { LinkProps } from '@components/custom-link/custom-link';

import { MenuLink } from '../menu-link/menu-link';

import styles from './links.module.scss';

export const Links: FC<Pick<LinkProps, 'onClick'>> = ({ onClick }) => {
  const {
    currentPath: { id: pathId },
  } = useCheckPath();
  const {
    menu: { links },
  } = useInitialStateProvider();

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {links.map(
          ({ id, href, title, isVisible }) =>
            isVisible && (
              <MenuLink
                key={id}
                href={href}
                isActive={pathId === id}
                onClick={onClick}
              >
                {title}
              </MenuLink>
            ),
        )}
      </ul>
    </div>
  );
};
