import { FC, PropsWithChildren } from 'react';

import styles from './main-content.module.scss';

export const MainContent: FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};