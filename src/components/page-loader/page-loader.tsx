import { FC } from 'react';

import styles from './page-loader.module.scss';

export const Loader: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.shades}>
        <div className={styles.water}>
          <span className={styles.wave} />
          <span className={styles.deepWater} />
        </div>
      </div>
    </div>
  );
};
