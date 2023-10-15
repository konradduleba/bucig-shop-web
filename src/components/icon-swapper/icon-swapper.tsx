'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';

import styles from './icon-swapper.module.scss';
import { variants } from './variants';

export interface IconSwapperProps {
  displayFirst: boolean;
  icon1: ReactNode;
  icon2: ReactNode;
}

export const IconSwapper = ({
  displayFirst,
  icon1,
  icon2,
}: IconSwapperProps) => {
  return (
    <span className={styles.wrapper}>
      <AnimatePresence initial={false}>
        {displayFirst ? (
          <motion.span
            key="firstIcon"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.iconWrapper}
          >
            {icon1}
          </motion.span>
        ) : (
          <motion.span
            key="secondIcon"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.iconWrapper}
          >
            {icon2}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

export default IconSwapper;
