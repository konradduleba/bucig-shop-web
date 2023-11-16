import { FC } from 'react';

import SvgShoppingBag from '@icons/shopping-bag';

import styles from './basket.module.scss';

export const Basket: FC = () => {
  return (
    <div className={styles.container}>
      <SvgShoppingBag fontSize={20} />
    </div>
  );
};
