import cn from 'classnames';
import type { ReactNode } from 'react';

import styles from './heading.module.scss';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

type FontWeightVariants =
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'inherit';

export interface HeadingProps {
  as: HeadingElement;
  children: ReactNode;
  className?: string;
  fontWeight?: FontWeightVariants;
}

const FONT_WEIGHT_MAPPER = {
  regular: styles.headingRegular,
  medium: styles.headingMedium,
  semiBold: styles.headingSemiBold,
  bold: styles.headingBold,
  inherit: styles.headingInherit,
};

export const Heading = ({
  className,
  children,
  as,
  fontWeight = 'inherit',
}: HeadingProps) => {
  const Element = as;

  return (
    <Element
      className={cn(className, styles.heading, FONT_WEIGHT_MAPPER[fontWeight], {
        [styles.headingLevel1]: as === 'h1',
        [styles.headingLevel2]: as === 'h2',
        [styles.headingLevel3]: as === 'h3',
        [styles.headingLevel4]: as === 'h4',
        [styles.headingLevel5]: as === 'h5',
      })}
    >
      {children}
    </Element>
  );
};
