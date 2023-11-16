import { FC, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

import { variants } from './variants';

export const SearchFormAnimation: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      key="searchForm"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};
