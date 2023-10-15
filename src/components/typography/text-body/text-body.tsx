import cn from 'classnames';
import type { ReactNode } from 'react';

import styles from './text-body.module.scss';

type Size = 'sm' | 'md' | 'lg';
type FontWeight = 'regular' | 'medium' | 'semiBold' | 'bold';

export interface TextBodyProps {
  children: ReactNode;
  size: Size;
  fontWeight?: FontWeight;
  className?: string;
  inline?: boolean;
}

const FONT_SIZE: Record<Size, string> = {
  sm: styles.textSizeSm,
  md: styles.textSizeMd,
  lg: styles.textSizeLg,
};

const FONT_WEIGHT: Record<FontWeight, string> = {
  regular: '',
  medium: styles.fontWeightMedium,
  semiBold: styles.fontWeightSemiBold,
  bold: styles.fontWeightBold,
};

export function TextBody({
  className,
  children,
  size,
  fontWeight = 'regular',
  inline = false,
}: TextBodyProps) {
  const Element = inline ? 'span' : 'p';
  return (
    <Element
      className={cn(
        styles.textBody,
        FONT_SIZE[size],
        FONT_WEIGHT[fontWeight],
        className,
      )}
    >
      {children}
    </Element>
  );
}

export default TextBody;
