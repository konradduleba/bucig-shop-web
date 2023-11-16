import { FC } from 'react';

import { Logo } from './logo/logo';
import { SubPages } from './sub-pages/sub-pages';
import { Actions } from './actions/actions';
import { Basket } from './basket/basket';

import styles from './navigation.module.scss';

export const Navigation: FC = () => {
  return (
    <nav className={styles.navigation}>
      <Logo />
      <SubPages />
      <Actions />
      <Basket />
    </nav>
  );
};
