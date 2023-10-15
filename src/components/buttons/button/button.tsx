import cn from 'classnames';
import upperFirst from 'lodash/upperFirst';
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  ReactNode,
} from 'react';

import Loader from '@components/loader/loader';

import styles from './button.module.scss';
import type { Color, Size, Variant } from './models';

type Tag = 'button' | 'a';

interface BaseProps {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onlyIcon?: ReactNode;
  variant?: Variant;
  size?: Size;
  color?: Color;
  block?: boolean;
  className?: string;
  noPadding?: boolean;
  as?: Tag;
  showLoader?: boolean;
}

export type ButtonProps =
  | ({ as: 'button' } & BaseProps &
      ButtonHTMLAttributes<HTMLButtonElement> &
      Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>)
  | ({ as?: 'a' } & BaseProps &
      AnchorHTMLAttributes<HTMLAnchorElement> &
      Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>);

export const getButtonClassName = (variant: string, color: string) => {
  return styles[`button${upperFirst(variant)}${upperFirst(color)}`];
};

export const Button: FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  variant = 'solid',
  color = 'primary',
  size = 'md',
  block = false,
  noPadding = false,
  as = 'button',
  className,
  showLoader = false,
  ...restProps
}) => {
  const buttonClassName = getButtonClassName(variant, color);
  const Element = as;

  return (
    <Element
      className={cn(className, styles.button, buttonClassName, {
        [styles.buttonLarge]: size === 'lg',
        [styles.buttonBlock]: block,
        [styles.buttonNoPadding]: noPadding,
      })}
      {...restProps}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.textAndIcons}>
          {leftIcon ? (
            <div className={cn(styles.icon, styles.leftIcon)}>{leftIcon}</div>
          ) : null}
          {children}
          {rightIcon ? (
            <div className={cn(styles.icon, styles.rightIcon)}>{rightIcon}</div>
          ) : null}
        </div>
        {showLoader && (
          <Loader
            size={
              size === 'md' || noPadding || variant === 'link' ? 'xs' : 'md'
            }
            className={styles.loader}
          />
        )}
      </div>
    </Element>
  );
};
