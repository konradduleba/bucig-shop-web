import { FC } from 'react';
import cn from 'classnames';

import type { ButtonProps } from '../button/button';

import styles from '../button/button.module.scss';

export type IconButtonProps = ButtonProps & {
  renderIcon: () => JSX.Element;
};

export const IconButton: FC<IconButtonProps> = ({
  renderIcon,
  className,
  ...restProps
}) => {
  return (
    <button className={cn(styles.iconButton, className)} {...restProps}>
      <span className={styles.iconButtonContentWrapper}>{renderIcon()}</span>
    </button>
  );
};
