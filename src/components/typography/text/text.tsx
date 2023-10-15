import cn from 'classnames';
import type { ReactNode, FC } from 'react';

import styles from './text.module.scss';

type Size = 'xs' | 'sm' | 'md';
type FontWeight = 'regular' | 'medium' | 'bold';

export interface TextProps {
  children: ReactNode;
  size: Size;
  fontWeight?: FontWeight;
  className?: string;
}

const FONT_SIZE: Record<Size, string> = {
  xs: styles.textSizeXs,
  sm: styles.textSizeSm,
  md: styles.textSizeMd,
};

const FONT_WEIGHT: Record<FontWeight, string> = {
  regular: '',
  medium: styles.fontWeightMedium,
  bold: styles.fontWeightBold,
};

const Text: FC<TextProps> = ({
  children,
  size,
  fontWeight = 'regular',
  className,
}: TextProps) => {
  return (
    <span
      className={cn(
        styles.text,
        FONT_SIZE[size],
        FONT_WEIGHT[fontWeight],
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Text;
