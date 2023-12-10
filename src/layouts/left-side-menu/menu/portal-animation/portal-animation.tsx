import { FC, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

import { variants } from './variants';

import styles from './portal-animation.module.scss';

export const MenuPortalAnimation: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      key="openMenu"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={styles.container}
    >
      {children}
    </motion.div>
  );
};
