import { CSSProperties, FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './section.module.scss';

interface SectionProps {
  className?: string;
  style?: CSSProperties;
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  className,
  children,
  style,
}) => {
  return (
    <div className={cn(styles.container, className)} style={style}>
      {children}
    </div>
  );
};
