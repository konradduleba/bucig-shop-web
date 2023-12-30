import { AnimatePresence, AnimationLifecycles, motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';
import { Link } from '@types';

import { variants } from './variants';

import styles from './preview-animation.module.scss';

interface PreviewAnimationProps {
  activeKey: Link['id'];
  onAnimationComplete: AnimationLifecycles['onAnimationComplete'];
}

export const PreviewAnimation: FC<PropsWithChildren<PreviewAnimationProps>> = ({
  children,
  activeKey,
  onAnimationComplete,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeKey}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={styles.imageContainer}
        onAnimationComplete={onAnimationComplete}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
