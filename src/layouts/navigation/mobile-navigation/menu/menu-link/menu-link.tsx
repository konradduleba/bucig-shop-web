import { FC, PropsWithChildren } from 'react';

import CustomLink, { LinkProps } from '@components/custom-link/custom-link';
import Typography from '@components/typography';

import styles from './menu-link.module.scss';

type MenuLinkProps = Pick<LinkProps, 'href'> & {
  isActive: boolean;
};

export const MenuLink: FC<PropsWithChildren<MenuLinkProps>> = ({
  href,
  children,
}) => {
  return (
    <li>
      <CustomLink href={href}>
        <Typography.Heading size="24" className={styles.label}>
          {children}
        </Typography.Heading>
      </CustomLink>
    </li>
  );
};
