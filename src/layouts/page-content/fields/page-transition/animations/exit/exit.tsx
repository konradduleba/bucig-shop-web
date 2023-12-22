import { FC, PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import { EXIT_ANIMATION_VARIANTS } from './variants';

import styles from './exit.module.scss';

export const Exit: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname + 'exit-animation'}
      variants={EXIT_ANIMATION_VARIANTS}
      initial="initial"
      animate="animate"
      className={styles.container}
    >
      {children}
    </motion.div>
  );
};
