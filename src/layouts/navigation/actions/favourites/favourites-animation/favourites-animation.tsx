import { FC, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

import { variants } from './variants';

import styles from './favourites-animation.module.scss';

export const FavouritesAnimation: FC<PropsWithChildren> = ({ children }) => {
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
