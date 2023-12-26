import { FC } from 'react';

import { useInitialStateProvider } from '@providers';

import { Link } from '@types';
import { LinkProps } from '@components/custom-link/custom-link';

import { MenuLink } from './menu-link/menu-link';

import { ActivePathHook } from '../links.types';

import styles from './link-list.module.scss';

type LinkListProps = Pick<ActivePathHook, 'onUpdateActivePath'> &
  Pick<LinkProps, 'onClick'> & {
    activePhotoKey: Link['id'];
  };

export const LinkList: FC<LinkListProps> = ({
  activePhotoKey,
  onClick,
  onUpdateActivePath,
}) => {
  const {
    menu: { links },
  } = useInitialStateProvider();

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {links.map(
          ({ href, id, title, isVisible }) =>
            isVisible && (
              <MenuLink
                key={id}
                href={href}
                isActive={activePhotoKey === id}
                onMouseEnter={() => onUpdateActivePath(id)}
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
