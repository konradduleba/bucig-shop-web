import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './button.module.scss';

export type ButtonProps = ComponentPropsWithoutRef<'button'>;

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button {...props} className={cn(styles.button, className)}>
      {children}
    </button>
  );
};
