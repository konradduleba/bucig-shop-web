import { FC } from 'react';

import { Search } from './search/search';
import { Favourites } from './favourites/favourites';
import { Login } from './login/login';

import styles from './actions.module.scss';

export const Actions: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <Search />
        <Favourites />
        <Login />
      </div>
    </div>
  );
};
