import { FC } from 'react';
import cn from 'classnames';

import { useScrollPosition } from '@hooks';

import { Logo, SubMenu, Actions, Basket } from './fields';

import styles from './navigation.module.scss';

export const Navigation: FC = () => {
  const { scrollPosition } = useScrollPosition();

  const isScrollMoved = scrollPosition !== 0;

  return (
    <nav
      className={cn(styles.navigation, { [styles.scrollMoved]: isScrollMoved })}
    >
      <Logo />
      <SubMenu />
      <Actions />
      <Basket />
    </nav>
  );
};
