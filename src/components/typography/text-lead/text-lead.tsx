import cn from 'classnames';
import type { ReactNode } from 'react';

import styles from './text-lead.module.scss';

type Size = 'sm' | 'md' | 'lg' | 'xl';

export interface TextLeadProps {
  children: ReactNode;
  size: Size;
  className?: string;
  inline?: boolean;
  title?: string;
}

const FONT_SIZE: Record<Size, string> = {
  sm: styles.textSizeSm,
  md: styles.textSizeMd,
  lg: styles.textSizeLg,
  xl: styles.textSizeXl,
};

export const TextLead = ({
  className,
  children,
  size,
  inline = false,
  title,
}: TextLeadProps) => {
  const Element = inline ? 'span' : 'p';
  return (
    <Element
      title={title}
      className={cn(styles.textLead, FONT_SIZE[size], className)}
    >
      {children}
    </Element>
  );
};
