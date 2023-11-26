import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './page-wrapper.module.scss';

interface PageWrapperProps {
  className?: string;
}

export const PageWrapper: FC<PropsWithChildren<PageWrapperProps>> = ({
  className,
  children,
}) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
