import { FC } from 'react';
import Image from 'next/image';

import styles from './logo.module.scss';

export const Logo: FC = () => {
  return (
    <div className={styles.container}>
      <Image alt="logo" src="/logo.jpeg" width={36} height={36} priority />
    </div>
  );
};
