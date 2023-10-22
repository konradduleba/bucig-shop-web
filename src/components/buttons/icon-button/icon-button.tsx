import cn from 'classnames';

import type { ButtonProps } from '../button/button';
import styles from '../button/button.module.scss';

export type IconButtonProps = ButtonProps & {
  renderIcon: () => JSX.Element;
};

export function IconButton({
  renderIcon,
  className,
  ...restProps
}: IconButtonProps) {
  return (
    <button className={cn(styles.iconButton, className)} {...restProps}>
      <span className={styles.iconButtonContentWrapper}>{renderIcon()}</span>
    </button>
  );
}

export default IconButton;
