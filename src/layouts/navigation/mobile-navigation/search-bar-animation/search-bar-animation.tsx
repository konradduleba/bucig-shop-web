import { FC, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

import { variants } from './variants';

import styles from './search-bar-animation.module.scss';

export const SearchBarAnimation: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      key="favourites"
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
