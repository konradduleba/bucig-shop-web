import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';

import styles from './button.module.scss';

export type ButtonProps = ComponentPropsWithoutRef<'button'>;

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};
