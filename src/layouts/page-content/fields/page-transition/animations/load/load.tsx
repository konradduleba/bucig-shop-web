import { FC, PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import { LOAD_ANIMATION_VARIANTS } from './variants';

import styles from './load.module.scss';

export const Load: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname + `load-animation`}
      variants={LOAD_ANIMATION_VARIANTS}
      initial="initial"
      animate="animate"
      className={styles.container}
    >
      {children}
    </motion.div>
  );
};
