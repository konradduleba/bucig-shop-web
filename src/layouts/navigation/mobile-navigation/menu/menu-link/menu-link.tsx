import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import CustomLink, { LinkProps } from '@components/custom-link/custom-link';
import Typography from '@components/typography';

import styles from './menu-link.module.scss';

type MenuLinkProps = Pick<LinkProps, 'href' | 'onClick'> & {
  isActive: boolean;
};

export const MenuLink: FC<PropsWithChildren<MenuLinkProps>> = ({
  href,
  onClick,
  isActive,
  children,
}) => {
  return (
    <li>
      <CustomLink href={href} onClick={onClick}>
        <Typography.Heading
          size="24"
          className={cn(styles.label, {
            [styles.active]: isActive,
          })}
        >
          {children}
        </Typography.Heading>
      </CustomLink>
    </li>
  );
};
