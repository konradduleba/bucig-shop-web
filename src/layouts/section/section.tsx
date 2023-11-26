import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './section.module.scss';

interface SectionProps {
  className?: string;
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  className,
  children,
}) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
