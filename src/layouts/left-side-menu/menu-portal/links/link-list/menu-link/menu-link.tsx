import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import Link, { LinkProps } from 'next/link';
import Typography from '@components/typography';

import styles from './menu-link.module.scss';

type MenuLinkProps = Pick<LinkProps, 'href'> & {
  onMouseEnter: () => void;
  isActive: boolean;
};

export const MenuLink: FC<PropsWithChildren<MenuLinkProps>> = ({
  isActive,
  onMouseEnter,
  href,
  children,
}) => {
  return (
    <li onMouseEnter={onMouseEnter} className={styles.link}>
      <Link href={href}>
        <Typography.Heading
          size="36"
          className={cn(styles.label, {
            [styles.active]: isActive,
          })}
        >
          {children}
        </Typography.Heading>
      </Link>
    </li>
  );
};
