import cn from 'classnames';
import type { ReactNode } from 'react';

import styles from './heading.module.scss';

type HeadingSize = '24' | '30' | '36' | '42' | '48' | '54' | '108';
type HeadingOption = 'primary' | 'secondary';
export interface HeadingProps {
  children: ReactNode;
  size: HeadingSize;
  option?: HeadingOption;
  className?: string;
}

const SIZE_CLASS: Record<HeadingSize, string> = {
  24: styles.size24,
  30: styles.size30,
  36: styles.size36,
  42: styles.size42,
  48: styles.size48,
  54: styles.size54,
  108: styles.size108,
};

const OPTION_CLASS: Record<HeadingOption, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
};

export function Heading({
  children,
  size,
  className,
  option = 'primary',
}: HeadingProps) {
  return (
    <p
      className={cn(
        styles.heading,
        SIZE_CLASS[size],
        OPTION_CLASS[option],
        className,
      )}
    >
      {children}
    </p>
  );
}

export default Heading;
