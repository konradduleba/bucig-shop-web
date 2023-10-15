import cn from 'classnames';
import type { ReactNode } from 'react';

import styles from './text-caption.module.scss';

type Size = 'xs' | 's';
type FontWeight = 'regular' | 'medium';

export interface TextCaptionProps {
  children: ReactNode;
  size: Size;
  fontWeight?: FontWeight;
  capitalized?: boolean;
  className?: string;
  inline?: boolean;
}

const FONT_SIZE: Record<Size, string> = {
  xs: styles.xs,
  s: styles.sm,
};

const FONT_WEIGHT: Record<FontWeight, string> = {
  regular: styles.fontRegular,
  medium: styles.fontMedium,
};

export function TextCaption({
  className,
  children,
  size,
  fontWeight,
  capitalized = false,
  inline = false,
}: TextCaptionProps) {
  const Element = inline ? 'span' : 'p';
  return (
    <Element
      className={cn(
        styles.textBody,
        FONT_SIZE[size],
        fontWeight && FONT_WEIGHT[fontWeight],
        capitalized && styles.capitalized,
        className,
      )}
    >
      {children}
    </Element>
  );
}
