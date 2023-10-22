import cn from 'classnames';
import type { ReactNode } from 'react';

import styles from './text.module.scss';

type TextSize = '12' | '14' | '16' | '18' | '20';
type TextOption = 'primary' | 'secondary';
export interface TextProps {
  children: ReactNode;
  size: TextSize;
  option?: TextOption;
  className?: string;
}

const SIZE_CLASS: Record<TextSize, string> = {
  12: styles.size12,
  14: styles.size14,
  16: styles.size16,
  18: styles.size18,
  20: styles.size20,
};

const OPTION_CLASS: Record<TextOption, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
};

export function Text({
  children,
  size,
  className,
  option = 'primary',
}: TextProps) {
  return (
    <p
      className={cn(
        styles.textSmall,
        SIZE_CLASS[size],
        OPTION_CLASS[option],
        className,
      )}
    >
      {children}
    </p>
  );
}

export default Text;
