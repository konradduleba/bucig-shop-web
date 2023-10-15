import cn from 'classnames';
import type { ReactNode } from 'react';

import styles from './text-small.module.scss';

type TextSmallSize = 'xs' | 'sm' | 'md';
export interface TextSmallProps {
  children: ReactNode;
  size: TextSmallSize;
  inline?: boolean;
  className?: string;
}

const SIZE_CLASS: Record<TextSmallSize, string> = {
  xs: styles.xs,
  sm: styles.sm,
  md: styles.md,
};

export function TextSmall({
  children,
  size,
  inline,
  className,
}: TextSmallProps) {
  const Element = inline ? 'span' : 'p';
  return (
    <Element className={cn(styles.textSmall, SIZE_CLASS[size], className)}>
      {children}
    </Element>
  );
}

export default TextSmall;
