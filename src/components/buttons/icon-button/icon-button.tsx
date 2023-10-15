import cn from 'classnames';
import type { ButtonHTMLAttributes, FC } from 'react';

import type { ButtonProps } from '../button/button';
import { getButtonClassName } from '../button/button';
import styles from '../button/button.module.scss';

export type IconButtonProps = Pick<ButtonProps, 'size' | 'className'> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: Exclude<ButtonProps['variant'], 'link'>;
    color: Exclude<ButtonProps['color'], 'white'>;
    renderIcon: () => JSX.Element;
  };

export const IconButton: FC<IconButtonProps> = ({
  renderIcon,
  variant = 'solid',
  color = 'primary',
  size = 'md',
  className,
  ...restProps
}) => {
  const buttonClassName = getButtonClassName(variant, color);

  return (
    <button
      className={cn(styles.iconButton, buttonClassName, className, {
        [styles.iconButtonLarge]: size === 'lg',
      })}
      {...restProps}
    >
      <span className={styles.iconButtonContentWrapper}>{renderIcon()}</span>
    </button>
  );
};
