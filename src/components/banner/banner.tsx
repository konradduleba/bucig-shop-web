import { FC } from 'react';

import styles from './banner.module.scss';

const Banner: FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerImage}></div>
    </div>
  );
};

export default Banner;
