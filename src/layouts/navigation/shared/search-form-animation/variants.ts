export const variants = {
  initial: {
    x: 'calc(100% + 8px + 40px)',
  },
  animate: {
    x: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.225,
    },
  },
  exit: {
    x: 'calc(100% + 8px + 40px)',
  },
};
