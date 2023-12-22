import { FC } from 'react';

import { Login } from '../../fields';
import { SearchIcon } from '../../shared';
import { Favourites } from './favourites/favourites';

import styles from './actions.module.scss';

interface ActionsProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}

export const Actions: FC<ActionsProps> = ({ toggleVisibility, isVisible }) => {
  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <SearchIcon isVisible={isVisible} toggleVisibility={toggleVisibility} />
        <Favourites />
        <Login />
      </div>
    </div>
  );
};
