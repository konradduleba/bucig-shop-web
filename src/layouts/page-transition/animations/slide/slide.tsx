import { FC } from 'react';
import { usePathname } from 'next/navigation';

import styles from './slide.module.scss';

export const Slide: FC = () => {
  const pathname = usePathname();
  const keyName = `${pathname}-slide-animation`;

  return <div className={styles.slide} key={keyName} />;
};
