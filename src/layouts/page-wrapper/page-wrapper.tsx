import { CSSProperties, FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import { useGetFooterHeight } from '@hooks';

import styles from './page-wrapper.module.scss';

interface PageWrapperProps {
  className?: string;
  center?: boolean;
}

export const PageWrapper: FC<PropsWithChildren<PageWrapperProps>> = ({
  className,
  center,
  children,
}) => {
  const { footerHeight } = useGetFooterHeight();

  const centerStyles: CSSProperties = {
    minHeight: `calc(100vh - ${footerHeight}px)`,
  };

  const additionalStyles = center ? centerStyles : {};

  return (
    <div
      className={cn(styles.container, className, { [styles.center]: center })}
      style={additionalStyles}
    >
      {children}
    </div>
  );
};
