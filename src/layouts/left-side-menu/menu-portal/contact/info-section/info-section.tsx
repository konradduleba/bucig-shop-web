import { FC, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

import { variants } from './variants';

import styles from './info-section.module.scss';

export const InfoSection: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <motion.div
        key="openMenu"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={styles.content}
      >
        {children}
      </motion.div>
    </div>
  );
};
