import cn from 'classnames';

import LoaderIcon from '@icons/loader-icon';

import styles from './loader.module.scss';

export interface LoaderProps {
  size?: 'xs' | 'md' | 'lg';
  className?: string;
  coverContent?: boolean;
}

const SIZE_CLASS: Record<Required<LoaderProps>['size'], string> = {
  xs: styles.xs,
  md: styles.md,
  lg: styles.lg,
};

const ICON_FONT_SIZE: Record<Required<LoaderProps>['size'], string> = {
  xs: styles.iconXs,
  md: styles.iconMd,
  lg: styles.iconLg,
};

const WIDTH_BORDER: Record<Required<LoaderProps>['size'], number> = {
  xs: 5,
  md: 5,
  lg: 4,
};

export function Loader({
  size = 'lg',
  className,
  coverContent = false,
}: LoaderProps) {
  return (
    <div
      className={cn(
        styles.wrapper,
        SIZE_CLASS[size],
        className,
        coverContent && styles.coverContent,
      )}
    >
      <LoaderIcon
        className={cn(styles.icon, ICON_FONT_SIZE[size])}
        strokeWidth={WIDTH_BORDER[size]}
      />
    </div>
  );
}

export default Loader;
