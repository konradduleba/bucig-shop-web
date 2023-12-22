import { FC } from 'react';
import cn from 'classnames';

import { useScrollPosition } from '@hooks';

import { Logo, SubMenu, Basket } from '../fields';
import { Actions } from './actions/actions';

import styles from './desktop-navigation.module.scss';

export const DesktopNavigation: FC = () => {
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
