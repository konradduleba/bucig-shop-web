import { FC, PropsWithChildren } from 'react';

import styles from './main-content.module.scss';
import Banner from '@components/banner/banner';

export const MainContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={styles.main}>
      <Banner />
      {children}
    </main>
  );
};
