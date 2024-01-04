import { FC, PropsWithChildren } from 'react';

import styles from './content-wrapper.module.scss';

export const ContentWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
