export const variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.225,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
  },
};
